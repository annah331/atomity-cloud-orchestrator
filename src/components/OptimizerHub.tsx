'use client';

import { motion } from 'framer-motion';

export default function OptimizerHub() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="  mx-auto
        flex
        h-52
        w-52
        items-center
        justify-center
        rounded-full
        border
        border-blue-500/30
        bg-blue-500/10
        text-center"
    >
      <div>
        <p className="text-sm text-blue-400">Smart</p>
        <h2 className="text-2xl font-bold">Orchestrator</h2>
      </div>
    </motion.div>
  );
}
