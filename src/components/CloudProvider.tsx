'use client';

import { motion } from 'framer-motion';

type CloudProviderProps = {
  name: string;
};

export default function CloudProvider({ name }: CloudProviderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="rounded-2xl border border-white/10 bg-white/5 px-8 py-6 text-center"
    >
      <h3 className="text-lg font-semibold">{name}</h3>
    </motion.div>
  );
}
