'use client';

import FeatureSection from '../components/FeatureSection';
import MetricCard from '../components/MetricCard';
import { useCloudMetrics } from '../hooks/useCloudMetrics';

export default function Home() {
  const { data, isLoading, error } = useCloudMetrics();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error || !data) {
    return <p>Something went wrong.</p>;
  }

  return (
    <main className="min-h-screen">
      <h1 className="mb-8 text-4xl font-bold">Atomity Cloud Orchestrator</h1>
      <section className="mx-auto max-w-6xl px-8 pt-20">
        <p className="mb-3 text-sm uppercase tracking-widest text-blue-400">
          Multi-Cloud Optimization
        </p>

        <h1 className="max-w-3xl text-5xl font-bold">
          Orchestrate workloads across cloud providers intelligently.
        </h1>

        <p className="mt-6 max-w-2xl text-white/70">
          Monitor utilization, optimize costs, and improve resource allocation
          across your cloud infrastructure.
        </p>
      </section>
      <FeatureSection />
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard label="CPU Savings" value={data.cpuSavings} />
        <MetricCard label="GPU Utilization" value={data.gpuUtilization} />
        <MetricCard label="Storage Efficiency" value={data.storageEfficiency} />
        <MetricCard
          label="Network Performance"
          value={data.networkPerformance}
        />
      </section>
    </main>
  );
}
