import { UserCheck, Dumbbell, Wallet, BookOpen, Plus } from 'lucide-react';
import { motion } from 'motion/react';

interface HabitsScreenProps {
  onSelectHabit: (habit: any) => void;
}

export default function HabitsScreen({ onSelectHabit }: HabitsScreenProps) {
  const habits = [
    {
      title: 'Mindful Reflection',
      category: 'Morning',
      streak: 14,
      icon: UserCheck,
      type: 'bars',
      data: [6, 8, 10, 7, 12],
    },
    {
      title: 'Physical Integrity',
      category: 'Daily',
      streak: 8,
      icon: Dumbbell,
      type: 'progress',
      progress: 75,
    },
    {
      title: 'Financial Audit',
      category: 'Daily',
      streak: 2,
      icon: Wallet,
      type: 'checks',
      checks: [true, true, false, false, false],
    },
    {
      title: 'Stochastic Reading',
      category: '20 Pages',
      streak: 31,
      icon: BookOpen,
      type: 'reading',
      chapter: 'Chapter 4',
      pages: '12/20',
      progress: 60,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-7xl mx-auto px-8 pt-12 pb-32 flex flex-col flex-1 w-full"
    >
      <div className="mb-12">
        <h2 className="font-headline text-[3.5rem] font-extrabold tracking-[-1%] leading-tight text-on-surface">
          Habits
        </h2>
        <p className="font-body text-on-surface-variant mt-2 text-lg tracking-[-1%]">
          Your quiet journey toward intentionality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {habits.map((habit, i) => {
          const Icon = habit.icon;
          return (
            <div
              key={i}
              onClick={() => onSelectHabit(habit)}
              className="group bg-surface-container p-8 rounded-[24px] hover:bg-surface-bright transition-all duration-300 flex flex-col justify-between min-h-[220px] cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="font-label text-secondary uppercase tracking-[2%] text-[0.6875rem] font-medium">
                    {habit.category}
                  </span>
                  <h3 className="font-headline text-2xl font-bold tracking-[-1%]">{habit.title}</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center">
                  <Icon className="text-tertiary" size={24} />
                </div>
              </div>

              <div className="mt-8 flex items-end justify-between">
                <div className="flex-1 mr-8">
                  {habit.type === 'bars' && (
                    <div className="flex gap-1.5 items-end">
                      {habit.data?.map((h, idx) => (
                        <div
                          key={idx}
                          className={`w-1.5 rounded-full ${idx === 4 ? 'bg-tertiary' : 'bg-secondary'}`}
                          style={{ height: `${h * 4}px` }}
                        ></div>
                      ))}
                    </div>
                  )}
                  {habit.type === 'progress' && (
                    <>
                      <div className="h-1 w-full bg-surface-variant rounded-full overflow-hidden">
                        <div className="h-full bg-secondary rounded-full" style={{ width: `${habit.progress}%` }}></div>
                      </div>
                      <div className="mt-2 font-label text-on-surface-variant tracking-[2%] text-[0.6875rem]">
                        PROGRESS {habit.progress}%
                      </div>
                    </>
                  )}
                  {habit.type === 'checks' && (
                    <div className="flex gap-2">
                      {habit.checks?.map((check, idx) => (
                        <div
                          key={idx}
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            check ? 'bg-secondary' : 'bg-surface-container-high'
                          }`}
                        >
                          {check && <Icon className="text-on-secondary" size={14} fill="currentColor" />}
                        </div>
                      ))}
                    </div>
                  )}
                  {habit.type === 'reading' && (
                    <>
                      <div className="flex justify-between font-label text-on-surface-variant tracking-[2%] text-[0.6875rem] mb-2 uppercase">
                        <span>{habit.chapter}</span>
                        <span>{habit.pages}</span>
                      </div>
                      <div className="h-1 w-full bg-surface-variant rounded-full overflow-hidden">
                        <div className="h-full bg-tertiary rounded-full" style={{ width: `${habit.progress}%` }}></div>
                      </div>
                    </>
                  )}
                </div>
                <div className="text-right shrink-0">
                  <div className="font-headline text-3xl font-extrabold tracking-[-1%] text-on-surface">
                    {habit.streak < 10 ? `0${habit.streak}` : habit.streak}
                  </div>
                  <div className="font-label text-on-surface-variant uppercase tracking-[2%] text-[0.6875rem]">
                    Day Streak
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Zen Placeholder / Privacy Note */}
      <div className="mt-16 flex flex-col items-center justify-center opacity-40">
        <span className="material-symbols-outlined text-4xl mb-4">security</span>
        <p className="font-body text-sm tracking-[-1%] text-center max-w-xs">
          All data is encrypted locally. This is your private sanctuary.
        </p>
      </div>

      {/* FAB: Add Habit */}
      <button className="fixed bottom-32 right-8 w-16 h-16 bg-primary rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-all duration-300 z-50">
        <Plus className="text-on-primary" size={32} />
      </button>
    </motion.div>
  );
}


