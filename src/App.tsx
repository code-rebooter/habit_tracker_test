import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import TopBar from './components/TopBar';
import BottomNav from './components/BottomNav';
import TodayScreen from './components/TodayScreen';
import StatsScreen from './components/StatsScreen';
import HabitsScreen from './components/HabitsScreen';
import SettingsScreen from './components/SettingsScreen';
import HabitDetail from './components/HabitDetail';

export default function App() {
  const [activeTab, setActiveTab] = useState('today');
  const [selectedHabit, setSelectedHabit] = useState<any>(null);

  const renderScreen = () => {
    if (selectedHabit) {
      return <HabitDetail habit={selectedHabit} onBack={() => setSelectedHabit(null)} />;
    }

    switch (activeTab) {
      case 'today':
        return <TodayScreen />;
      case 'stats':
        return <StatsScreen />;
      case 'habits':
        return <HabitsScreen onSelectHabit={setSelectedHabit} />;
      case 'settings':
        return <SettingsScreen />;
      default:
        return <TodayScreen />;
    }
  };

  const getTitle = () => {
    if (selectedHabit) return 'Sovereign';
    switch (activeTab) {
      case 'today':
        return 'Sovereign';
      case 'stats':
        return 'Performance';
      case 'habits':
        return 'Your Journey';
      case 'settings':
        return 'Workspace';
      default:
        return 'Sovereign';
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col">
      <TopBar 
        title={getTitle()} 
        showBack={!!selectedHabit} 
        onBack={() => setSelectedHabit(null)} 
      />
      
      <main className="flex-grow overflow-x-hidden">
        <AnimatePresence mode="wait">
          {renderScreen()}
        </AnimatePresence>
      </main>

      {!selectedHabit && <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />}
    </div>
  );
}


