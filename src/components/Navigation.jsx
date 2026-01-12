import { useState } from 'react';
import burgermenu from '../assets/burgermenu.svg';
import { Link } from 'react-router-dom';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="flex flex-col items-center mt-18">
    <Link to="/">
        <section className="flex flex-col items-center">
            <h1 className="font-playfair font-thin text-[40px]">LOUISE</h1>
            <h1 className="font-playfair font-thin text-[40px]">MOGENSEN</h1>
        </section>
    </Link>

    <img src={burgermenu} alt="Menu" className="mt-4 cursor-pointer mb-16.25" onClick={toggleMenu}/>
</nav>

            {/* Overlay */}
            <div className={`fixed inset-0 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}/>

            {/* Slide-in menu */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    {/* Links */}
                    <nav className="flex flex-col items-center justify-center h-full space-y-6">
                        <Link to="/" className="text-lg hover:text-gray-400 transition-colors" onClick={toggleMenu}><h2>forside</h2></Link>
                        <Link to="/projects" className="text-lg hover:text-gray-400 transition-colors" onClick={toggleMenu}><h2>projekter</h2></Link>
                        <Link to="/about" className="text-lg hover:text-gray-400 transition-colors" onClick={toggleMenu}><h2>om</h2></Link>
                        <Link to="/contact" className="text-lg hover:text-gray-400 transition-colors" onClick={toggleMenu}><h2>kontakt</h2></Link>
                    </nav>
                </div>
            </div>
        </>
    );
}