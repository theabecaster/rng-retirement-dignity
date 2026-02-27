export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-8">
          {/* Brand */}
          <div>
            <p className="font-playfair text-xl font-bold text-white mb-1">
              RNG <span className="text-gold">Retirement</span> Dignity
            </p>
            <p className="font-inter text-white/50 text-sm tracking-widest uppercase">
              Education · Clarity · Dignity
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-2">
            {[
              ["About", "#about"],
              ["What We Cover", "#topics"],
              ["Common Questions", "#faq"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="font-inter text-sm text-white/50 hover:text-gold transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/5 pt-8 space-y-3">
          <p className="font-inter text-xs text-white/30 leading-relaxed max-w-3xl">
            RNG Insurance Group is a licensed insurance entity. This website is
            for educational purposes only and does not constitute financial,
            legal, or insurance advice. Product availability and eligibility vary
            by state. Please consult a licensed professional before making any
            financial or insurance decisions.
          </p>
          <p className="font-inter text-xs text-white/20">
            © 2026 RNG Insurance Group. All rights reserved. Operating as RNG
            Retirement Dignity.
          </p>
        </div>
      </div>
    </footer>
  );
}
