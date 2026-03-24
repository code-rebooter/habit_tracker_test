import { TrendingUp, Flame, Verified, UserCheck, Dumbbell, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export default function StatsScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-5xl mx-auto px-6 pt-8 pb-32 w-full"
    >
      {/* Hero Section: Overall Completion */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-label text-[0.6875rem] font-medium tracking-[2%] uppercase text-on-surface-variant mb-2 block">
              Performance Overview
            </span>
            <h2 className="font-headline text-[3.5rem] font-800 tracking-[-1%] leading-none text-on-surface">
              84<span className="text-tertiary">%</span>
            </h2>
            <p className="font-body text-sm font-400 tracking-[-1%] text-secondary mt-2">
              Completion rate across all active habits this month.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="px-4 py-2 bg-surface-container rounded-full flex items-center gap-2">
              <TrendingUp className="text-secondary" size={14} />
              <span className="font-label text-[10px] font-500 tracking-[2%] uppercase">+12% vs last month</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Stats */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Streak Heatmap: Large Block */}
        <div className="md:col-span-8 bg-surface-container rounded-2xl p-8 transition-colors duration-300 hover:bg-surface-bright">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-headline text-xl font-700 tracking-[-1%] text-on-surface">Consistency Map</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-surface-variant"></div>
                <span className="text-[10px] uppercase font-medium text-on-surface-variant">None</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <span className="text-[10px] uppercase font-medium text-on-surface-variant">Full</span>
              </div>
            </div>
          </div>
          {/* Heatmap Visualization */}
          <div className="grid grid-cols-7 sm:grid-cols-14 md:grid-cols-21 gap-2">
            {Array.from({ length: 84 }).map((_, i) => {
              const isActive = Math.random() > 0.3;
              const isFull = Math.random() > 0.5;
              return (
                <div
                  key={i}
                  className={`aspect-square rounded-sm transition-all duration-500 hover:scale-125 ${
                    isActive ? (isFull ? 'bg-secondary' : 'bg-secondary/40') : 'bg-surface-variant'
                  }`}
                ></div>
              );
            })}
          </div>
          <div className="mt-6 flex justify-between text-on-surface-variant text-[10px] uppercase font-500 tracking-[2%]">
            <span>90 Days Ago</span>
            <span>Today</span>
          </div>
        </div>

        {/* Focus Stats: Side Block */}
        <div className="md:col-span-4 flex flex-col gap-6">
          {/* Streak Card */}
          <div className="bg-surface-container rounded-2xl p-6 flex-1 hover:bg-surface-bright transition-colors">
            <Flame className="text-tertiary mb-4" size={24} />
            <div className="font-headline text-3xl font-800 tracking-[-1%]">14 Days</div>
            <div className="text-[10px] uppercase font-500 tracking-[2%] text-on-surface-variant mt-1">
              Current Streak
            </div>
          </div>
          {/* Perfect Days Card */}
          <div className="bg-surface-container rounded-2xl p-6 flex-1 hover:bg-surface-bright transition-colors">
            <Verified className="text-secondary mb-4" size={24} />
            <div className="font-headline text-3xl font-800 tracking-[-1%]">22</div>
            <div className="text-[10px] uppercase font-500 tracking-[2%] text-on-surface-variant mt-1">
              Perfect Days This Year
            </div>
          </div>
        </div>

        {/* Weekly History: Full Width */}
        <div className="md:col-span-12 bg-surface-container rounded-2xl p-8 hover:bg-surface-bright transition-colors">
          <div className="flex justify-between items-center mb-10">
            <h3 className="font-headline text-xl font-700 tracking-[-1%] text-on-surface">Weekly Trajectory</h3>
            <div className="text-on-surface-variant font-body text-sm">Mon 12 — Sun 18</div>
          </div>
          <div className="flex items-end justify-between h-48 gap-4 px-2">
            {[
              { day: 'Mon', height: '60%', active: false },
              { day: 'Tue', height: '85%', active: false },
              { day: 'Wed', height: '100%', active: true },
              { day: 'Thu', height: '40%', active: false },
              { day: 'Fri', height: '75%', active: false },
              { day: 'Sat', height: '90%', active: false },
              { day: 'Sun', height: '55%', active: false },
            ].map((item, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-4">
                <div className="w-full bg-surface-variant rounded-full relative overflow-hidden h-32">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: item.height }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className={`absolute bottom-0 w-full rounded-full ${item.active ? 'bg-tertiary' : 'bg-secondary'}`}
                  ></motion.div>
                </div>
                <span className={`text-[10px] font-600 uppercase ${item.active ? 'text-tertiary' : 'text-on-surface-variant'}`}>
                  {item.day}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Breakdown Table */}
        <div className="md:col-span-12 bg-surface-container rounded-2xl overflow-hidden mt-6">
          <div className="p-8 pb-4">
            <h3 className="font-headline text-xl font-700 tracking-[-1%] text-on-surface">Habit Breakdown</h3>
          </div>
          <div className="flex flex-col">
            {[
              { title: 'Daily Meditation', category: 'Mindfulness', score: '92%', icon: UserCheck, color: 'bg-secondary' },
              { title: 'Strength Training', category: 'Physical', score: '68%', icon: Dumbbell, color: 'bg-tertiary' },
              { title: 'Deep Reading', category: 'Cognitive', score: '100%', icon: BookOpen, color: 'bg-secondary' },
            ].map((habit, i) => {
              const Icon = habit.icon;
              return (
                <div
                  key={i}
                  className="flex items-center justify-between px-8 py-6 border-b border-outline-variant/10 hover:bg-surface-container-high transition-colors last:border-0"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center">
                      <Icon className={habit.color.replace('bg-', 'text-')} size={20} />
                    </div>
                    <div>
                      <div className="font-body text-sm font-600 text-on-surface">{habit.title}</div>
                      <div className="text-[10px] uppercase text-on-surface-variant tracking-wider">
                        {habit.category}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="hidden sm:block text-right">
                      <div className="text-sm font-body font-600">{habit.score}</div>
                      <div className="text-[10px] uppercase text-on-surface-variant">Score</div>
                    </div>
                    <div className="w-24 bg-surface-variant h-1 rounded-full overflow-hidden">
                      <div className={`h-full ${habit.color}`} style={{ width: habit.score }}></div>
                    </div>
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
