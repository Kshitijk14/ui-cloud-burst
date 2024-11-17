import { motion } from "framer-motion";
import { Sun, Cloud } from "lucide-react";
import gsap from "gsap";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-blue-500 flex items-center justify-center relative overflow-hidden">
      <motion.div className="absolute inset-0">
        <Sun className="text-yellow-400 absolute top-8 left-8" />
        <Cloud className="text-white absolute top-16 right-12" />
        {/* Add more cloud icons */}
      </motion.div>

      <motion.h1
        className="text-5xl text-white font-bold"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Welcome to Cloud Burst Prediction
      </motion.h1>
    </div>
  );
}
