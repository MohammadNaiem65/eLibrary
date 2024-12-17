import { Link } from 'react-router-dom';

export default function AuthLink({ text, linkText, href, color }) {
    return (
        <p className='mt-6 text-center text-sm text-gray-600'>
            {text}{' '}
            <Link to={href} className={`font-medium ${color} hover:opacity-80`}>
                {linkText}
            </Link>
        </p>
    );
}
