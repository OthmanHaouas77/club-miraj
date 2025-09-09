// Objectif : Navbar simple et entièrement front-end.
// Supprime les éléments backend/auth (admin, pré-inscription, connexion/profil).
// Fournit des liens publics : Accueil, Spa, Planning, Contact.

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from './miraj.png';

function Navbar() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full py-3 px-6 z-50 transition-all duration-300 ${
             scrolled || isMobileOpen
                ? 'bg-black/90 backdrop-blur-md border-b border-white/10 shadow-xl'
                : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo + liens (desktop) */}
                <div className="flex items-center">
                    <Link to="/" className="flex items-center group">
                        <div className="mr-3">
                            <img
                                src={logo}
                                alt="Logo Miraj"
                                className="h-10 w-10 object-contain drop-shadow-lg"
                            />
                        </div>
                        <div>
                            <div className="text-xl font-bold tracking-wider text-white">CLUB MIRAJ</div>
                            <div className="text-xs text-teal-300 tracking-tight">HAMMAM, FITNESS</div>
                        </div>
                    </Link>

                    <div className="hidden lg:flex ml-10 space-x-7">
                        <NavLink to="/" label="Accueil" />
                        <NavLink to="/spa" label="Spa" />
                        <NavLink to="/planning" label="Planning" />
                        <NavLink to="/contact" label="Contact" />
                    </div>
                </div>

                {/* Mobile menu button + (no auth buttons) */}
                <div className="flex items-center">
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className="lg:hidden inline-flex items-center justify-center p-2 rounded-md bg-teal-600 hover:bg-teal-500 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        aria-expanded={isMobileOpen}
                        aria-label="Toggle navigation"
                    >
                        {/* simple hamburger icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileOpen && (
                <div className="lg:hidden mt-2 px-6 pb-4">
                    <div className="flex flex-col space-y-2">
                        <MobileNavLink to="/" label="Accueil" onClick={() => setIsMobileOpen(false)} />
                        <MobileNavLink to="/spa" label="Spa" onClick={() => setIsMobileOpen(false)} />
                        <MobileNavLink to="/planning" label="Planning" onClick={() => setIsMobileOpen(false)} />
                        <MobileNavLink to="/contact" label="Contact" onClick={() => setIsMobileOpen(false)} />
                    </div>
                </div>
            )}
        </nav>
    );
}

// Composant pour les liens de navigation (desktop)
function NavLink({ to, label }) {
    return (
        <Link
            to={to}
            className="font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group"
        >
            {label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
    );
}

// Composant pour les liens (mobile)
function MobileNavLink({ to, label, onClick }) {
    return (
        <Link
            to={to}
            onClick={onClick}
            className="px-3 py-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-700/30 transition-colors duration-150"
        >
            {label}
        </Link>
    );
}

export default Navbar;
