import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="w-full py-8 mt-28.5">
            {/* Øverste streg */}
            <hr className="border-t border-black mb-6" />
            
            {/* Links */}
            <div className="grid grid-cols-3 w-full">
                <Link to="/projects" className="text-center hover:text-gray-600 transition-colors">projekter</Link>
                <Link to="/about" className="text-center hover:text-gray-600 transition-colors">om</Link>
                <Link to="/contact" className="text-center hover:text-gray-600 transition-colors">kontakt</Link>
            </div>
            
            {/* Nederste streg */}
            <hr className="border-t border-black mt-6" />
        </footer>
    );
}