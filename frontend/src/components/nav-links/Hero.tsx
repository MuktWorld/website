import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { MessagesSquare } from 'lucide-react';
import FloatingCamera from '../3D/FloatingCamera';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={null}>
            <FloatingCamera />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <mesh rotation={[0, 0, 0]}>
              <torusGeometry args={[3, 0.2, 16, 100]} />
              <meshStandardMaterial color="#9333ea" wireframe />
            </mesh>
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-black/70 z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.h1 
          className="font-primary text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Crafting Digital
          <span className="bg-gradient-to-r from-secondary to-pink-500 text-transparent bg-clip-text"> Experiences</span>
        </motion.h1>
        <motion.p 
          className="font-secondary text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We transform ideas into compelling visual stories that captivate and inspire.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-primary px-8 py-4 bg-secondary  text-white rounded-full flex items-center justify-center gap-2 transition-colors"
          >
            <MessagesSquare className="w-5 h-5" />
           <a href="#contact">Hire us</a> 
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-primary px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-sm"
          >
           <a href="#portfolio">View portfolio</a> 
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}