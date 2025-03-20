interface DetailedFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  reverse?: boolean;
}

export function DetailedFeature({
  title,
  description,
  icon,
  children,
  reverse,
}: DetailedFeatureProps) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-12 mb-24`}
    >
      <div className="flex-1 space-y-6">
        <div className="h-12 w-12 rounded-lg bg-zinc-800 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-zinc-400">{description}</p>
        {children}
      </div>
      <div className="flex-1">
        <div className="w-full h-[400px] rounded-lg border border-zinc-800 bg-zinc-900/50" />
      </div>
    </div>
  );
}
