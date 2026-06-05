'use client';

import { motion } from 'framer-motion';

type MetricCardProps = {
  label: string;
  value: number;
  delay?: number;
};

export default function MetricCard({
  label,
  value,
  delay = 0,
}: MetricCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6"
    >
      <p className="text-sm opacity-70">{label}</p>
      <h3 className="mt-2 text-3xl font-bold">{value}%</h3>
    </motion.article>
  );
}
