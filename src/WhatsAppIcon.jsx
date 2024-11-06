// WhatsAppIcon.jsx
import { motion } from 'framer-motion';

const WhatsAppIcon = () => {
  return (
    <motion.div
      className='fixed bottom-5 left-5 z-50'
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 1.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
      }}
    >
      <a
        href='https://wa.me/447577655475?text='
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src='Whatsapp.svg' className='w-12 h-12' alt='WhatsApp Icon' />
      </a>
    </motion.div>
  );
};

export default WhatsAppIcon;
