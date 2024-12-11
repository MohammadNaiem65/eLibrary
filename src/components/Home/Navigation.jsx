
const navItems = ['Home', 'Categories', 'New Releases', 'Best Sellers', 'About'];

export function Navigation() {
  return (
    <nav className="hidden md:flex gap-8">
      {navItems.map((item) => (
        <button
          key={item}
          className="text-white/90 hover:text-white transition-colors duration-200"
        >
          {item}
        </button>
      ))}
    </nav>
  );
}