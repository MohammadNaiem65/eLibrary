export default function Error({
    children = 'An error occurred',
    className,
    error,
}) {
    return (
        <section
            className={`px-2 border-2 border-red-500/60 bg-red-100 text-red-500 ${className}`}
        >
            {error || children}
        </section>
    );
}
