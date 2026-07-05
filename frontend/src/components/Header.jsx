import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/login");
  };

  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-indigo-950 via-purple-900 to-fuchsia-900 shadow-2xl">
      {/* Background blobs */}
      <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-pink-500/20 blur-3xl"></div>
      <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-indigo-400/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-purple-400/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 py-5">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          {/* Logo */}
          <Link to="/">
            <h1 className="text-center sm:text-left text-3xl md:text-4xl font-extrabold tracking-wide text-white">
              ✨ My Todo App
            </h1>
            <p className="mt-1 text-center sm:text-left text-sm text-purple-200">
              Organize your day beautifully
            </p>
          </Link>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-3">
            <Link
              to="/todos"
              className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-purple-900"
            >
              📋 All Todos
            </Link>

            <button
              onClick={logoutHandler}
              className="rounded-full bg-pink-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:bg-pink-600 hover:scale-105"
            >
              🚪 Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;