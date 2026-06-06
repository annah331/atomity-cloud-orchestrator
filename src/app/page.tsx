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
      <section className="mx-auto max-w-6xl px-8 pt-20 text-center">
        <h1 className="mx-auto max-w-4xl text-5xl font-semibold leading-tight">
          Orchestrate workloads across cloud providers intelligently.
        </h1>

        <p className="mx-auto mt-10 max-w-2xl text-white/70">
          Monitor utilization, optimize costs, and improve resource allocation
          across your cloud infrastructure.
        </p>
      </section>

      <FeatureSection />

      <section className="mx-auto mt-20 max-w-5xl px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard label="CPU Savings" value={data.cpuSavings} delay={0} />

          <MetricCard
            label="GPU Utilization"
            value={data.gpuUtilization}
            delay={0.1}
          />

          <MetricCard
            label="Storage Efficiency"
            value={data.storageEfficiency}
            delay={0.2}
          />

          <MetricCard
            label="Network Performance"
            value={data.networkPerformance}
            delay={0.3}
          />
        </div>
      </section>
    </main>
  );
}
