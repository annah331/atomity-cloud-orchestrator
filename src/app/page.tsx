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
      <section className="mx-auto  max-w-6xl px-8 pt-20">
        <p className="mb-3 text-sm uppercase tracking-widest text-blue-400">
          Multi-Cloud Optimization
        </p>

        <h3 className="max-w-3xl text-5xl font-semibold">
          Orchestrate workloads across cloud providers intelligently.
        </h3>

        <p className="mt-6 max-w-2xl text-white/70">
          Monitor utilization, optimize costs, and improve resource allocation
          across your cloud infrastructure.
        </p>
      </section>
      <FeatureSection />
      <section className="mx-auto mt-28 max-w-6xl px-8">
        <div className=" grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
