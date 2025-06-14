'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function MotionSection({ children, className = "", delay = 0 }: MotionSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}