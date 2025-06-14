
'use client';

import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';

const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const MotionSection: React.FC<MotionSectionProps> = ({ children, className, delay = 0 }) => (
  <MotionDiv
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </MotionDiv>
);

export default MotionSection;
