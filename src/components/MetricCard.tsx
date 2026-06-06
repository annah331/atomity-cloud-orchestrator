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
      whileHover={{
        scale: 1.02,
        y: -2,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-gradient-to-br
        from-white/10
        to-white/5
        p-6
        backdrop-blur-sm
      "
    >
      <div className="flex flex-col items-center text-center">
        <p className="text-sm font-medium text-white/60">{label}</p>

        <h3 className="mt-3 text-4xl font-semibold tracking-tight">
          {value}
          <span className="text-2xl text-blue-400">%</span>
        </h3>
      </div>

      <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: delay + 0.3,
          }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
        />
      </div>
    </motion.article>
  );
}
