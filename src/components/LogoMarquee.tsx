export function LogoMarquee() {
  const CLIENTS = [
    {
      name: "TidyScot",
      logo: "https://www.image2url.com/r2/default/images/1783539828330-e74f34ba-67fe-4ddc-b5d8-339f2c5a4277.png",
    },
    {
      name: "PSSDC",
      logo: "https://image2url.com/r2/default/images/1774198683930-bbf4df8f-069f-4962-8bae-a1750a1ce3da.png",
    },
    {
      name: "Citicare Health",
      logo: "https://www.image2url.com/r2/default/images/1783288320034-deba6ed5-6d41-4f8e-8edf-7de1b53993a2.png",
    },
  ];

  return (
    <div className="border-b border-neutral-200 bg-white py-12 lg:py-16 relative">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-neutral-600 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            TRUSTED BY INSTITUTIONS & GROWING BUSINESSES
          </span>
          <div className="flex items-center gap-3 text-xs font-mono font-bold text-neutral-500">
            <span>UK</span> • <span>NIGERIA</span>
          </div>
        </div>

        {/* 3 Large Direct Logos without any text or card borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-center justify-items-center">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center p-4 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                referrerPolicy="no-referrer"
                className="h-16 sm:h-20 lg:h-24 w-auto max-w-[240px] sm:max-w-[280px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
