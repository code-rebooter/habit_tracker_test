import { ArrowLeft, Calendar, MoreVertical, Sparkles, Clock, BarChart3, ChevronLeft, ChevronRight, PlusCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface HabitDetailProps {
  onBack: () => void;
  habit: {
    title: string;
    category: string;
    streak: number;
  };
}

export default function HabitDetail({ onBack, habit }: HabitDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-5xl mx-auto px-6 pt-12 pb-32 space-y-16 w-full"
    >
      {/* Hero Header */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-tertiary font-label text-[10px] tracking-[2%] uppercase font-medium">
            {habit.category}
          </span>
          <div className="h-px w-8 bg-tertiary/30"></div>
        </div>
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-[-2%] text-on-surface leading-tight">
          {habit.title.split(' ').map((word, i) => (
            <span key={i}>
              {word} {i === 0 && <br />}
            </span>
          ))}
        </h2>
        <p className="text-on-surface-variant max-w-lg text-lg leading-relaxed">
          Cultivating presence and clarity through silent observation. Current focus: Mindfulness of breath.
        </p>
      </header>

      {/* Stats Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Streak Card */}
        <div className="md:col-span-2 bg-surface-container rounded-2xl p-8 flex flex-col justify-between min-h-[240px] hover:bg-surface-bright transition-colors duration-300">
          <div className="flex justify-between items-start">
            <Sparkles className="text-tertiary" size={32} fill="currentColor" fillOpacity={0.2} />
            <span className="font-label text-[10px] tracking-[2%] uppercase text-on-surface-variant">Unstoppable</span>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-7xl font-extrabold tracking-[-2%] text-on-surface">{habit.streak}</span>
              <span className="text-xl text-on-surface-variant font-medium">day streak</span>
            </div>
            <p className="text-on-surface-variant mt-2 text-sm">You are in the top 5% of practitioners this month.</p>
          </div>
        </div>

        {/* Secondary Metrics Stack */}
        <div className="space-y-6">
          <div className="bg-surface-container-low rounded-2xl p-6 flex items-center justify-between hover:bg-surface-container transition-colors duration-300">
            <div>
              <p className="font-label text-[10px] tracking-[2%] uppercase text-on-surface-variant mb-1">Total Hours</p>
              <p className="text-2xl font-bold tracking-[-1%]">142.5</p>
            </div>
            <Clock className="text-secondary" size={24} />
          </div>
          <div className="bg-surface-container-low rounded-2xl p-6 flex items-center justify-between hover:bg-surface-container transition-colors duration-300">
            <div>
              <p className="font-label text-[10px] tracking-[2%] uppercase text-on-surface-variant mb-1">Completion</p>
              <p className="text-2xl font-bold tracking-[-1%]">94%</p>
            </div>
            <BarChart3 className="text-secondary" size={24} />
          </div>
        </div>
      </section>

      {/* Calendar View */}
      <section className="space-y-8">
        <div className="flex items-end justify-between border-b border-outline-variant/10 pb-4">
          <h3 className="text-2xl font-bold tracking-[-1%]">October 2023</h3>
          <div className="flex gap-4">
            <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-y-8 gap-x-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
            <div key={day} className="text-center font-label text-[10px] tracking-[2%] uppercase text-on-surface-variant">
              {day}
            </div>
          ))}
          {/* Calendar Days Mockup */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={`empty-${i}`} className="h-12 opacity-0"></div>
          ))}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((day) => {
            const intensity = Math.random();
            return (
              <div key={day} className="h-12 flex items-center justify-center relative">
                <span className={`z-10 text-sm font-medium ${day === 9 ? 'text-tertiary' : ''}`}>{day}</span>
                <div
                  className={`absolute inset-0 rounded-xl ${
                    day === 9
                      ? 'border-2 border-tertiary/40'
                      : intensity > 0.8
                      ? 'bg-secondary/80'
                      : intensity > 0.5
                      ? 'bg-secondary/40'
                      : intensity > 0.2
                      ? 'bg-secondary/20'
                      : 'bg-outline-variant/10 scale-50'
                  }`}
                ></div>
              </div>
            );
          })}
          <div className="col-span-7 pt-4">
            <div className="flex items-center gap-4 text-xs text-on-surface-variant font-label uppercase tracking-widest">
              <span>Intensity:</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-sm bg-outline-variant/10"></div>
                <div className="w-2 h-2 rounded-sm bg-secondary/20"></div>
                <div className="w-2 h-2 rounded-sm bg-secondary/50"></div>
                <div className="w-2 h-2 rounded-sm bg-secondary"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journal/Notes */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold tracking-[-1%]">Journal Entries</h3>
        <div className="space-y-12">
          {[
            {
              date: 'Oct 14',
              day: 'Saturday',
              title: 'Settling the mental storm',
              content:
                "Today's session felt surprisingly grounded. Focusing on the sensation of air at the nostrils helped anchor the wandering mind. Noticeable difference in anxiety levels post-practice.",
              tags: ['Calm', '20 min'],
            },
            {
              date: 'Oct 13',
              day: 'Friday',
              title: 'Resistance and Acceptance',
              content:
                "Difficult to sit today. Constant planning for the weekend. Chose to acknowledge the planning as 'thought' and return to the breath. A lesson in patience.",
              tags: ['Difficult', '15 min'],
              opacity: 'opacity-80',
            },
          ].map((entry, i) => (
            <div key={i} className={`flex flex-col md:flex-row gap-6 md:gap-16 group ${entry.opacity || ''}`}>
              <div className="md:w-32 shrink-0">
                <p className="text-sm font-bold">{entry.date}</p>
                <p className="text-xs text-on-surface-variant font-label uppercase tracking-widest mt-1">
                  {entry.day}
                </p>
              </div>
              <div className="flex-1 space-y-3">
                <h4 className="text-lg font-semibold text-on-surface group-hover:text-tertiary transition-colors">
                  {entry.title}
                </h4>
                <p className="text-on-surface-variant leading-relaxed">{entry.content}</p>
                <div className="flex gap-2 pt-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-surface-container rounded-full text-[10px] font-label uppercase text-on-surface-variant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full py-12 border border-dashed border-outline-variant/30 rounded-2xl flex flex-col items-center justify-center gap-3 hover:bg-surface-container transition-all group">
          <PlusCircle className="text-on-surface-variant group-hover:text-tertiary transition-colors" size={24} />
          <span className="text-sm text-on-surface-variant font-medium">Add today's reflection</span>
        </button>
      </section>
    </motion.div>
  );
}
