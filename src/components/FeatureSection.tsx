'use client';

import CloudProvider from './CloudProvider';
import OptimizerHub from './OptimizerHub';

export default function FeatureSection() {
  return (
    <section className="mx-auto mt-32 max-w-4xl px-8">
      <div className="mb-16 text-center">
        <p className="text-sm uppercase tracking-widest text-blue-400">
          Orchestration Layer
        </p>

        <h2 className="mt-3 text-3xl font-bold">
          Route workloads intelligently
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <CloudProvider name="AWS" badge="☁️" />
        <CloudProvider name="Azure" badge="🔷" />
        <CloudProvider name="Google Cloud" badge="🌐" />
      </div>

      <div className="mt-24 flex justify-center pb-40">
        <OptimizerHub />
      </div>
    </section>
  );
}
