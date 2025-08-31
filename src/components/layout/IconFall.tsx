
'use client';

import { Code, Laptop, Keyboard, Mouse, Database, Server, GitBranch, Terminal, Bot, Cpu, Cog } from 'lucide-react';
import { useEffect, useState } from 'react';

const iconList = [
  { icon: <Code size="1.5em" /> },
  { icon: <Laptop size="2em" /> },
  { icon: <Keyboard size="2.5em" /> },
  { icon: <Mouse size="1.2em" /> },
  { icon: <Database size="2.2em" /> },
  { icon: <Server size="1.8em" /> },
  { icon: <GitBranch size="2em" /> },
  { icon: <Terminal size="1.7em" /> },
  { icon: <Bot size="2.1em" /> },
  { icon: <Cpu size="1.9em" /> },
  { icon: <Cog size="2em" /> },
];

interface FallingIcon {
    id: number;
    style: React.CSSProperties;
    icon: React.ReactNode;
}

const IconFall = () => {
  const [icons, setIcons] = useState<FallingIcon[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
        const generatedIcons = Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        style: {
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 10 + 15}s`,
            animationDelay: `${Math.random() * 15}s`,
        },
        icon: iconList[i % iconList.length].icon,
        }));
        setIcons(generatedIcons);
    }
  }, [isMounted]);
  
  if (!isMounted) {
      return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      {icons.map((item) => (
          <div key={item.id} className="falling-icon" style={item.style}>
            {item.icon}
          </div>
        ))}
    </div>
  );
};

export default IconFall;
