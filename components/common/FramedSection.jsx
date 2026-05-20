"use client";
import { motion } from "framer-motion";
import { containerStagger, fadeInUp } from "./animations/motionVariants";

export default function FramedSection({ children }) {
  return (
    <section className="bg-stone-200 py-24 px-4">
      <motion.div
        className="max-w-5xl mx-auto bg-stone-100 text-stone-800 rounded-2xl sm:p-10 lg:p-16 shadow-xl"
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {Array.isArray(children) ? (
          children.map((child, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              transition={{ delay: i * 0.2 }}
            >
              {child}
            </motion.div>
          ))
        ) : (
          <motion.div variants={fadeInUp}>{children}</motion.div>
        )}
      </motion.div>
    </section>
  );
}
