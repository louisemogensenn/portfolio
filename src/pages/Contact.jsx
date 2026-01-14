import louiseMogensen from '../assets/louiseMogensen.jpeg';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <section className="w-[90%] mx-auto max-w-2xl">
            <img src={louiseMogensen} alt="Billede af Louise Mogensen" className="w-full" />
            <Heading text="Hvem er jeg?" />
            <Paragraph text="Hvis du synes mine projekter og min profil lyder spændende, så ring endelig til mig eller skriv en mail!"/>
            
            <Heading text="Telefon" />
            <Link to="tel:+4550421700">
                <Paragraph text="+45 50 42 17 00" />
            </Link>
            
            <Heading text="Mail" />
            <Link to="mailto:louisemogensen@outlook.dk">
                <Paragraph text="louisemogensen@outlook.dk" />
            </Link>

            <div className="flex justify-center">
                <Link to="https://www.linkedin.com/in/louise-mogensen-a4139324a/" className={"w-50 h-10 text-base font-helvetica transition-all duration-300 inline-flex items-center justify-center rounded-[50px] bg-white text-black border border-black hover:bg-gray-100"}>
                Fang mig på LinkedIn
                </Link>
            </div>
        </section>
    );
}