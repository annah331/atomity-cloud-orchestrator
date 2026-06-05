import CloudProvider from './CloudProvider';
import OptimizerHub from './OptimizerHub';

export default function FeatureSection() {
  return (
    <section className="mx-auto mt-24 max-w-6xl px-8">
      <div className="grid gap-6 md:grid-cols-3">
        <CloudProvider name="AWS" direction="left" />
        <CloudProvider name="Azure" direction="center" />
        <CloudProvider name="Google Cloud" direction="right" />
      </div>
      <div className="mt-16 flex justify-center">
        <OptimizerHub />
      </div>
    </section>
  );
}
