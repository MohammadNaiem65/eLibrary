export default function AuthCard({
    icon: Icon,
    title,
    subtitle,
    children,
    iconColor,
    iconBgColor,
    className,
}) {
    return (
        <div
            className={`min-h-screen bg-white flex items-center justify-center p-4 ${className}`}
        >
            <div className='max-w-md w-full bg-gradient-to-b from-gray-50 to-gray-100 rounded-2xl shadow-xl p-8 border border-gray-200'>
                <div className='text-center mb-8'>
                    <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${iconBgColor} mb-4`}
                    >
                        <Icon className={`w-8 h-8 ${iconColor}`} />
                    </div>
                    <h2 className='text-3xl font-bold text-gray-900'>
                        {title}
                    </h2>
                    <p className='text-gray-600 mt-1'>{subtitle}</p>
                </div>
                {children}
            </div>
        </div>
    );
}
