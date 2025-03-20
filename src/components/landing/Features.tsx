import { Beaker, LineChart, History, Code, Shield, Bug } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Beaker className="h-6 w-6 text-white" />,
      title: "A/B Testing",
      description:
        "Split test different prompt variations with controlled experiments. Compare performance and costs across multiple LLM providers.",
    },
    {
      icon: <LineChart className="h-6 w-6 text-white" />,
      title: "Performance Analytics",
      description:
        "Track response quality, latency, and costs in real-time. Set custom KPIs and get alerted when metrics drift.",
    },
    {
      icon: <History className="h-6 w-6 text-white" />,
      title: "Version Control",
      description:
        "Track prompt changes with git-like versioning. Compare results across versions and rollback when needed.",
    },
    {
      icon: <Code className="h-6 w-6 text-white" />,
      title: "Simple Integration",
      description:
        "Drop-in SDK for Python, Node.js, and REST API. Just wrap your existing LLM calls with our testing framework.",
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Guardrails & Safety",
      description:
        "Automatically detect harmful, biased, or off-brand responses. Define custom content policies and filters.",
    },
    {
      icon: <Bug className="h-6 w-6 text-white" />,
      title: "Debug & Replay",
      description:
        "Inspect full conversation traces, replay historical requests, and debug edge cases with detailed logs.",
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
