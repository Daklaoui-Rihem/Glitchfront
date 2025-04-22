import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Main navigation */}
      <header className="border-b border-zinc-800/40">
        <div className="container mx-auto px-4 md:px-6 flex items-center h-16">
          <div className="flex items-center gap-2 mr-8">
            <div className="bg-purple-600 rounded-full p-2 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-white"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="text-lg font-semibold">Glitch</span>
          </div>

          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-white font-medium">
              Home
            </Link>
            <Link href="/discover" className="text-zinc-400 hover:text-white transition-colors">
              Discover
            </Link>
            <Link href="/library" className="text-zinc-400 hover:text-white transition-colors">
              Library
            </Link>
          </nav>

          <div className="ml-auto flex items-center gap-4">
            <Link href="/sign-in" className="text-zinc-300 hover:text-white transition-colors">
              Log in
            </Link>
            <Link
              href="/sign-up"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Sign up
            </Link>
          </div>
        </div>
      </header>

      {/* Main content area */}
      <main className="flex-1 container mx-auto px-4 md:px-6 py-8">
        {/* Featured Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Playlists</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-zinc-900 rounded-lg p-4 aspect-square flex flex-col">
                <div className="bg-zinc-800 rounded-md aspect-square mb-4"></div>
                <h3 className="font-medium text-sm">Playlist Name</h3>
                <p className="text-xs text-zinc-400 mt-1">Curated for you</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recently Played */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Recently Played</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors rounded-lg p-3">
                <div className="bg-zinc-800 rounded-md aspect-square mb-3"></div>
                <h3 className="font-medium text-sm truncate">Track Name</h3>
                <p className="text-xs text-zinc-400 truncate">Artist Name</p>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Artists */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Popular Artists</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="text-center">
                <div className="bg-zinc-800 rounded-full aspect-square mb-3 mx-auto"></div>
                <h3 className="font-medium text-sm">Artist Name</h3>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/40 py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="bg-purple-600 rounded-full p-1.5 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3 h-3 text-white"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="text-sm font-medium">Glitch</span>
          </div>

          <div className="flex gap-6">
            <Link href="/about" className="text-xs text-zinc-400 hover:text-white">
              About
            </Link>
            <Link href="/terms" className="text-xs text-zinc-400 hover:text-white">
              Terms
            </Link>
            <Link href="/privacy" className="text-xs text-zinc-400 hover:text-white">
              Privacy
            </Link>
            <Link href="/help" className="text-xs text-zinc-400 hover:text-white">
              Help
            </Link>
          </div>

          <div className="text-xs text-zinc-500 mt-4 md:mt-0">© {new Date().getFullYear()} Glitch Music</div>
        </div>
      </footer>
    </div>
  )
}
