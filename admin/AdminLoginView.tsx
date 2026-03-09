import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

interface AdminLoginViewProps {
  onBack: () => void;
  onSuccess: () => void;
}

const AdminLoginView: React.FC<AdminLoginViewProps> = ({ onBack, onSuccess }) => {
  const logoUrl = "https://i.ibb.co/KxxyJK63/IMG-20260215-091905-778.webp";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Security state
  const [attempts, setAttempts] = useState(0);
  const [lockoutUntil, setLockoutUntil] = useState<number | null>(null);

  useEffect(() => {
    // Load security state from localStorage
    const savedAttempts = localStorage.getItem('admin_login_attempts');
    const savedLockout = localStorage.getItem('admin_lockout_until');
    
    if (savedAttempts) setAttempts(parseInt(savedAttempts));
    if (savedLockout) {
      const until = parseInt(savedLockout);
      if (until > Date.now()) {
        setLockoutUntil(until);
      } else {
        localStorage.removeItem('admin_lockout_until');
        localStorage.setItem('admin_login_attempts', '0');
        setAttempts(0);
      }
    }
  }, []);

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (lockoutUntil && lockoutUntil > Date.now()) {
      const daysLeft = Math.ceil((lockoutUntil - Date.now()) / (1000 * 60 * 60 * 24));
      setError(`Account locked. Try again in ${daysLeft} days.`);
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Reset attempts on success
      localStorage.setItem('admin_login_attempts', '0');
      localStorage.removeItem('admin_lockout_until');
      onSuccess();
    } catch (err: any) {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      localStorage.setItem('admin_login_attempts', newAttempts.toString());

      if (newAttempts >= 3) {
        const sevenDays = 7 * 24 * 60 * 60 * 1000;
        const until = Date.now() + sevenDays;
        setLockoutUntil(until);
        localStorage.setItem('admin_lockout_until', until.toString());
        setError('Maximum attempts reached. Account locked for 7 days.');
      } else {
        setError(`Invalid credentials. Attempt ${newAttempts} of 3.`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const isLocked = lockoutUntil && lockoutUntil > Date.now();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="px-4 py-4 flex items-center justify-between border-b border-slate-100">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-slate-50 rounded-full transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex items-center gap-2">
          <img src={logoUrl} alt="Logo" className="w-8 h-8 rounded-full object-cover" />
          <span className="font-bold text-slate-800 tracking-tight">Gothwad Technologies</span>
        </div>
        <div className="w-10"></div> {/* Spacer for symmetry */}
      </header>

      {/* Login Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-[350px] space-y-8">
          <div className="text-center space-y-2">
            <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-slate-100 shadow-sm">
              <img src={logoUrl} alt="Logo" className="w-14 h-14 rounded-2xl object-cover" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Admin Login</h2>
            <p className="text-slate-500 text-sm">Enter your credentials to access the control panel.</p>
          </div>

          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div className="space-y-1">
              <input 
                required
                type="email" 
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLocked || isLoading}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all placeholder:text-slate-400"
              />
            </div>

            <div className="relative">
              <input 
                required
                type={showPassword ? "text" : "password"} 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLocked || isLoading}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all placeholder:text-slate-400"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.882 9.882L9.882 9.882zM3 3l18 18" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>

            <div className="flex items-center justify-between px-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-xs text-slate-500 group-hover:text-slate-700 transition-colors">Remember me</span>
              </label>
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 text-[11px] font-bold p-3 rounded-xl border border-red-100 text-center animate-shake">
                {error}
              </div>
            )}

            <button 
              type="submit"
              disabled={isLoading || isLocked}
              className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all active:scale-[0.98] disabled:opacity-50 disabled:active:scale-100 shadow-lg shadow-blue-200"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </div>
              ) : 'Sign In'}
            </button>
          </form>

          {attempts > 0 && !isLocked && (
            <div className="space-y-3">
              <div className="flex justify-center gap-3">
                {[1, 2, 3].map((num) => (
                  <div 
                    key={num}
                    className={`w-10 h-1.5 rounded-full transition-all duration-500 ${attempts >= num ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.4)]' : 'bg-slate-100'}`}
                  />
                ))}
              </div>
              <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Attempt <span className="text-red-500">{attempts}</span> of 3
              </p>
            </div>
          )}

          {isLocked && (
            <div className="text-center space-y-4 animate-pulse">
              <div className="inline-flex flex-col items-center gap-2 bg-red-50 px-6 py-4 rounded-[24px] border border-red-100">
                <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.2em]">Security Lockout</span>
                <span className="text-3xl font-black text-red-600 tracking-tighter">7 Days</span>
                <p className="text-[9px] text-red-400 font-bold uppercase tracking-widest">Access Denied</p>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="py-8 text-center">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">© 2026 Gothwad Technologies</p>
      </footer>
    </div>
  );
};

export default AdminLoginView;
