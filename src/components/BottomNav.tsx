import { Calendar, BarChart2, List, Settings } from 'lucide-react';
import { motion } from 'motion/react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  const tabs = [
    { id: 'today', label: 'Today', icon: Calendar },
    { id: 'stats', label: 'Stats', icon: BarChart2 },
    { id: 'habits', label: 'Habits', icon: List },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 bg-zinc-950/80 backdrop-blur-xl z-50 pb-safe border-t border-outline-variant/10">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center justify-center transition-all duration-200 active:scale-95 ${
              isActive ? 'text-tertiary scale-110' : 'text-zinc-600 hover:text-zinc-400'
            }`}
          >
            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} fill={isActive ? 'currentColor' : 'none'} fillOpacity={isActive ? 0.2 : 0} />
            <span className={`font-label tracking-[2%] font-medium uppercase text-[10px] mt-1 ${isActive ? 'font-bold' : ''}`}>
              {tab.label}
            </span>
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute -bottom-1 w-1 h-1 bg-tertiary rounded-full"
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}
