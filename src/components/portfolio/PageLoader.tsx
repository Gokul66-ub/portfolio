import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 900);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-brand-purple border-r-brand-cyan" />
              <div className="absolute inset-2 rounded-full bg-gradient-brand" />
            </div>
            <p className="font-display text-sm tracking-[0.3em] text-muted-foreground">
              LOADING
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
