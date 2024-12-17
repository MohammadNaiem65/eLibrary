import { useState } from 'react';
import { LogIn, Mail, Lock } from 'lucide-react';
import AuthCard from '../components/Auth/AuthCard';
import AuthLink from '../components/Auth/AuthLink';
import Input from '../shared/Input';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <AuthCard
            icon={LogIn}
            title='Welcome back'
            subtitle='Please sign in to your account'
            iconColor='text-purple-600'
            iconBgColor='bg-purple-100'
            className='pt-20'
        >
            <form onSubmit={handleSubmit} className='space-y-3'>
                <Input
                    label='Email address'
                    icon={Mail}
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                    required
                />

                <Input
                    label='Password'
                    icon={Lock}
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter your password'
                    required
                />

                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <input
                            type='checkbox'
                            className='h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded'
                        />
                        <label className='ml-2 block text-sm text-gray-700'>
                            Remember me
                        </label>
                    </div>
                    <a
                        href='#'
                        className='text-sm font-medium text-purple-600 hover:text-purple-500'
                    >
                        Forgot password?
                    </a>
                </div>

                <button
                    type='submit'
                    className='w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform transition-transform duration-200 hover:scale-[1.02]'
                >
                    Sign in
                </button>
            </form>

            <AuthLink
                text="Don't have an account?"
                linkText='Sign up'
                href='/register'
                color='text-purple-600'
            />
        </AuthCard>
    );
};

export default Login;
