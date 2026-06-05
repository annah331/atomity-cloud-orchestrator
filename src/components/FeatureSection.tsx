import CloudProvider from './CloudProvider';
import OptimizerHub from './OptimizerHub';

export default function FeatureSection() {
  return (
    <section className="mx-auto mt-24 max-w-6xl px-8 space-y-16">
      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-widest text-blue-400">
          Orchestration Layer
        </p>

        <h2 className="mt-3 text-3xl font-bold">
          Route workloads intelligently
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <CloudProvider name="AWS" badge="☁️" direction="left" />

        <CloudProvider name="Azure" badge="🔷" direction="center" />

        <CloudProvider name="Google Cloud" badge="🌐" direction="right" />
      </div>

      <div className="mt-16 flex justify-center">
        <OptimizerHub />
      </div>
    </section>
  );
}
