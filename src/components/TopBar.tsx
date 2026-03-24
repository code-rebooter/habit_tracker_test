import { Calendar, MoreVertical, User, ArrowLeft } from 'lucide-react';

interface TopBarProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
}

export default function TopBar({ title, showBack, onBack }: TopBarProps) {
  return (
    <header className="w-full top-0 sticky z-50 bg-zinc-950 flex items-center justify-between px-6 py-4 border-b border-outline-variant/5">
      <div className="flex items-center gap-3">
        {showBack ? (
          <button onClick={onBack} className="text-zinc-300 hover:text-white transition-colors cursor-pointer">
            <ArrowLeft size={20} />
          </button>
        ) : (
          <Calendar className="text-zinc-300" size={20} />
        )}
        <h1 className="font-headline tracking-[-1%] font-extrabold uppercase text-xs text-zinc-300">
          {title}
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="h-8 w-8 rounded-full bg-surface-container flex items-center justify-center cursor-pointer hover:bg-surface-bright transition-colors">
          <User className="text-zinc-500" size={16} />
        </div>
        <button className="text-zinc-300 hover:text-white transition-colors cursor-pointer">
          <MoreVertical size={20} />
        </button>
      </div>
    </header>
  );
}

