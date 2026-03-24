import { Bolt, CheckCircle2, Droplets, BookOpen, UserCheck, Dumbbell, Wallet, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function TodayScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-4xl mx-auto px-6 pt-12 pb-32"
    >
      {/* Hero Editorial Header */}
      <section className="mb-16">
        <div className="flex flex-col gap-2">
          <span className="font-label text-[0.6875rem] font-medium tracking-[2%] uppercase text-on-surface-variant">
            Wednesday, Oct 24
          </span>
          <h1 className="font-headline text-[3.5rem] leading-[1.1] font-extrabold tracking-[-1%] text-on-surface">
            Today
          </h1>
          <div className="mt-4 flex items-center gap-4">
            <div className="h-1 w-24 bg-surface-container rounded-full overflow-hidden">
              <div className="h-full w-[65%] bg-secondary rounded-full"></div>
            </div>
            <span className="text-xs font-label tracking-[2%] uppercase text-secondary font-bold">
              65% Absolute Focus
            </span>
          </div>
        </div>
      </section>

      {/* Habits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Focused Habit Card (Large) */}
        <div className="md:col-span-8 group">
          <div className="bg-surface-container p-8 rounded-2xl hover:bg-surface-bright transition-all duration-300 cursor-pointer">
            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Bolt className="text-tertiary" size={14} />
                  <span className="text-xs font-label tracking-[2%] uppercase text-tertiary font-bold">
                    Priority Focus
                  </span>
                </div>
                <h2 className="text-2xl font-bold tracking-[-1%]">Deep Work Session</h2>
                <p className="text-on-surface-variant text-sm mt-1">90 minutes of undistracted creation</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-3xl font-extrabold tracking-[-1%] text-on-surface">12</span>
                <span className="text-[0.6875rem] font-label tracking-[2%] uppercase text-on-surface-variant">
                  Day Streak
                </span>
              </div>
            </div>

            {/* 12-Day Streak Visualization */}
            <div className="flex justify-between gap-2 mb-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex-1 h-12 bg-secondary/20 rounded-lg flex items-center justify-center border border-secondary/10">
                  <CheckCircle2 className="text-secondary" size={16} fill="currentColor" fillOpacity={0.2} />
                </div>
              ))}
              <div className="flex-1 h-12 bg-surface-container-high rounded-lg flex items-center justify-center border-2 border-tertiary shadow-[0_0_15px_rgba(178,153,255,0.15)]">
                <span className="text-xs font-bold text-tertiary">12</span>
              </div>
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex-1 h-12 bg-surface-container-low rounded-lg opacity-30"></div>
              ))}
            </div>

            <button className="w-full py-4 bg-primary text-on-primary rounded-full font-bold text-sm tracking-[-1%] transition-transform active:scale-95 flex items-center justify-center gap-2">
              Complete Today
            </button>
          </div>
        </div>

        {/* Secondary Habit Stats */}
        <div className="md:col-span-4 flex flex-col gap-8">
          <div className="bg-surface-container-low p-6 rounded-2xl">
            <Droplets className="text-on-surface-variant mb-4" size={20} />
            <h3 className="text-sm font-bold tracking-[-1%] mb-1">Hydration Intent</h3>
            <p className="text-[0.6875rem] font-label tracking-[2%] uppercase text-on-surface-variant mb-4">
              2.4L / 3.0L
            </p>
            <div className="w-full h-1 bg-surface-container-highest rounded-full">
              <div className="w-[80%] h-full bg-secondary rounded-full"></div>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-2xl">
            <BookOpen className="text-on-surface-variant mb-4" size={20} />
            <h3 className="text-sm font-bold tracking-[-1%] mb-1">Stochastic Reading</h3>
            <p className="text-[0.6875rem] font-label tracking-[2%] uppercase text-on-surface-variant mb-4">
              20 Pages Daily
            </p>
            <div className="w-full h-1 bg-surface-container-highest rounded-full">
              <div className="w-[45%] h-full bg-tertiary rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Routine Flow List */}
        <div className="md:col-span-12 mt-4">
          <h3 className="font-label text-[0.6875rem] font-medium tracking-[2%] uppercase text-on-surface-variant mb-6 ml-1">
            Routine Flow
          </h3>
          <div className="flex flex-col gap-3">
            {[
              { title: 'Mindful Reflection', desc: '10 Minutes • Morning', streak: '12-Day Streak', icon: UserCheck },
              { title: 'Physical Integrity', desc: 'Strength Training', streak: 'Rest Day', icon: Dumbbell, isRest: true },
              { title: 'Financial Audit', desc: 'Log daily expenses', streak: '32-Day Streak', icon: Wallet },
            ].map((habit, i) => {
              const Icon = habit.icon;
              return (
                <div key={i} className="group flex items-center justify-between p-5 bg-surface-container rounded-2xl hover:bg-surface-bright transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                      <Icon className="text-on-surface-variant" size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-[-1%]">{habit.title}</h4>
                      <p className="text-xs text-on-surface-variant">{habit.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className={`text-xs font-bold tracking-[-1%] ${habit.isRest ? 'text-on-surface-variant' : 'text-on-surface'}`}>
                        {habit.streak}
                      </p>
                      <div className="flex gap-0.5 mt-1 justify-end">
                        {[1, 2, 3, 4].map((dot) => (
                          <div
                            key={dot}
                            className={`w-1.5 h-1 rounded-full ${
                              habit.isRest && dot > 2 ? 'bg-surface-variant' : dot === 4 ? 'bg-tertiary' : 'bg-secondary'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <ChevronRight className="text-outline-variant group-hover:text-on-surface transition-colors" size={20} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
