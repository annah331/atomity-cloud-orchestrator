'use client';

import { motion } from 'framer-motion';

export default function OptimizerHub() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute -top-6 h-3 w-3 rounded-full bg-blue-400" />
      <div className="absolute -left-6 h-3 w-3 rounded-full bg-cyan-400" />
      <div className="absolute -right-6 h-3 w-3 rounded-full bg-blue-400" />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.05, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute h-72 w-72 rounded-full border border-blue-500/20"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="  relative
        flex
        h-56
        w-56
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
        shadow-blue-500/10"
      >
        <div>
          <p className="text-sm text-blue-400">Smart</p>
          <h2 className="text-2xl font-bold">Orchestrator</h2>
        </div>
      </motion.div>
    </div>
  );
}
