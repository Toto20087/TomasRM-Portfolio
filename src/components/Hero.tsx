import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, RotateCcw } from 'lucide-react';

interface Position {
  x: number;
  y: number;
}

interface DraggableElement {
  id: string;
  type: 'title' | 'subtitle' | 'button';
  defaultPosition: Position;
  position: Position;
}

const STORAGE_KEY = 'hero-element-positions';

export const Hero = () => {
  const [title, setTitle] = useState('Tomas Rodriguez Moyano');
  const [subtitle, setSubtitle] = useState('Crafting digital experiences through code, design, and motion');
  const [buttonText, setButtonText] = useState('View Projects');
  const [editingElement, setEditingElement] = useState<'title' | 'subtitle' | 'button' | null>(null);


  const defaultElements: DraggableElement[] = [
    { id: 'title', type: 'title', defaultPosition: { x: 0, y: 0 }, position: { x: 0, y: 0 } },
    { id: 'subtitle', type: 'subtitle', defaultPosition: { x: 0, y: 0 }, position: { x: 0, y: 0 } },
    { id: 'button', type: 'button', defaultPosition: { x: 0, y: 0 }, position: { x: 0, y: 0 } }
  ];

  const [elements, setElements] = useState<DraggableElement[]>(() => {
    const savedPositions = localStorage.getItem(STORAGE_KEY);
    if (savedPositions) {
      const parsed = JSON.parse(savedPositions);
      return defaultElements.map(el => ({
        ...el,
        position: parsed[el.id] || el.defaultPosition
      }));
    }
    return defaultElements;
  });

  useEffect(() => {
    const positions = elements.reduce((acc, el) => ({
      ...acc,
      [el.id]: el.position
    }), {});
    localStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
  }, [elements]);

  const handleDoubleClick = (element: 'title' | 'subtitle' | 'button') => {
    setEditingElement(element);
  };

  const handleBlur = () => {
    setEditingElement(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setEditingElement(null);
    }
  };

  const handleDragEnd = (elementId: string, info: { offset: { x: number; y: number } }) => {
    const newElements = elements.map(el => 
      el.id === elementId 
        ? { 
            ...el, 
            position: { 
              x: el.position.x + info.offset.x, 
              y: el.position.y + info.offset.y 
            } 
          }
        : el
    );
    setElements(newElements);
  };

  const resetPositions = () => {
    setElements(defaultElements);
    localStorage.removeItem(STORAGE_KEY);
  };

  const renderDraggableElement = (element: DraggableElement) => {
    const content = () => {
      switch (element.type) {
        case 'title':
          return editingElement === 'title' ? (
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              autoFocus
              className="text-5xl md:text-7xl font-bold bg-transparent text-center w-full outline-none border-b-2 border-blue-500"
            />
          ) : (
            <h1 
              onDoubleClick={() => handleDoubleClick('title')}
              className="text-5xl md:text-7xl font-bold cursor-move group-hover:opacity-80 transition-opacity"
            >
              {title}
            </h1>
          );
        case 'subtitle':
          return editingElement === 'subtitle' ? (
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              autoFocus
              className="text-xl md:text-2xl text-gray-300 bg-transparent text-center w-full outline-none border-b-2 border-blue-500"
            />
          ) : (
            <p 
              onDoubleClick={() => handleDoubleClick('subtitle')}
              className="text-xl md:text-2xl text-gray-300 cursor-move group-hover:opacity-80 transition-opacity"
            >
              {subtitle}
            </p>
          );
        case 'button':
          return editingElement === 'button' ? (
            <input
              type="text"
              value={buttonText}
              onChange={(e) => setButtonText(e.target.value)}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              autoFocus
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium text-center outline-none border-2 border-blue-500"
            />
          ) : (
            <button 
              onDoubleClick={() => handleDoubleClick('button')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 cursor-move"
            >
              {buttonText}
            </button>
          );
      }
    };

    return (
      <motion.div
        key={element.id}
        drag
        dragMomentum={false}
        dragElastic={0.1}
        dragConstraints={{
          top: -300,
          left: -500,
          right: 500,
          bottom: 300
        }}
        onDragEnd={(_, info) => handleDragEnd(element.id, info)}
        initial={false}
        animate={{
          x: element.position.x,
          y: element.position.y
        }}
        whileDrag={{
          scale: 1.02,
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
        }}
        className="relative group touch-none"
      >
        {content()}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-100 absolute top-full left-1/2 -translate-x-1/2 text-sm text-gray-400 mt-2 whitespace-nowrap">
          Drag to move • Double click to edit
        </div>
      </motion.div>
    );
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent animate-gradient-xy"></div>
      </div>
      
      {/* Reset Button */}
      <button
        onClick={resetPositions}
        className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors duration-300 backdrop-blur-sm z-20 group"
      >
        <RotateCcw className="w-5 h-5" />
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm">
          Reset positions
        </span>
      </button>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="flex flex-col items-center justify-center min-h-[500px] relative gap-8">
          {elements.map(renderDraggableElement)}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown className="w-8 h-8 text-white/60" />
      </motion.div>
    </section>
  );
};