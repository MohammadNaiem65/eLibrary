import { useState } from 'react';
import { UserPlus, Mail, Lock, User } from 'lucide-react';
import AuthCard from '../components/Auth/AuthCard';
import AuthLink from '../components/Auth/AuthLink';
import Input from '../shared/Input';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
    };

    return (
        <AuthCard
            icon={UserPlus}
            title='Create Account'
            subtitle='Join us today!'
            iconColor='text-pink-600'
            iconBgColor='bg-pink-100'
            className='pt-20'
        >
            <form onSubmit={handleSubmit} className='space-y-3'>
                <Input
                    label='Full Name'
                    icon={User}
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter your full name'
                    required
                />

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
                    placeholder='Choose a strong password'
                    required
                />

                <button
                    type='submit'
                    className='w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transform transition-transform duration-200 hover:scale-[1.02]'
                >
                    Create Account
                </button>
            </form>

            <AuthLink
                text='Already have an account?'
                linkText='Sign in'
                href='/login'
                color='text-pink-600'
            />
        </AuthCard>
    );
};

export default Register;
