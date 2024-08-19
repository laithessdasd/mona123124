"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [clickCount, setClickCount] = useState(0);

  const messages = [
    "Good job, Mona!",
    "Loay was no good for you!",
    "You're better off without him!",
    "Almost there, Mona!",
    "You're amazing, Mona!",
    "Loay was holding you back!",
    "You deserve better, Mona!",
  ];

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="min-h-screen relative bg-[#f9fafb] flex flex-col items-center justify-center text-gray-800 p-4 overflow-hidden">
      {/* خلفية إيموجيز متحركة */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="absolute w-full h-full flex flex-wrap items-center justify-center opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {Array(50)
            .fill("🎉")
            .map((emoji, index) => (
              <motion.span
                key={index}
                className="text-4xl"
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
                🎉 💩
              </motion.span>
            ))}
        </motion.div>
      </div>

      <motion.h1
        className="text-5xl font-bold mb-8 font-[cursive]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Mona, You Dodged a Bullet with Loay!
      </motion.h1>

      <motion.p
        className="text-lg mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        "Loay was a mistake you learned from. Onward to better things!"
      </motion.p>

      <motion.p
        className="text-lg mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        "You're stronger than ever, Mona!"
      </motion.p>

      <div className="flex justify-around w-full max-w-lg mb-8">
        {/* صورة Mona */}
        <motion.div
          className="relative w-40 h-40"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/friend.png"
            alt="Mona"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        {/* صورة Loay مع رموز 💩 */}
        <motion.div
          className="relative w-40 h-40"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/ex.jpg"
            alt="Loay"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          {/* Poop emojis */}
          {Array(clickCount)
            .fill(0)
            .map((_, index) => (
              <motion.span
                key={index}
                className="absolute text-4xl"
                style={{
                  top: `${Math.random() * 80}%`,
                  left: `${Math.random() * 80}%`,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                💩
              </motion.span>
            ))}
        </motion.div>
      </div>

      {/* الرسالة التحفيزية */}
      <motion.p
        className="text-2xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {messages[clickCount % messages.length]}
      </motion.p>

      {/* الزر لتغطية Loay */}
      <motion.button
        onClick={handleButtonClick}
        className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full mb-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Cover Loay with 💩
      </motion.button>

      {/* الزر للانتقال إلى صفحة أخرى باستخدام Link */}
      <Link href="/reason1" passHref>
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
