import { Moon, Bell, Upload, Download, Trash2, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function SettingsScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-2xl mx-auto px-6 pt-12 pb-32 w-full"
    >
      {/* Editorial Header */}
      <header className="mb-12">
        <p className="font-label text-[10px] uppercase tracking-[0.1em] text-tertiary mb-2">Workspace</p>
        <h2 className="text-5xl font-extrabold tracking-[-0.02em] text-on-surface">Settings</h2>
        <p className="text-on-surface-variant mt-4 font-body tracking-tight max-w-sm">
          Manage your local data and preferences. Everything stays on this device.
        </p>
      </header>

      {/* Settings Groups */}
      <div className="space-y-10">
        {/* Interface Section */}
        <section>
          <h3 className="font-label text-[11px] uppercase tracking-[0.15em] text-on-surface-variant/60 mb-6">
            Interface
          </h3>
          <div className="bg-surface space-y-px overflow-hidden rounded-2xl">
            <div className="group flex items-center justify-between p-6 bg-surface-container hover:bg-surface-bright transition-colors duration-300 cursor-pointer">
              <div className="flex items-center gap-4">
                <Moon className="text-secondary" size={20} />
                <div>
                  <p className="text-sm font-semibold tracking-tight">Dark Mode</p>
                  <p className="text-xs text-on-surface-variant">Always active in Sovereign</p>
                </div>
              </div>
              <div className="w-10 h-5 bg-tertiary/20 rounded-full relative flex items-center px-1">
                <div className="w-3.5 h-3.5 bg-tertiary rounded-full translate-x-4"></div>
              </div>
            </div>
            <div className="group flex items-center justify-between p-6 bg-surface-container hover:bg-surface-bright transition-colors duration-300 cursor-pointer">
              <div className="flex items-center gap-4">
                <Bell className="text-secondary" size={20} />
                <div>
                  <p className="text-sm font-semibold tracking-tight">Local Notifications</p>
                  <p className="text-xs text-on-surface-variant">Reminders and system alerts</p>
                </div>
              </div>
              <div className="w-10 h-5 bg-surface-container-highest rounded-full relative flex items-center px-1">
                <div className="w-3.5 h-3.5 bg-on-surface-variant rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Management Section */}
        <section>
          <h3 className="font-label text-[11px] uppercase tracking-[0.15em] text-on-surface-variant/60 mb-6">
            Data & Storage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Import Card */}
            <div className="p-8 bg-surface-container rounded-2xl hover:bg-surface-bright transition-all duration-300 cursor-pointer group">
              <Upload className="text-tertiary mb-6 scale-110 block" size={24} />
              <h4 className="text-base font-bold tracking-tight mb-2">Import Local File</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Restore your workspace from a previously exported .json file.
              </p>
            </div>
            {/* Export Card */}
            <div className="p-8 bg-surface-container rounded-2xl hover:bg-surface-bright transition-all duration-300 cursor-pointer group">
              <Download className="text-secondary mb-6 scale-110 block" size={24} />
              <h4 className="text-base font-bold tracking-tight mb-2">Export Local File</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Create a portable backup of your habits and statistics.
              </p>
            </div>
          </div>
          <div className="mt-4 p-6 bg-surface-container-low rounded-2xl border border-red-500/5 hover:border-red-500/20 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                  <Trash2 className="text-red-500" size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-tight text-on-surface">Clear Local Data</p>
                  <p className="text-xs text-on-surface-variant">Irreversibly wipe all entries from this device.</p>
                </div>
              </div>
              <button className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-red-500 hover:bg-red-500/10 rounded-full transition-colors">
                Wipe
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section>
          <h3 className="font-label text-[11px] uppercase tracking-[0.15em] text-on-surface-variant/60 mb-6">About</h3>
          <div className="bg-surface-container rounded-2xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-2xl font-extrabold tracking-tighter mb-4">Sovereign v1.0.4</p>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6 max-w-sm">
                Sovereign is built on the principle of digital privacy. No cloud sync, no tracking, no accounts. Your
                data is yours to keep, export, or destroy.
              </p>
              <div className="flex gap-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-tertiary cursor-pointer hover:underline">
                  Privacy Policy
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-tertiary cursor-pointer hover:underline">
                  Open Source
                </span>
              </div>
            </div>
            {/* Decorative Background Element */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-tertiary/5 blur-3xl rounded-full"></div>
          </div>
        </section>

        {/* Footer Meta */}
        <footer className="text-center py-12 opacity-30">
          <p className="font-label text-[10px] uppercase tracking-[0.2em]">Designed for autonomy</p>
        </footer>
      </div>
    </motion.div>
  );
}
