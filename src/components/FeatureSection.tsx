import CloudProvider from './CloudProvider';
import OptimizerHub from './OptimizerHub';

export default function FeatureSection() {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-8">
      <div className="grid gap-6 md:grid-cols-3">
        <CloudProvider name="AWS" />
        <CloudProvider name="Azure" />
        <CloudProvider name="Google Cloud" />
      </div>
      <div className="mt-12">
        <OptimizerHub />
      </div>
    </section>
  );
}
