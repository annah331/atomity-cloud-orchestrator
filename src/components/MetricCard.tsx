type MetricCardProps = {
  label: string;
  value: number;
};

export default function MetricCard({ label, value }: MetricCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-sm opacity-70">{label}</p>
      <h3 className="mt-2 text-3xl font-bold">{value}%</h3>
    </article>
  );
}
