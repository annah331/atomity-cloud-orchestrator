'use client';

import { motion } from 'framer-motion';

export default function OptimizerHub() {
  return (
    <div className="relative flex h-80 w-80 items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.05, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute h-80 w-80 rounded-full border border-blue-500/20"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="
          relative
          flex
          h-64
          w-64
          items-center
          justify-center
          rounded-full
          border
          border-blue-500/30
          bg-gradient-to-br
          from-blue-500/15
          to-cyan-500/10
          text-center
          shadow-lg
          shadow-blue-500/10
        "
      >
        <div>
          <p className="text-sm text-blue-400">Smart</p>
          <h2 className="text-3xl font-bold">Orchestrator</h2>
        </div>
      </motion.div>
    </div>
  );
}
