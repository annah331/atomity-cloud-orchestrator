'use client';

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
    <main className="mx-auto max-w-6xl p-8">
      <h1 className="mb-8 text-4xl font-bold">Atomity Cloud Orchestrator</h1>
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
