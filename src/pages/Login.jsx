import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { Bounce, toast } from 'react-toastify';
import { LogIn, Mail, Lock } from 'lucide-react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import AuthCard from '../components/Auth/AuthCard';
import AuthLink from '../components/Auth/AuthLink';
import Input from '../shared/Input';
import Loader from '../shared/Loader';
import Error from '../shared/Error';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const {
        mutate,
        data: response,
        isPending,
        isSuccess,
        isError,
        error,
    } = useMutation({
        mutationFn: () => axiosSecure.post('/login', { email, password }),
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        mutate();
    };

    useEffect(() => {
        if (isSuccess) {
            const { data } = response;

            localStorage.setItem('auth', JSON.stringify(data));

            navigate('/books');

            toast('Successfully Logged In', {
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
    }, [isSuccess, response, navigate]);

    useEffect(() => {
        if (isError) {
            setErr(error?.response.data);
        }
    }, [isError, error]);

    // console.log(data, isSuccess);

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

                <button
                    type='submit'
                    className='w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform transition-transform duration-200 hover:scale-[1.02]'
                >
                    Sign in
                </button>
            </form>

            {err && (
                <Error className='w-fit mx-auto mt-3 rounded' error={err} />
            )}

            <AuthLink
                text="Don't have an account?"
                linkText='Sign up'
                href='/register'
                color='text-purple-600'
            />

            {isPending && <Loader />}
        </AuthCard>
    );
};

export default Login;
