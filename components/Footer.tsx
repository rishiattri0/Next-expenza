import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      {/* Neon accent line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-fuchsia-500 via-emerald-500 to-cyan-500 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-900 via-gray-700 to-black dark:from-gray-200 dark:via-gray-400 dark:to-white rounded-xl flex items-center justify-center shadow-md group-hover:brightness-125 transition">
                <span className="text-white dark:text-black text-lg">
                  {" "}
                  <img src="/logo.svg" alt="App Logo" width={24} height={24} />
                </span>
              </div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-black via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                Expenza
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
              Smarter financial management powered by AI. Track your expenses,
              manage budgets, and gain insights into your spending patterns.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-fuchsia-500 dark:hover:text-cyan-400 text-sm font-medium transition-colors duration-200"
              >
                <span className="w-1.5 h-1.5 bg-fuchsia-500 dark:bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                Home
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-fuchsia-500 dark:hover:text-cyan-400 text-sm font-medium transition-colors duration-200"
              >
                <span className="w-1.5 h-1.5 bg-fuchsia-500 dark:bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                About
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-fuchsia-500 dark:hover:text-cyan-400 text-sm font-medium transition-colors duration-200"
              >
                <span className="w-1.5 h-1.5 bg-fuchsia-500 dark:bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                Contact
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Features
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <div className="w-5 h-5 bg-gradient-to-br from-fuchsia-500 to-cyan-500 rounded-md flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs">🤖</span>
                </div>
                AI-Powered Insights
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <div className="w-5 h-5 bg-gradient-to-br from-cyan-500 to-fuchsia-500 rounded-md flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs">✨</span>
                </div>
                Smart Categorization
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <div className="w-5 h-5 bg-gradient-to-br from-fuchsia-500 to-cyan-500 rounded-md flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs">📊</span>
                </div>
                Analytics Dashboard
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mb-8"></div>

        {/* Copyright and Social */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Expenza. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium hover:brightness-125 transition">
              <span className="w-1.5 h-1.5 bg-fuchsia-500 dark:bg-cyan-400 rounded-full animate-pulse"></span>
              Made by Rishi
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
