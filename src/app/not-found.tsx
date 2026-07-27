import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative w-full min-h-screen bg-[#050508] bg-noise flex flex-col items-center justify-center overflow-x-clip selection:bg-amber-500/20 selection:text-amber-200">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0" />

      <div className="relative z-10 text-center space-y-6 px-6">
        <p className="font-absans text-[8rem] md:text-[12rem] font-bold text-amber-500/10 leading-none">
          404
        </p>
        <h1 className="font-absans text-3xl md:text-4xl font-bold uppercase text-white tracking-wide -mt-8">
          Page Not Found
        </h1>
        <p className="text-sm text-zinc-400 font-light max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s
          get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 hover:from-amber-300 hover:via-amber-100 hover:to-amber-400 shadow-[0_4px_15px_rgba(245,158,11,0.2)] transition-all"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-300 border border-zinc-800 hover:border-amber-500/40 hover:text-white transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
