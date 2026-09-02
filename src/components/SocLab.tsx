import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Terminal,
  Lock,
  SearchCheck,
  Info,
} from 'lucide-react';

export const SocLab: React.FC = () => {
  // Terminal View state
  const [terminalMode, setTerminalMode] = useState<boolean>(false);

  // Security Tool state: Password Entropy
  const [testPassword, setTestPassword] = useState<string>('');

  // Security Tool state: Header Auditor
  const [headerUrl, setHeaderUrl] = useState<string>('https://example.com');
  const [auditingHeaders, setAuditingHeaders] = useState<boolean>(false);
  const [headerScore, setHeaderScore] = useState<number | null>(null);

  // Calculate Password Entropy
  const calculateEntropy = (pwd: string) => {
    if (!pwd) return { bits: 0, label: 'None', time: 'Instant' };
    let poolSize = 0;
    if (/[a-z]/.test(pwd)) poolSize += 26;
    if (/[A-Z]/.test(pwd)) poolSize += 26;
    if (/[0-9]/.test(pwd)) poolSize += 10;
    if (/[^a-zA-Z0-9]/.test(pwd)) poolSize += 32;

    const bits = Math.round(pwd.length * Math.log2(poolSize || 1));
    let label = 'Weak';
    let time = 'Seconds';

    if (bits > 80) {
      label = 'Very Strong (Military Grade)';
      time = '100+ Centuries';
    } else if (bits > 60) {
      label = 'Strong';
      time = 'Several Years';
    } else if (bits > 40) {
      label = 'Moderate';
      time = 'A few Days';
    }

    return { bits, label, time };
  };

  const entropyData = calculateEntropy(testPassword);

  // Header Audit Simulator
  const handleHeaderAudit = () => {
    setAuditingHeaders(true);
    setTimeout(() => {
      setHeaderScore(85);
      setAuditingHeaders(false);
    }, 800);
  };

  return (
    <section id="soc-lab" className="py-24 bg-[#0A0A0A] border-t border-white/10 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">
            INTERACTIVE SECURITY LAB
          </div>
          <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tighter uppercase">
            SECURITY UTILITIES
          </h2>
          <p className="text-zinc-400 text-xs sm:text-base leading-relaxed">
            Interactive cybersecurity calculation utilities and auditing tools.
          </p>

          {/* Terminal View Toggle */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setTerminalMode(!terminalMode)}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 text-[11px] sm:text-xs font-mono font-black uppercase tracking-wider transition-all border ${
                terminalMode
                  ? 'bg-emerald-950 text-emerald-300 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                  : 'bg-zinc-950 text-zinc-400 hover:text-white border-white/10'
              }`}
            >
              <Terminal className={`w-3.5 h-3.5 ${terminalMode ? 'text-emerald-400 animate-pulse' : ''}`} />
              <span>Terminal View: {terminalMode ? '[ON]' : '[OFF]'}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tool 1: Password Bit Entropy Calculator */}
          <div className={`border p-6 space-y-6 transition-all ${
            terminalMode
              ? 'bg-[#030803] border-emerald-500/60 text-emerald-300 font-mono shadow-[0_0_20px_rgba(16,185,129,0.15)]'
              : 'bg-zinc-950 border-white/10'
          }`}>
            {terminalMode && (
              <div className="flex items-center justify-between pb-3 border-b border-emerald-500/40 text-[10px] text-emerald-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                  <span className="ml-2 font-bold text-emerald-300">tty3 — pwd_entropy.py</span>
                </div>
                <span className="text-emerald-500/80 font-bold hidden sm:inline">[BIT CALCULATOR]</span>
              </div>
            )}

            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-white font-black uppercase text-sm">
                <Lock className={`w-5 h-5 ${terminalMode ? 'text-emerald-400' : 'text-amber-400'}`} />
                <span className={terminalMode ? 'text-emerald-300 font-mono' : ''}>Password Bit Entropy Calculator</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className={`text-[10px] uppercase tracking-widest font-bold ${terminalMode ? 'text-emerald-400' : 'text-zinc-400'}`}>
                Secret String to Evaluate:
              </label>
              <input
                type="text"
                value={testPassword}
                onChange={(e) => setTestPassword(e.target.value)}
                placeholder="Type a password to test entropy..."
                className={`w-full p-3 text-sm font-mono focus:outline-none ${
                  terminalMode
                    ? 'bg-black border border-emerald-500 text-emerald-300 placeholder-emerald-700 shadow-[inset_0_0_8px_rgba(16,185,129,0.2)]'
                    : 'bg-[#0A0A0A] border border-white/10 text-white focus:border-white/40'
                }`}
              />
            </div>

            {terminalMode && (
              <div className="p-3 bg-black border border-emerald-500/40 text-xs font-mono text-emerald-400 space-y-1">
                <div className="text-[10px] uppercase text-emerald-500 font-bold">
                  CLI ASCII STRENGTH METER:
                </div>
                <div className="tracking-widest font-bold text-emerald-300">
                  [{'█'.repeat(Math.min(16, Math.floor(entropyData.bits / 5)))}{'░'.repeat(Math.max(0, 16 - Math.floor(entropyData.bits / 5)))}] {entropyData.bits} BITS
                </div>
              </div>
            )}

            <div className="grid grid-cols-3 gap-3">
              <div className={`p-3 border text-center ${
                terminalMode ? 'bg-black border-emerald-500/40' : 'bg-zinc-900 border-white/10'
              }`}>
                <span className={`text-[10px] font-mono block font-bold ${terminalMode ? 'text-emerald-500' : 'text-zinc-500'}`}>ENTROPY</span>
                <span className={`text-xl font-black font-mono mt-1 block ${terminalMode ? 'text-emerald-300' : 'text-white'}`}>
                  {entropyData.bits} bits
                </span>
              </div>
              <div className={`p-3 border text-center ${
                terminalMode ? 'bg-black border-emerald-500/40' : 'bg-zinc-900 border-white/10'
              }`}>
                <span className={`text-[10px] font-mono block font-bold ${terminalMode ? 'text-emerald-500' : 'text-zinc-500'}`}>RATING</span>
                <span className={`text-xs font-black uppercase mt-1 block ${terminalMode ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {entropyData.label}
                </span>
              </div>
              <div className={`p-3 border text-center ${
                terminalMode ? 'bg-black border-emerald-500/40' : 'bg-zinc-900 border-white/10'
              }`}>
                <span className={`text-[10px] font-mono block font-bold ${terminalMode ? 'text-emerald-500' : 'text-zinc-500'}`}>CRACK TIME</span>
                <span className="text-xs font-black text-emerald-400 uppercase mt-1 block">
                  {entropyData.time}
                </span>
              </div>
            </div>

            <div className={`text-xs leading-relaxed p-3 border ${
              terminalMode ? 'bg-black/80 border-emerald-500/40 text-emerald-400 font-mono' : 'bg-zinc-900 border-white/10 text-zinc-400'
            }`}>
              <Info className={`w-4 h-4 inline mr-1 ${terminalMode ? 'text-emerald-400' : 'text-amber-400'}`} />
              Entropy measures unpredictability in bits. Passwords with &gt;60 bits entropy withstand GPU dictionary attacks.
            </div>
          </div>

          {/* Tool 2: Security Header Auditor */}
          <div className={`border p-6 space-y-6 transition-all ${
            terminalMode
              ? 'bg-[#030803] border-emerald-500/60 text-emerald-300 font-mono shadow-[0_0_20px_rgba(16,185,129,0.15)]'
              : 'bg-zinc-950 border-white/10'
          }`}>
            {terminalMode && (
              <div className="flex items-center justify-between pb-3 border-b border-emerald-500/40 text-[10px] text-emerald-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                  <span className="ml-2 font-bold text-emerald-300">tty4 — header_audit.sh</span>
                </div>
                <span className="text-emerald-500/80 font-bold hidden sm:inline">[HTTP AUDITOR]</span>
              </div>
            )}

            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-white font-black uppercase text-sm">
                <SearchCheck className={`w-5 h-5 ${terminalMode ? 'text-emerald-400' : 'text-zinc-300'}`} />
                <span className={terminalMode ? 'text-emerald-300 font-mono' : ''}>Security Header Auditor</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className={`text-[10px] uppercase tracking-widest font-bold ${terminalMode ? 'text-emerald-400' : 'text-zinc-400'}`}>
                Domain URL to Audit:
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  value={headerUrl}
                  onChange={(e) => setHeaderUrl(e.target.value)}
                  className={`flex-1 p-3 text-xs focus:outline-none font-mono ${
                    terminalMode
                      ? 'bg-black border border-emerald-500 text-emerald-300 placeholder-emerald-700'
                      : 'bg-[#0A0A0A] border border-white/10 text-white'
                  }`}
                />
                <button
                  onClick={handleHeaderAudit}
                  disabled={auditingHeaders}
                  className={`px-5 py-3 font-black text-xs uppercase tracking-wider ${
                    terminalMode
                      ? 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                      : 'bg-white text-black'
                  }`}
                >
                  {auditingHeaders ? 'Auditing...' : 'Audit'}
                </button>
              </div>
            </div>

            <div className="space-y-2 font-mono">
              {[
                { name: 'Strict-Transport-Security (HSTS)', status: 'PASS', note: 'max-age=31536000' },
                { name: 'Content-Security-Policy (CSP)', status: 'PASS', note: 'script-src self' },
                { name: 'X-Frame-Options', status: 'PASS', note: 'DENY' },
                { name: 'X-Content-Type-Options', status: 'PASS', note: 'nosniff' },
                { name: 'Referrer-Policy', status: 'PASS', note: 'strict-origin-when-cross-origin' },
              ].map((hdr, idx) => (
                <div
                  key={idx}
                  className={`p-3 border flex items-center justify-between text-xs ${
                    terminalMode ? 'bg-black border-emerald-500/40 text-emerald-300' : 'bg-zinc-900 border-white/10'
                  }`}
                >
                  <div>
                    <span className={`font-bold uppercase block ${terminalMode ? 'text-emerald-300' : 'text-white'}`}>{hdr.name}</span>
                    <span className={`text-[10px] ${terminalMode ? 'text-emerald-500' : 'text-zinc-500'}`}>{hdr.note}</span>
                  </div>
                  <span className="px-2 py-0.5 text-[9px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {hdr.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
