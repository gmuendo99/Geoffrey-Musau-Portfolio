import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';

const HeroSection = ({ scrollToSection }) => {
  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-800"></div>
        <div className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cg%20fill='none'%20fill-rule='evenodd'%3E%3Cg%20fill='%234F46E5'%20fill-opacity='0.05'%3E%3Ccircle%20cx='30'%20cy='30'%20r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]`}></div>
        
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
         <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 p-2 shadow-2xl">
  <div className="w-full h-full rounded-full overflow-hidden">
  <img 
    src="/assets/IMG_20211216_130343_102.jpg" 
    alt="Geoffrey Musau - Profile picture"
    className="w-full h-full object-cover"
  />
</div>
</div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Geoffrey Musau
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full-Stack Developer crafting digital experiences with modern technologies
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button onClick={() => scrollToSection('projects')}>
              View My Work
            </Button>
            <Button variant="outline" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </Button>
          </motion.div>
          
          <motion.div 
            className="animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <ChevronDown size={32} className="mx-auto text-blue-400" />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
