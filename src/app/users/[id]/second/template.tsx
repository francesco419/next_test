'use client';

import { motion } from 'framer-motion';

export default function UserSecondTemplate({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
    >
      <h1>Second</h1>
      {children}
    </motion.div>
  );
}
