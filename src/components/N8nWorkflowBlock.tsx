import type React from "react";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { motion, type PanInfo } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Database, Mail, Plus, Settings, Webhook, Zap } from "lucide-react";

interface WorkflowNode {
  id: string;
  type: "trigger" | "action" | "condition";
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  position: { x: number; y: number };
}

interface WorkflowConnection {
  from: string;
  to: string;
}

const NODE_WIDTH = 180;
const NODE_HEIGHT = 90;

const nodeTemplates: Omit<WorkflowNode, "id" | "position">[] = [
  {
    type: "trigger",
    title: "Webhook",
    description: "Receive payload from API",
    icon: Webhook,
    color: "emerald",
  },
  {
    type: "action",
    title: "Database Query",
    description: "Fetch user records",
    icon: Database,
    color: "blue",
  },
  {
    type: "condition",
    title: "Condition",
    description: "Check user status",
    icon: Settings,
    color: "amber",
  },
  {
    type: "action",
    title: "Send Email",
    description: "Notify user",
    icon: Mail,
    color: "purple",
  },
  {
    type: "action",
    title: "Log Event",
    description: "Record activity",
    icon: Zap,
    color: "indigo",
  },
];

const initialNodes: WorkflowNode[] = [
  {
    id: "node-1",
    type: "trigger",
    title: "Webhook",
    description: "Receive payload from API",
    icon: Webhook,
    color: "emerald",
    position: { x: 20, y: 70 },
  },
  {
    id: "node-2",
    type: "action",
    title: "Database Query",
    description: "Fetch user records",
    icon: Database,
    color: "blue",
    position: { x: 220, y: 70 },
  },
  {
    id: "node-3",
    type: "condition",
    title: "Condition",
    description: "Check user status",
    icon: Settings,
    color: "amber",
    position: { x: 420, y: 70 },
  },
];

const initialConnections: WorkflowConnection[] = [
  { from: "node-1", to: "node-2" },
  { from: "node-2", to: "node-3" },
];

const colorClasses: Record<string, string> = {
  emerald: "border-emerald-400/40 bg-emerald-400/10 text-emerald-400",
  blue: "border-blue-400/40 bg-blue-400/10 text-blue-400",
  amber: "border-amber-400/40 bg-amber-400/10 text-amber-400",
  purple: "border-purple-400/40 bg-purple-400/10 text-purple-400",
  indigo: "border-indigo-400/40 bg-indigo-400/10 text-indigo-400",
};

function WorkflowConnectionLine({
  from,
  to,
  nodes,
}: {
  from: string;
  to: string;
  nodes: WorkflowNode[];
}) {
  const fromNode = nodes.find((n) => n.id === from);
  const toNode = nodes.find((n) => n.id === to);
  if (!fromNode || !toNode) return null;

  const startX = fromNode.position.x + NODE_WIDTH;
  const startY = fromNode.position.y + NODE_HEIGHT / 2;
  const endX = toNode.position.x;
  const endY = toNode.position.y + NODE_HEIGHT / 2;

  const cp1X = startX + (endX - startX) * 0.5;
  const cp2X = endX - (endX - startX) * 0.5;

  const path = `M ${startX} ${startY} C ${cp1X} ${startY}, ${cp2X} ${endY}, ${endX} ${endY}`;

  return (
    <path
      d={path}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeDasharray="8,6"
      strokeLinecap="round"
      opacity={0.35}
      className="text-foreground"
    />
  );
}

export function N8nWorkflowBlock() {
  const [nodes, setNodes] = useState<WorkflowNode[]>(initialNodes);
  const [connections, setConnections] = useState<WorkflowConnection[]>(initialConnections);
  const canvasRef = useRef<HTMLDivElement>(null);
  const dragStartPosition = useRef<{ x: number; y: number } | null>(null);
  const [draggingNodeId, setDraggingNodeId] = useState<string | null>(null);
  const [contentSize, setContentSize] = useState(() => {
    const maxX = Math.max(...initialNodes.map((n) => n.position.x + NODE_WIDTH));
    const maxY = Math.max(...initialNodes.map((n) => n.position.y + NODE_HEIGHT));
    return { width: maxX + 50, height: maxY + 50 };
  });

  const handleDragStart = (nodeId: string) => {
    setDraggingNodeId(nodeId);
    const node = nodes.find((n) => n.id === nodeId);
    if (node) {
      dragStartPosition.current = { x: node.position.x, y: node.position.y };
    }
  };

  const handleDrag = (nodeId: string, { offset }: PanInfo) => {
    if (draggingNodeId !== nodeId || !dragStartPosition.current) return;

    const newX = dragStartPosition.current.x + offset.x;
    const newY = dragStartPosition.current.y + offset.y;
    const constrainedX = Math.max(0, newX);
    const constrainedY = Math.max(0, newY);

    flushSync(() => {
      setNodes((prev) =>
        prev.map((node) =>
          node.id === nodeId ? { ...node, position: { x: constrainedX, y: constrainedY } } : node,
        ),
      );
    });

    setContentSize((prev) => ({
      width: Math.max(prev.width, constrainedX + NODE_WIDTH + 50),
      height: Math.max(prev.height, constrainedY + NODE_HEIGHT + 50),
    }));
  };

  const handleDragEnd = () => {
    setDraggingNodeId(null);
    dragStartPosition.current = null;
  };

  const addNode = () => {
    const template = nodeTemplates[Math.floor(Math.random() * nodeTemplates.length)];
    const lastNode = nodes[nodes.length - 1];
    const newPosition = lastNode
      ? { x: lastNode.position.x + 210, y: lastNode.position.y }
      : { x: 20, y: 70 };

    const newNode: WorkflowNode = {
      id: `node-${Date.now()}`,
      ...template,
      position: newPosition,
    };

    flushSync(() => {
      setNodes((prev) => [...prev, newNode]);
      if (lastNode) {
        setConnections((prev) => [...prev, { from: lastNode.id, to: newNode.id }]);
      }
    });

    setContentSize((prev) => ({
      width: Math.max(prev.width, newPosition.x + NODE_WIDTH + 50),
      height: Math.max(prev.height, newPosition.y + NODE_HEIGHT + 50),
    }));

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.scrollTo({
        left: newPosition.x + NODE_WIDTH - canvas.clientWidth + 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full h-full min-h-[300px] flex flex-col justify-between overflow-hidden rounded-2xl border border-border/40 bg-background/80 backdrop-blur p-3 sm:p-4 text-foreground shadow-inner">
      {/* Header */}
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2">
          <Badge
            variant="outline"
            className="rounded-full border-emerald-400/40 bg-emerald-400/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-400"
          >
            Active Pipeline
          </Badge>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-foreground/70 font-mono font-bold">
            Workflow Engine
          </span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={addNode}
          className="h-7 gap-1.5 rounded-lg px-2 text-[10px] uppercase tracking-wider text-foreground/80 hover:text-foreground cursor-pointer"
          aria-label="Add new node"
        >
          <Plus className="h-3 w-3" aria-hidden="true" />
          <span>Add Node</span>
        </Button>
      </div>

      {/* Canvas */}
      <div
        ref={canvasRef}
        className="relative h-[220px] sm:h-[260px] w-full overflow-auto rounded-xl border border-border/30 bg-background/50"
        role="region"
        aria-label="Workflow canvas"
        tabIndex={0}
      >
        <div
          className="relative"
          style={{
            minWidth: contentSize.width,
            minHeight: contentSize.height,
          }}
        >
          {/* SVG Connections */}
          <svg
            className="absolute top-0 left-0 pointer-events-none"
            width={contentSize.width}
            height={contentSize.height}
            style={{ overflow: "visible" }}
            aria-hidden="true"
          >
            {connections.map((c) => (
              <WorkflowConnectionLine
                key={`${c.from}-${c.to}`}
                from={c.from}
                to={c.to}
                nodes={nodes}
              />
            ))}
          </svg>

          {/* Nodes */}
          {nodes.map((node) => {
            const Icon = node.icon;
            const isDragging = draggingNodeId === node.id;

            return (
              <motion.div
                key={node.id}
                drag
                dragMomentum={false}
                dragConstraints={{
                  left: 0,
                  top: 0,
                  right: 10000,
                  bottom: 10000,
                }}
                onDragStart={() => handleDragStart(node.id)}
                onDrag={(_, info) => handleDrag(node.id, info)}
                onDragEnd={handleDragEnd}
                style={{
                  x: node.position.x,
                  y: node.position.y,
                  width: NODE_WIDTH,
                  transformOrigin: "0 0",
                }}
                className="absolute cursor-grab"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileDrag={{ scale: 1.05, zIndex: 50, cursor: "grabbing" }}
                aria-grabbed={isDragging}
              >
                <Card
                  className={`group/node relative w-full overflow-hidden rounded-xl border ${colorClasses[node.color]} bg-background/90 p-2.5 backdrop-blur transition-all hover:shadow-lg ${
                    isDragging ? "shadow-xl ring-2 ring-primary/50" : ""
                  }`}
                  role="article"
                  aria-label={`${node.type} node: ${node.title}`}
                >
                  <div className="relative space-y-1">
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border ${colorClasses[node.color]} bg-background/80`}
                        aria-hidden="true"
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <Badge
                          variant="outline"
                          className="mb-0.5 rounded-full border-border/40 bg-background/80 px-1 py-0 text-[8px] uppercase tracking-wider text-foreground/70"
                        >
                          {node.type}
                        </Badge>
                        <h3 className="truncate text-[11px] font-semibold tracking-tight text-foreground">
                          {node.title}
                        </h3>
                      </div>
                    </div>
                    <p className="line-clamp-1 text-[9px] leading-tight text-foreground/70">
                      {node.description}
                    </p>
                    <div className="flex items-center gap-1 text-[9px] text-foreground/50">
                      <ArrowRight className="h-2 w-2" aria-hidden="true" />
                      <span className="uppercase tracking-wider">Connected</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer Stats */}
      <div
        className="mt-2 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border/30 bg-background/40 px-3 py-1.5 backdrop-blur-sm shrink-0"
        role="status"
        aria-live="polite"
      >
        <div className="flex flex-wrap items-center gap-3 text-[10px] text-foreground/70">
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            <span className="uppercase tracking-wider font-mono">
              {nodes.length} {nodes.length === 1 ? "Node" : "Nodes"}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            <span className="uppercase tracking-wider font-mono">
              {connections.length} {connections.length === 1 ? "Connection" : "Connections"}
            </span>
          </div>
        </div>
        <p className="text-[9px] uppercase tracking-wider text-foreground/50 font-mono">
          Drag nodes to reposition
        </p>
      </div>
    </div>
  );
}
