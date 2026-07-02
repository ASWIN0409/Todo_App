function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 shadow-2xl">
      {/* Decorative circles */}
      <div className="absolute -top-8 -left-8 h-24 w-24 rounded-full bg-white/10 blur-xl"></div>
      <div className="absolute -bottom-10 right-10 h-32 w-32 rounded-full bg-pink-400/20 blur-2xl"></div>

      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-4 py-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-white">
          ✨ My Todo App
        </h1>
      </div>
    </header>
  );
}

export default Header;