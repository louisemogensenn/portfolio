import { Link } from 'react-router-dom';
import Heading from './Heading';

export default function Footer() {
    return (
        <footer className="w-full py-8 mt-20">
            {/* Øverste streg */}
            <hr className="border-t border-black mb-6" />
            
            {/* Links */}
            <div className="grid grid-cols-3 w-full">
                <Link to="/projects" className="text-center hover:text-gray-600 transition-colors">
                    <h2>projekter</h2>
                </Link>
                <Link to="/about" className="text-center hover:text-gray-600 transition-colors">
                    <h2>om</h2>
                </Link>
                <Link to="/contact" className="text-center hover:text-gray-600 transition-colors">
                    <h2>kontakt</h2>
                </Link>
            </div>
            
            {/* Nederste streg */}
            <hr className="border-t border-black mt-6" />
        </footer>
    );
}