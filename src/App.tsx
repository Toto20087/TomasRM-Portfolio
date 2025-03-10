import { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { MousePointer2 } from 'lucide-react';
import { motion, useMotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function App() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const { ref: heroRef, inView: isHeroVisible } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="min-h-screen bg-white relative">
      <motion.div
        className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <div className="relative">
          <MousePointer2 className="w-5 h-5 text-white" />
          {isHeroVisible && (
            <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/10 backdrop-blur-sm text-white text-xs py-1 px-2 rounded">
              YOU ARE HERE
            </div>
          )}
        </div>
      </motion.div>

      <div ref={heroRef}>
        <Hero />
      </div>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;