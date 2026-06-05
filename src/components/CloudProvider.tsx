'use client';

import { motion } from 'framer-motion';

type CloudProviderProps = {
  name: string;
  direction?: 'left' | 'center' | 'right';
};

export default function CloudProvider({
  name,
  direction = 'center',
}: CloudProviderProps) {
  const x = direction === 'left' ? -40 : direction === 'right' ? 40 : 0;
  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-48 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-center"
    >
      <h3 className="text-lg font-semibold">{name}</h3>
    </motion.div>
  );
}
