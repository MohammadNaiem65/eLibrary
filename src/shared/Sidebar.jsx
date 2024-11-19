import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <aside className='w-[18%] h-screen border-r-2 fixed top-0 left-0'>
            <h2 className='text-2xl font-bold italic ml-5 mt-5 drop-shadow-lg'>
                eLibrary
            </h2>

            <ul className='menu h-fit mt-28 pt-32 px-5 flex flex-col space-y-'>
                <li>
                    <Link to='/' className='px-5 text-xl'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/all-products' className='px-5 text-xl'>
                        All Products
                    </Link>
                </li>
                <li>
                    <Link to='/cart' className='px-5 text-xl'>
                        Cart
                    </Link>
                </li>
            </ul>
        </aside>
    );
}
