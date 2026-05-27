import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Mail, Lock, ShieldAlert, CheckCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Auth() {
    const { user } = useAuth();
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [msg, setMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleAuth = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMsg(null);
        try {
            if (isLogin) {
                const { error } = await supabase.auth.signInWithPassword({ email, password });
                if (error) throw error;
            } else {
                const { error } = await supabase.auth.signUp({ email, password });
                if (error) throw error;
                setMsg("Verification email sent! Check your inbox.");
            }
        } catch (err) {
            setError(err.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogle = async () => {
        const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
        if (error) setError(error.message);
    };

    if (user) {
        return (
            <div className="py-32 bg-[#0d0a06] flex flex-col items-center justify-center min-h-[80vh]">
                <div className="w-16 h-16 rounded-full bg-[#1a3a1f] flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-[#32de62]" />
                </div>
                <h2 className="text-white text-3xl font-bold font-display mb-2">You are logged in!</h2>
                <p className="text-[#8c7050] text-sm">Welcome back, {user.email}</p>
            </div>
        );
    }

    return (
        <div className="py-32 bg-[#0d0a06] flex items-center justify-center min-h-[80vh] relative overflow-hidden">
            {/* Background aesthetics */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a06] via-transparent to-[#0d0a06]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#ff8c00]/5 blur-[120px] pointer-events-none" />

            <div className="glass border border-[#ff8c00]/15 rounded-3xl p-8 max-w-md w-full relative z-10 glow mx-4">
                <h2 className="text-center font-display text-2xl font-bold text-white mb-2">
                    {isLogin ? 'Welcome Back' : 'Create an Account'}
                </h2>
                <p className="text-center text-[#8c7050] text-sm mb-6">
                    {isLogin ? 'Sign in to access your courses' : 'Start your trading journey today'}
                </p>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 mb-4 flex items-start gap-2 text-red-500">
                        <ShieldAlert size={16} className="mt-0.5 shrink-0" />
                        <p className="text-sm">{error}</p>
                    </div>
                )}

                {msg && (
                    <div className="bg-[#32de62]/10 border border-[#32de62]/30 rounded-xl p-3 mb-4 flex items-start gap-2 text-[#32de62]">
                        <CheckCircle size={16} className="mt-0.5 shrink-0" />
                        <p className="text-sm">{msg}</p>
                    </div>
                )}

                <form onSubmit={handleAuth} className="space-y-4">
                    <div>
                        <label className="block text-[#8c7050] text-xs mb-1.5 font-medium">Email Address</label>
                        <div className="relative">
                            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4a3520]" />
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                                className="w-full bg-[#0d0a06] border border-[#2e1f08] rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder-[#4a3520] outline-none focus:border-[#ff8c00]/50 transition-all"
                                placeholder="you@email.com" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-[#8c7050] text-xs mb-1.5 font-medium">Password</label>
                        <div className="relative">
                            <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4a3520]" />
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
                                className="w-full bg-[#0d0a06] border border-[#2e1f08] rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder-[#4a3520] outline-none focus:border-[#ff8c00]/50 transition-all"
                                placeholder="••••••••" />
                        </div>
                    </div>

                    <button type="submit" disabled={loading} className="btn-primary w-full py-3.5 text-sm font-semibold flex items-center justify-center">
                        {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Sign Up')}
                    </button>
                </form>

                <div className="flex items-center gap-4 my-6">
                    <div className="h-px bg-[#2e1f08] flex-1"></div>
                    <span className="text-[#8c7050] text-xs font-medium uppercase">Or</span>
                    <div className="h-px bg-[#2e1f08] flex-1"></div>
                </div>

                <button onClick={handleGoogle} type="button" className="w-full bg-white text-black rounded-xl py-3 text-sm font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                    Continue with Google
                </button>

                <p className="text-center text-[#8c7050] text-xs mt-6">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button type="button" onClick={() => setIsLogin(!isLogin)} className="text-[#ff8c00] hover:underline font-medium">
                        {isLogin ? 'Sign up' : 'Log in'}
                    </button>
                </p>
            </div>
        </div>
    );
}
