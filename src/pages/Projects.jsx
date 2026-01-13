import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import { Link } from 'react-router-dom';
import arrow from '../assets/arrow.svg';

export default function Projects() {
    return (
        <div className="w-[90%] mx-auto max-w-2xl">
            <Link to="/trustCenter">
                <section className="flex justify-between">
                    <div>
                        <Heading text="Trust Center - Hovedopgave" />
                        <p className="italic font-light">januar 2026</p>
                    </div>
                    <div className="self-center">
                        <img src={arrow} alt="Arrow Icon" className="w-8 h-8 mt-8.25" />
                    </div>
                </section>
            </Link>

            <br></br>

            <Link to="/frontendProject">
                <section className="flex justify-between">
                    <div>
                        <Heading text="Frontend Specialisering" />
                        <p className="italic font-light">maj 2025</p>
                    </div>
                    <div className="self-center">
                        <img src={arrow} alt="Arrow Icon" className="w-8 h-8 mt-8.25" />
                    </div>
                </section>
            </Link>

            <br></br>

            <Link to="/sustainableWebdesign">
                <section className="flex justify-between">
                    <div>
                        <Heading text="Bæredygtigt Webdesign" />
                        <p className="italic font-light">april 2025</p>
                    </div>
                    <div className="self-center">
                        <img src={arrow} alt="Arrow Icon" className="w-8 h-8 mt-8.25" />
                    </div>
                </section>
            </Link>

            <br></br>

            <Link to="/currentProject">
                <section className="flex justify-between">
                    <div>
                        <Heading text="Nuværende Projekt" />
                        <p className="italic font-light">januar 2026</p>
                    </div>
                    <div className="self-center">
                        <img src={arrow} alt="Arrow Icon" className="w-8 h-8 mt-8.25" />
                    </div>
                </section>
            </Link>
        </div>
    );
}