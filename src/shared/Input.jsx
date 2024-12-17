export default function Input({ label, icon: Icon, ...props }) {
    return (
        <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
                {label}
            </label>
            <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <Icon className='h-5 w-5 text-gray-400' />
                </div>
                <input
                    className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                    {...props}
                />
            </div>
        </div>
    );
}
