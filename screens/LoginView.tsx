
import React, { useState } from 'react';
import { auth, googleProvider } from '../firebase';
import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';

interface LoginViewProps {
  onBack: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onBack }) => {
  const logoUrl = "https://i.ibb.co/KxxyJK63/IMG-20260215-091905-778.webp";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Logged in successfully!');
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Account created successfully!');
      }
      onBack();
    } catch (error: any) {
      console.error('Auth error:', error);
      alert(error.message || 'Authentication failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      alert('Logged in with Google successfully!');
      onBack();
    } catch (error: any) {
      console.error('Google login error:', error);
      alert(error.message || 'Google login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0056B3] to-transparent opacity-50"></div>
      
      <div className="container max-w-md relative z-10 flex flex-col items-center">
        {/* Compact Header Section */}
        <div className="text-center mb-8">
          <div 
            onClick={onBack}
            className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/10 mx-auto mb-6 hover:scale-110 transition-transform cursor-pointer overflow-hidden border border-slate-100"
          >
             <img src={logoUrl} alt="Gothwad Logo" className="w-full h-full object-cover scale-110" />
          </div>
          <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none mb-3">
            Gothwad Technologies <br /> <span className="text-[#0056B3]">{isLogin ? 'Login' : 'Sign Up'}</span>
          </h1>
        </div>

        {/* Auth Form */}
        <div className="w-full glass-card p-6 md:p-8 rounded-[32px] border border-white shadow-xl">
          <form onSubmit={handleAuth} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
              <input 
                required
                type="email" 
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Password</label>
              <input 
                required
                type="password" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#0056B3] text-white py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-slate-900 transition-all shadow-lg active:scale-95 disabled:opacity-50"
            >
              {isLoading ? 'Processing...' : (isLogin ? 'Login' : 'Create Account')}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
            <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest text-slate-400"><span className="bg-white px-4">Or continue with</span></div>
          </div>

          <button 
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full bg-white border border-slate-200 text-slate-700 py-4 rounded-xl font-bold text-xs flex items-center justify-center gap-3 hover:bg-slate-50 transition-all active:scale-95 disabled:opacity-50"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google Login
          </button>

          <p className="mt-8 text-center text-xs text-slate-500 font-medium">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-[#0056B3] font-black uppercase tracking-wider hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>

        <button 
          onClick={onBack}
          className="mt-12 text-slate-400 hover:text-slate-900 font-black uppercase text-[9px] tracking-[0.2em] flex items-center gap-3 transition-all group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Exit Secure Portal
        </button>
      </div>
    </div>
  );
};

export default LoginView;
