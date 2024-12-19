import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { UserPlus, Mail, Lock, User } from 'lucide-react';
import { Bounce, toast } from 'react-toastify';
import useAxiosSecure from '../hooks/useAxiosSecure';
import AuthCard from '../components/Auth/AuthCard';
import AuthLink from '../components/Auth/AuthLink';
import Input from '../shared/Input';
import Loader from '../shared/Loader';
import Error from '../shared/Error';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const { mutate, isPending, isSuccess, isError, error } = useMutation({
        mutationFn: () =>
            axiosSecure.post('/register', { name, email, password }),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setErr('');

        mutate();
    };

    useEffect(() => {
        if (isSuccess) {
            navigate('/login');

            toast('Successfully Registered', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
                transition: Bounce,
            });
        }
    }, [isSuccess, navigate]);

    useEffect(() => {
        if (isError) {
            setErr(error?.response.data);
        }
    }, [isError, error]);

    return (
        <>
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

                {err && (
                    <Error className='w-fit mx-auto mt-3 rounded' error={err} />
                )}

                <AuthLink
                    text='Already have an account?'
                    linkText='Sign in'
                    href='/login'
                    color='text-pink-600'
                />
            </AuthCard>

            {isPending && <Loader />}
        </>
    );
};

export default Register;
