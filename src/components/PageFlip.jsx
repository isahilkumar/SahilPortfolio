import { motion, AnimatePresence } from 'framer-motion';

const PageFlip = ({ isTriggered, onComplete }) => {
    return (
        <AnimatePresence>
            {isTriggered && (
                <motion.div
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: -90, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    onAnimationComplete={() => onComplete()}
                    className="page-transition"
                >
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-1 bg-primary mb-4 rounded-full" />
                        <span className="text-primary font-bold tracking-[0.5em] uppercase text-xs">Opening Page...</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageFlip;
