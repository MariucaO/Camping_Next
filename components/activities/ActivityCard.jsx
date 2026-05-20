"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ActivityCard({ title, image, description, content }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      onClick={() => setExpanded(!expanded)} // ✅ Toggle on entire card
      className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.02 }}
      layout
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Text */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-serif text-amber-600">{title}</h3>
          <span className="text-xl text-amber-500">{expanded ? "▲" : "▼"}</span>
        </div>

        <p className="text-gray-700 text-sm mt-2">{description}</p>

        {/* Expanded content */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.p
              className="text-gray-700 text-sm mt-3"
              key="content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {content}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
