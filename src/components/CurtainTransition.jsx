import { motion, AnimatePresence } from 'framer-motion';

const CurtainTransition = ({ isTriggered }) => {
    // 10x10 grid = 100 squares
    const totalSquares = 100;
    const squares = Array.from({ length: totalSquares });

    return (
        <AnimatePresence>
            {isTriggered && (
                <div className="curtain-container">
                    {squares.map((_, index) => {
                        // Calculate row and col for interesting staggered patterns
                        const row = Math.floor(index / 10);
                        const col = index % 10;

                        return (
                            <motion.div
                                key={index}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: (row + col) * 0.03 // Diagonal stagger
                                }}
                                className="curtain-square"
                            >
                                <div className="curtain-glow" />
                            </motion.div>
                        );
                    })}
                </div>
            )}
        </AnimatePresence>
    );
};

export default CurtainTransition;
