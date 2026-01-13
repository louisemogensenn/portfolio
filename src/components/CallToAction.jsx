import { Link } from 'react-router-dom';

export default function Button({ text, filled = false, to }) {
    return (
        <Link to={to} className={`w-36.25 h-10 text-base font-helvetica transition-all duration-300 inline-flex items-center justify-center rounded-[50px] ${filled 
                ? 'bg-black text-white hover:bg-gray-800' 
                : 'bg-white text-black border border-black hover:bg-gray-100'
            }`}>
                {text}
        </Link>
    );
}