"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Reason1() {
  const reasons = [
    "Loay is a big liar. 😡",
    "He is mentally unstable. 🤯",
    "He exhibits psychopathic behavior. 🤪",
    "He cheated on you with other girls. 😢",
    "He never let you spend time with your friends. 🚫👫",
    "He distanced you from important things in your life. 🛑",
    "He was always controlling and manipulative. 🎭",
    "He disrespected your boundaries. 🚷",
    "He never supported your dreams. 💔🌠",
    "He was emotionally abusive. 😔",
  ];

  return (
    <div className="min-h-screen relative bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center text-gray-800 p-4 overflow-hidden">
      {/* خلفية متحركة */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="absolute w-full h-full flex flex-wrap items-center justify-center opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          {Array(50)
            .fill("💔")
            .map((emoji, index) => (
              <motion.span
                key={index}
                className="text-3xl"
                style={{
                  position: "absolute",
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: [0, -30, 0], opacity: [1, 0.5, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                💔
              </motion.span>
            ))}
        </motion.div>
      </div>

      <motion.h1
        className="text-4xl font-bold mb-8 font-[cursive] text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Reasons Why Loay Wasn't Right for Mona
      </motion.h1>

      <div className="w-full max-w-3xl mb-8 px-4">
        <ul className="list-disc list-inside text-lg space-y-4">
          {reasons.map((reason, index) => (
            <motion.li
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg font-[sans-serif] text-gray-700 flex items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <span className="text-2xl mr-2">
                {reason.split(" ")[reason.split(" ").length - 1]}
              </span>
              {reason.split(" ").slice(0, -1).join(" ")}
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="flex items-center space-x-8 mb-8">
        {/* صورة Mona كيف كانت */}
        <motion.div
          className="relative w-48 h-48 group"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/mona-before.jpg"
            alt="Mona Before"
            layout="fill"
            objectFit="cover"
            className="w-full h-full rounded-full shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-[sans-serif] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            How Mona Was
          </div>
        </motion.div>

        <motion.div
          className="text-4xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          ➔
        </motion.div>

        {/* صورة Mona كيف أصبحت */}
        <motion.div
          className="relative w-48 h-48 group"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/mona-after.jpg"
            alt="Mona After"
            layout="fill"
            objectFit="cover"
            className="w-full h-full rounded-full shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-[sans-serif] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            How Mona Became
          </div>
        </motion.div>
      </div>

      {/* الزر للانتقال إلى الصفحة التالية */}
      <Link href="/reason2" passHref>
        <motion.button
          className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Go to Next Page
        </motion.button>
      </Link>
    </div>
  );
}
