import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

interface RotatingEarthProps {
  className?: string;
}

type GeoCoordinate = [number, number];
type GeoPolygon = GeoCoordinate[][];
type GeoMultiPolygon = GeoCoordinate[][][];

interface GeoGeometry {
  type: string;
  coordinates: GeoPolygon | GeoMultiPolygon;
}

interface GeoJsonFeature {
  type: string;
  geometry: GeoGeometry;
  properties?: Record<string, unknown>;
}

interface GeoJsonData {
  type: string;
  features: GeoJsonFeature[];
}

export default function RotatingEarth({ className = "" }: RotatingEarthProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrameId: number;
    let rotationTimer: d3.Timer | null = null;
    let isDisposed = false;

    // Fixed key coordinates: Lagos (Nigeria) and London (UK)
    const activeHubs: { name: string; coords: [number, number]; label: string }[] = [
      { name: "Lagos", coords: [3.3792, 6.5244], label: "NG" },
      { name: "London", coords: [-0.1278, 51.5074], label: "UK" },
    ];

    // Responsive dimensions
    let containerWidth = container.clientWidth || 460;
    let containerHeight = containerWidth;
    let radius = (containerWidth / 2) * 0.92;

    // Create projection and path generator
    const projection = d3
      .geoOrthographic()
      .scale(radius)
      .translate([containerWidth / 2, containerHeight / 2])
      .clipAngle(90);

    const path = d3.geoPath().projection(projection).context(context);

    const updateDimensions = () => {
      if (!container || isDisposed) return;
      const w = container.clientWidth || 460;
      containerWidth = w;
      containerHeight = w;
      radius = (containerWidth / 2) * 0.92;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = containerWidth * dpr;
      canvas.height = containerHeight * dpr;
      canvas.style.width = `${containerWidth}px`;
      canvas.style.height = `${containerHeight}px`;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(dpr, dpr);

      projection.scale(radius).translate([containerWidth / 2, containerHeight / 2]);
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
      render();
    });
    resizeObserver.observe(container);

    const pointInPolygon = (point: [number, number], polygon: GeoCoordinate[]): boolean => {
      const [x, y] = point;
      let inside = false;
      for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const [xi, yi] = polygon[i];
        const [xj, yj] = polygon[j];
        if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
          inside = !inside;
        }
      }
      return inside;
    };

    const pointInFeature = (point: [number, number], feature: GeoJsonFeature): boolean => {
      const geometry = feature.geometry;
      if (geometry.type === "Polygon") {
        const coordinates = geometry.coordinates as GeoPolygon;
        if (!pointInPolygon(point, coordinates[0])) return false;
        for (let i = 1; i < coordinates.length; i++) {
          if (pointInPolygon(point, coordinates[i])) return false;
        }
        return true;
      } else if (geometry.type === "MultiPolygon") {
        const coordinates = geometry.coordinates as GeoMultiPolygon;
        for (const polygon of coordinates) {
          if (pointInPolygon(point, polygon[0])) {
            let inHole = false;
            for (let i = 1; i < polygon.length; i++) {
              if (pointInPolygon(point, polygon[i])) {
                inHole = true;
                break;
              }
            }
            if (!inHole) return true;
          }
        }
        return false;
      }
      return false;
    };

    const generateDotsInPolygon = (feature: GeoJsonFeature, dotSpacing = 16) => {
      const dots: [number, number][] = [];
      const bounds = d3.geoBounds(feature as unknown as d3.GeoPermissibleObjects);
      const [[minLng, minLat], [maxLng, maxLat]] = bounds;
      const stepSize = dotSpacing * 0.11;

      for (let lng = minLng; lng <= maxLng; lng += stepSize) {
        for (let lat = minLat; lat <= maxLat; lat += stepSize) {
          const point: [number, number] = [lng, lat];
          if (pointInFeature(point, feature)) {
            dots.push(point);
          }
        }
      }
      return dots;
    };

    interface DotData {
      lng: number;
      lat: number;
      visible: boolean;
    }

    const allDots: DotData[] = [];
    let landFeatures: GeoJsonData | null = null;

    const render = () => {
      if (isDisposed) return;
      context.clearRect(0, 0, containerWidth, containerHeight);

      const currentScale = projection.scale();
      const scaleFactor = currentScale / radius;

      // Draw ocean / globe sphere background
      context.beginPath();
      context.arc(containerWidth / 2, containerHeight / 2, currentScale, 0, 2 * Math.PI);
      context.fillStyle = "#0c0c0e";
      context.fill();
      context.strokeStyle = "#323238";
      context.lineWidth = 1.6 * scaleFactor;
      context.stroke();

      if (landFeatures) {
        // Draw coordinate graticule grid
        const graticule = d3.geoGraticule();
        context.beginPath();
        path(graticule() as unknown as d3.GeoPermissibleObjects);
        context.strokeStyle = "#27272a";
        context.lineWidth = 0.85 * scaleFactor;
        context.globalAlpha = 0.45;
        context.stroke();
        context.globalAlpha = 1;

        // Draw land boundaries with strong definition
        context.beginPath();
        landFeatures.features.forEach((feature) => {
          path(feature as unknown as d3.GeoPermissibleObjects);
        });
        context.strokeStyle = "#4b4b52";
        context.lineWidth = 1.15 * scaleFactor;
        context.stroke();

        // Draw matrix halftone land dots with high contrast
        allDots.forEach((dot) => {
          const projected = projection([dot.lng, dot.lat]);
          if (
            projected &&
            projected[0] >= 0 &&
            projected[0] <= containerWidth &&
            projected[1] >= 0 &&
            projected[1] <= containerHeight
          ) {
            context.beginPath();
            context.arc(projected[0], projected[1], 1.25 * scaleFactor, 0, 2 * Math.PI);
            context.fillStyle = "#a1a1aa";
            context.fill();
          }
        });

        // Draw active hubs (Lagos, London) in studio flame orange with pulsing radar rings
        activeHubs.forEach((hub) => {
          const coords = projection(hub.coords);
          if (
            coords &&
            coords[0] >= 0 &&
            coords[0] <= containerWidth &&
            coords[1] >= 0 &&
            coords[1] <= containerHeight
          ) {
            // Glow ring
            context.beginPath();
            context.arc(coords[0], coords[1], 7 * scaleFactor, 0, 2 * Math.PI);
            context.fillStyle = "rgba(255, 85, 0, 0.28)";
            context.fill();

            // Center pin
            context.beginPath();
            context.arc(coords[0], coords[1], 3.2 * scaleFactor, 0, 2 * Math.PI);
            context.fillStyle = "#ff5500";
            context.fill();
            context.strokeStyle = "#ffffff";
            context.lineWidth = 1.4 * scaleFactor;
            context.stroke();

            // Hub tag
            context.font = `bold ${Math.max(10, Math.round(11 * scaleFactor))}px monospace`;
            context.fillStyle = "#ffffff";
            context.fillText(hub.label, coords[0] + 9, coords[1] + 4);
          }
        });
      }
    };

    const loadWorldData = async () => {
      try {
        setIsLoading(true);
        // Load local bundle first, fallback to CDN if necessary
        let response = await fetch("/ne_110m_land.json").catch(() => null);
        if (!response || !response.ok) {
          response = await fetch(
            "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json",
          );
        }
        if (!response.ok) throw new Error("Could not load map data");

        landFeatures = (await response.json()) as GeoJsonData;

        if (landFeatures && landFeatures.features) {
          landFeatures.features.forEach((feature) => {
            const dots = generateDotsInPolygon(feature, 17);
            dots.forEach(([lng, lat]) => {
              allDots.push({ lng, lat, visible: true });
            });
          });
        }

        render();
        setIsLoading(false);
      } catch (err: unknown) {
        console.warn("World data failed to load:", err);
        setIsLoading(false);
      }
    };

    // Rotation and interaction controls
    const rotation: [number, number] = [-15, -10];
    let autoRotate = true;
    const rotationSpeed = 0.35;

    const rotate = () => {
      if (autoRotate && !isDisposed) {
        rotation[0] += rotationSpeed;
        projection.rotate(rotation);
        render();
      }
    };

    rotationTimer = d3.timer(rotate);

    // Mouse Drag
    const onMouseDown = (event: MouseEvent) => {
      autoRotate = false;
      const startX = event.clientX;
      const startY = event.clientY;
      const startRotation = [...rotation];

      const onMouseMove = (moveEvent: MouseEvent) => {
        const sensitivity = 0.4;
        const dx = moveEvent.clientX - startX;
        const dy = moveEvent.clientY - startY;

        rotation[0] = startRotation[0] + dx * sensitivity;
        rotation[1] = Math.max(-85, Math.min(85, startRotation[1] - dy * sensitivity));

        projection.rotate(rotation);
        render();
      };

      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        setTimeout(() => {
          autoRotate = true;
        }, 1200);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    // Touch Drag (Mobile)
    const onTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1) return;
      autoRotate = false;
      const startX = event.touches[0].clientX;
      const startY = event.touches[0].clientY;
      const startRotation = [...rotation];

      const onTouchMove = (moveEvent: TouchEvent) => {
        if (moveEvent.touches.length !== 1) return;
        const sensitivity = 0.4;
        const dx = moveEvent.touches[0].clientX - startX;
        const dy = moveEvent.touches[0].clientY - startY;

        rotation[0] = startRotation[0] + dx * sensitivity;
        rotation[1] = Math.max(-85, Math.min(85, startRotation[1] - dy * sensitivity));

        projection.rotate(rotation);
        render();
      };

      const onTouchEnd = () => {
        document.removeEventListener("touchmove", onTouchMove);
        document.removeEventListener("touchend", onTouchEnd);
        setTimeout(() => {
          autoRotate = true;
        }, 1200);
      };

      document.addEventListener("touchmove", onTouchMove);
      document.addEventListener("touchend", onTouchEnd);
    };

    // Mouse Wheel Zoom
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      const scaleFactor = event.deltaY > 0 ? 0.94 : 1.06;
      const currentScale = projection.scale();
      const newRadius = Math.max(radius * 0.75, Math.min(radius * 2.2, currentScale * scaleFactor));
      projection.scale(newRadius);
      render();
    };

    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("touchstart", onTouchStart, { passive: true });
    canvas.addEventListener("wheel", onWheel, { passive: false });

    loadWorldData();

    return () => {
      isDisposed = true;
      if (rotationTimer) rotationTimer.stop();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center select-none ${className}`}
    >
      <div className="relative flex items-center justify-center cursor-grab active:cursor-grabbing">
        <canvas
          ref={canvasRef}
          className="rounded-full select-none"
          style={{ touchAction: "none" }}
        />
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-transparent rounded-full">
            <span className="font-mono text-xs text-accent-brand animate-pulse">
              Calibrating Map...
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
