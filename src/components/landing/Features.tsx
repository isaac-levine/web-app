import { Terminal, LineChart, GitBranch } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Terminal className="h-6 w-6 text-white" />,
      title: "A/B Testing",
      description:
        "Run controlled experiments with different prompt variations. Make data-driven decisions about your AI features.",
    },
    {
      icon: <LineChart className="h-6 w-6 text-white" />,
      title: "Real-time Monitoring",
      description:
        "Track response times, token usage, and custom metrics. Get alerts when your prompts aren't performing.",
    },
    {
      icon: <GitBranch className="h-6 w-6 text-white" />,
      title: "Version Control",
      description:
        "Keep track of prompt changes and roll back when needed. Perfect for team collaboration.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-24 border-t border-zinc-800">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-6 rounded-lg"
        >
          <div className="h-12 w-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
            {feature.icon}
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            {feature.title}
          </h3>
          <p className="text-zinc-400">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
