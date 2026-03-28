import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-container/5 rounded-full blur-[100px] pointer-events-none -mt-48 -mr-48"></div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-12 py-16 md:py-24 max-w-screen-2xl mx-auto relative z-10">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-4 mb-4">
            <img
              alt="GK AUTO HERB Logo"
              className="h-20 md:h-28 w-auto drop-shadow-lg opacity-100 transition-transform duration-500 hover:scale-105 filter contrast-125"
              src="/assets/logo_transparent.png"
            />
          </Link>
          <p className="text-zinc-500 text-sm tracking-wide leading-relaxed font-body mb-10">
            Defining the future of high-performance car protection through engineering and art.
          </p>
          <div className="flex gap-4">
            <a className="w-12 h-12 rounded-full glass-card border border-white/5 flex items-center justify-center text-zinc-500 hover:bg-white hover:text-black hover:border-white transition-all duration-300" href="#">
              <img alt="Instagram" className="w-5 h-5 invert opacity-50 transition-all duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUi4h-UVUw2lAQ9rJ1benm4opnh8D9eQ7WFvV8QF6yQ2GYU5fAXcTtgCiwmhuqI9AewBQ_Il87gSv4CdU-bC5HVGdW8cDhEpcWU1kdzipmtf8AYtq4jGNXy9wf2nVXWuMhpbZpBEeUHOOyYBLdxkdzZVA0mSaJfd0f5sVhpQZUQaWF5tY6KAaLOI0iOjF5BMbFX8B6Z7PsgQBooxCUTzqqH1ROoiB_JsH3LPbIwih9NGao2g8rKlGQuMCnT04RyfPhCEDWkWQgBOBN" />
            </a>
            <a className="w-12 h-12 rounded-full glass-card border border-white/5 flex items-center justify-center text-zinc-500 hover:bg-white hover:text-black hover:border-white transition-all duration-300" href="#">
              <img alt="WhatsApp" className="w-5 h-5 invert opacity-50 transition-all duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3o19MKogn2OkHB8Y-Fg3W14XPgnDXjNVs6v1jyUODUscov5Jl3T1M7kDzPh1TOhJCrdwp0bUCvyZO-62zJ09gNJEkvvokmeTTef7zFz3JvRMVsYX0-8SCdIvyZmVEkXHlU-xCDC8KwtnqEvhuBYqelQqOC6HrVo4oh4wHyiut_EGZF8p3JxWRLrTd4i5uV1VpyAmfMVIuce78azYyqDSp-SeoJ7i2z3Qamp2utuRCgJL2OBde2LZUnzk7CBIJXiBIe-q_nIsOBC7k" />
            </a>
            <a className="w-12 h-12 rounded-full glass-card border border-white/5 flex items-center justify-center text-zinc-500 hover:bg-white hover:text-black hover:border-white transition-all duration-300" href="#">
              <img alt="Facebook" className="w-5 h-5 invert opacity-50 transition-all duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGJeFLiRvzdwwLpY9qtCHNe3yHfLKAmwaiOdPMx7I17HwfLWQhw0F56BGKjvOcJGH1Ed-7A6xeLM8zIrek_pwVn3UjJ2ADHwr41Idzm0bK-j1Ub2R2eSXHf2dJCoqy4MVtk7gYcrb94VK-ODWbJCvjrwMW-EBu5MvXycbcbjwZLiDkvMNAuZU2f5M1kcoSw9LewB_UfeXmVefaEQeaG3ODwXoWIhuS4tfXEgJS9BkqDsA8HxQmFiPUrWEREFKGK8C2J0DfBgYo-qFR" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="col-span-1 md:ml-12">
          <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] mb-8 relative inline-block">
            Navigation
            <span className="absolute -bottom-3 left-0 w-8 h-px bg-primary-container"></span>
          </h4>
          <div className="flex flex-col space-y-4">
            {['Home', 'Services', 'Packages', 'Gallery', 'Contact'].map((item) => (
              <Link key={item} className="text-zinc-500 hover:text-white transition-colors duration-300 text-sm font-bold uppercase tracking-widest flex items-center gap-2 group" to={`/${item === 'Home' ? '' : item.toLowerCase()}`}>
                <span className="w-0 h-px bg-primary-container transition-all duration-300 group-hover:w-4"></span>
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="col-span-1">
          <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] mb-8 relative inline-block">
            Our Menu
            <span className="absolute -bottom-3 left-0 w-8 h-px bg-primary-container"></span>
          </h4>
          <div className="flex flex-col space-y-4">
            {['Paint Correction', 'Ceramic Coating', 'Interior Care', 'PPF Wrap'].map((item) => (
              <Link key={item} className="text-zinc-500 hover:text-white transition-colors duration-300 text-sm font-bold uppercase tracking-widest flex items-center gap-2 group" to="/services">
                <span className="w-0 h-px bg-primary-container transition-all duration-300 group-hover:w-4"></span>
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="col-span-1">
          <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] mb-8 relative inline-block">
            Subscribe
            <span className="absolute -bottom-3 left-0 w-8 h-px bg-primary-container"></span>
          </h4>
          <p className="text-zinc-500 text-sm leading-relaxed mb-6">Receive automotive care tips and exclusive offers directly in your inbox.</p>
          <div className="relative group">
            <input
              className="w-full bg-zinc-900 border border-white/5 rounded-xl px-5 py-5 text-sm text-white focus:ring-1 focus:ring-primary-container focus:border-transparent transition-all placeholder:text-zinc-600 outline-none hover:border-white/10"
              placeholder="Email address"
              type="email"
            />
            <button className="absolute right-2 top-2 bottom-2 aspect-square rounded-lg bg-white/5 text-zinc-100 flex items-center justify-center hover:bg-primary-container transition-all duration-300 border border-white/5">
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 text-center md:text-left">
        <p className="text-zinc-600 text-xs font-bold font-headline tracking-[0.2em] uppercase">© 2026 GK AUTO HERB. High-Performance Studio.</p>
        <div className="flex gap-6 text-xs text-zinc-600 font-bold uppercase tracking-widest">
          <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
