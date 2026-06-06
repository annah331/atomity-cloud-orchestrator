'use client';

import { motion } from 'framer-motion';

type CloudProviderProps = {
  name: string;
  badge: string;
};

export default function CloudProvider({ name, badge }: CloudProviderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        y: -4,
      }}
      transition={{ duration: 0.5 }}
      className="
        w-52
        rounded-2xl
        border
        border-white/10
        bg-white/5
        px-6
        py-6
        text-center
        backdrop-blur-sm
        shadow-lg
        shadow-blue-500/5
      "
    >
      <div className="mb-3 text-3xl">{badge}</div>

      <h3 className="text-lg font-semibold">{name}</h3>

      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/50">
        Cloud Provider
      </p>
    </motion.div>
  );
}
