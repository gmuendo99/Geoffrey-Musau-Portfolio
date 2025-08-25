import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="py-8 px-6 border-t border-slate-700 text-center bg-slate-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-slate-400">
        &copy; 2025 Geoffrey Musau. Built with{' '}
        <span className="text-blue-400 font-semibold">React</span> &{' '}
        <span className="text-cyan-400 font-semibold">Tailwind CSS</span>
      </p>
      <p className="text-slate-500 text-sm mt-2">
        Crafted with passion and attention to detail
      </p>
    </motion.footer>
  );
};

export default Footer;