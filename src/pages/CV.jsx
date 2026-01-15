
import { useState } from 'react';
import louiseMogensen from '../assets/louiseMogensen2.jpeg';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Button from '../components/CallToAction';
import { Link } from 'react-router-dom';

export default function CV() {
    const [activeTab, setActiveTab] = useState('erfaring');

    return (
        <section className="w-[90%] mx-auto max-w-2xl">
            {/* Header med download knap */}
            <section className="flex justify-between items-start mb-8">
                <section>
                    <p className="text-lg">Frontend Developer & Multimediedesigner</p>
                </section>
                <Button text="Download PDF" to="/cv-louise-mogensen.pdf" filled={false} download={true} />
            </section>

            {/* Kontakt information */}
            <section className="mb-12 pb-6 border-b border-gray-300">
                <section className="grid grid-cols-1 md:grid-cols-2 gap-4 font-thin">
                    <section>
                        <Link to="tel:+4550421700">
                            <h2 className="font-playfair font-thin text-[20px] mt-8.25 mb-1.5">Telefon</h2>
                            <p>+45 50 42 17 00</p>
                        </Link>
                    </section>
                    <section>
                        <Link to="mailto:louisemogensen@outlook.dk">
                            <h2 className="font-playfair font-thin text-[20px] mt-8.25 mb-1.5">E-mail</h2>
                            <p>louisemogensen@outlook.dk</p>
                        </Link>
                    </section>
                    <section>
                        <Link to="https://www.linkedin.com/in/louise-mogensen-a4139324a/">
                            <h2 className="font-playfair font-thin text-[20px] mt-8.25 mb-1.5">LinkedIn</h2>
                            <p>Louise Mogensen</p>
                        </Link>
                    </section>
                    <section>
                        <Link to="https://github.com/louisemogensenn">
                            <h2 className="font-playfair font-thin text-[20px] mt-8.25 mb-1.5">GitHub</h2>
                            <p>louisemogensenn</p>
                        </Link>
                    </section>
                </section>
            </section>

            <img src={louiseMogensen} alt="Louise Mogensen"/>

            {/* Om mig */}
            <section className="mb-12">
                <Heading text="Om mig" />
                <Paragraph text="Jeg hedder Louise, jeg er 26 år gammel og er uddannet multimediedesigner med flair for frontend-udvikling. I forbindelse med mit studie har jeg fået en stor nysgerrighed for udvikling, der skaber en reel værdi for brugerne." />
                <Paragraph text="Jeg har opnået erfaring med HTML, CSS og JavaScript, herunder biblioteket React som er mit nuværende foretrukne framework at arbejde i." />
                <Paragraph text="Jeg nyder at udfordre mig selv og ønsker at opnå kendskab til flere frameworks, så min arbejdspalette bliver endnu bredere. Jeg kan byde ind med højt engagement og et stort bidrag i projekter." />
            </section>

            {/* Kompetencer */}
            <section className="mb-12">
                <Heading text="Kompetencer" />
                
                <section className="mb-6">
                    <Heading text="Frontend Udvikling" />
                    <section className="flex flex-wrap gap-2">
                        {['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'React Router', 'Git', 'Komponentbaseret arkitektur'].map(skill => (
                            <span key={skill} className="px-3 py-1 bg-black text-white rounded-full text-sm">
                                {skill}
                            </span>
                        ))}
                    </section>
                </section>

                <section className="mb-6">
                    <Heading text="UX" />
                    <section className="flex flex-wrap gap-2">
                        {['UI Design', 'UX Research', 'Brugercentreret design', 'Responsive design', 'User Flows', 'Wireframing', 'Usability Testing', 'Tilgængelighed'].map(skill => (
                            <span key={skill} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                                {skill}
                            </span>
                        ))}
                    </section>
                </section>

                <section>
                    <Heading text="Design" />
                    <section className="flex flex-wrap gap-2">
                        {['UI Design', 'Visual Design', 'Visuel Identitet', 'Tilgængelighed', 'Ikon-udvikling', 'Figma'].map(skill => (
                            <span key={skill} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                                {skill}
                            </span>
                        ))}
                    </section>
                </section>
            </section>

            {/* Tab Navigation */}
            <section className="flex justify-center gap-4 mb-8 border-b border-gray-300">
                <button onClick={() => setActiveTab('erfaring')} className={`pb-4 px-6 transition-all duration-300 ${ activeTab === 'erfaring' ? 'border-b-2 border-black font-medium' : 'font-thin hover:border-b-2 hover:border-gray-300'}`}>
                    Erfaring
                </button>
                <button onClick={() => setActiveTab('uddannelse')} className={`pb-4 px-6 transition-all duration-300 ${ activeTab === 'uddannelse' ? 'border-b-2 border-black font-medium' : 'font-thin hover:border-b-2 hover:border-gray-300'}`}>
                    Uddannelse
                </button>
            </section>

            {/* Tab Content */}
            <section className="mb-12">
                {activeTab === 'erfaring' && (
                    <section>
                        <h2 className="font-playfair font-thin text-2xl mb-4">Erfaring</h2>
                        
                        <section className="mb-6 pb-6 border-b border-gray-200">
                            <section className="flex justify-between items-start mb-2">
                                <h3 className="font-medium">Salgsassistent</h3>
                                <span className="font-thin italic text-sm">november 2024 - Nu</span>
                            </section>
                            <p className="font-thin mb-2">DK Company, Magasin</p>
                            <p className="font-thin text-sm">
                                Jeg er ansat som salgsassistent i Magasin Aarhus, hvor jeg sælger tøj fra DK Companys brands.
                            </p>
                        </section>

                        <section className="mb-6 pb-6 border-b border-gray-200">
                            <section className="flex justify-between items-start mb-2">
                                <h3 className="font-medium">Praktikant</h3>
                                <span className="font-thin italic text-sm">august 2025 - december 2025</span>
                            </section>
                            <p className="font-thin mb-2">.legal</p>
                            <p className="font-thin text-sm">Jeg har i forbindelse med mit studie været i praktik i virksomheden .legal. Her har jeg fået mulighed for at arbejde med udvikling af komponenter, der skal benyttes på deres hjemmeside. Blandt andet har jeg udviklet et FAQ-modul, der skal understøtte informerende artikler på deres hjemmeside. Jeg skrev desuden hovedopgave i virksomheden. Her udviklede jeg et Trust Center, og det kan du læse mere mere om <a href="/trustCenter" className="underline">her!</a></p>
                        </section>

                        <section className="mb-6 pb-6 border-b border-gray-200">
                            <section className="flex justify-between items-start mb-2">
                                <h3 className="font-medium">Kundeservicemedarbejder</h3>
                                <span className="font-thin italic text-sm">december 2022 - november 2024</span>
                            </section>
                            <p className="font-thin mb-2">IKEA</p>
                            <p className="font-thin text-sm">Jeg har stået i kassenlinje samt i returafdelingen i IKEA, Aarhus. Her har jeg hjulpet kunder ift. sectionerse spørgsmål og haft et overblik over kampagner. Løbende har jeg fået mere ansvar og stået som nærmeste kontaktperson i tilfælde af problemer eller kundespørgsmål.</p>
                        </section>

                        <section className="mb-6 pb-6 border-b border-gray-200">
                            <section className="flex justify-between items-start mb-2">
                                <h3 className="font-medium">Barista</h3>
                                <span className="font-thin italic text-sm">august 2021 - december 2021</span>
                            </section>
                            <p className="font-thin mb-2">Hverdag</p>
                            <p className="font-thin text-sm">I knap et halvt år var jeg ansat hos en kaffebar, Hverdag, indtil de i december 2021 valgte at lukke. Her serverede jeg kaffe lige efter gæsterne smag og bagte både brød og kage til.</p>
                        </section>

                        <section className="mb-6 pb-6 border-b border-gray-200">
                            <section className="flex justify-between items-start mb-2">
                                <h3 className="font-medium">Lærervikar og pædagogmedhjælper</h3>
                                <span className="font-thin italic text-sm">august 2019 - august 2022</span>
                            </section>
                            <p className="font-thin mb-2">Haldum-Hinnerup Skolen</p>
                            <p className="font-thin text-sm">Efter gymnasie blev jeg ansat som vikar på min gamle folkeskole. Her fungerede jeg som tilkaldevikar og varetog undervisning i klasser i tilfælde af sygdom. Jeg blev hurtigt en fast del af lærerne, og varetog sidenhen barselsvikariater. Jeg fik erfaring med specialklasser, hvor jeg med stor fornøjelse blev et fast ansigt. Jeg hjalp desuden i morgen- og eftermiddagstimerne i SFO'en, og blev også her en fast del af pædagogerne.</p>
                        </section>

                        <section className="mb-6 pb-6 border-b border-gray-200">
                            <section className="flex justify-between items-start mb-2">
                                <h3 className="font-medium">Salgsassistent</h3>
                                <span className="font-thin italic text-sm">marts 2017 - september 2019</span>
                            </section>
                            <p className="font-thin mb-2">Q8, Hinnerup</p>
                            <p className="font-thin text-sm">Jeg var ansat hos Q8 i Hinnerup, hvor jeg på mine vagter havde ansavret for at varetage kundebetjening, opfylde varer og rengøring. Jeg lærte her at blive selvstændig og tage ansvar, da vagterne var alene. </p>
                        </section>
                    </section>
                )}

                {activeTab === 'uddannelse' && (
                    <section>
                        <h2 className="font-playfair font-thin text-2xl mb-4">Uddannelse</h2>
                        
                        <section className="mb-6 pb-6 border-b border-gray-200">
                            <section className="flex justify-between items-start mb-2">
                                <h3 className="font-medium">Multimediedesigner</h3>
                                <span className="font-thin italic text-sm">januar 2024 - januar 2026</span>
                            </section>
                            <p className="font-thin mb-2">Erhvervsakademi Aarhus</p>
                            <p className="font-thin text-sm">Specialisering i frontend-udvikling med fokus på React, responsive design og brugeroplevelse.</p>
                        </section>

                        <section className="mb-6 pb-6 border-b border-gray-200">
                            <section className="flex justify-between items-start mb-2">
                                <h3 className="font-medium">Datamatiker</h3>
                                <span className="font-thin italic text-sm">august 2023 - juli 2024 (afbrudt)</span>
                            </section>
                            <p className="font-thin mb-2">Erhvervsakademi Aarhus</p>
                            <p className="font-thin text-sm">Jeg har gået et år på datamatikerstudiet, hvor jeg lærte at kode Java, SQL samt erfaring med fagene Forretning og IT og Systemudvikling. Jeg valgte at afbryde uddannelsen efter flere samtaler med studievejleder. Jeg søgte i stedet multimediedesigner for at få mere visuelt at arbejde med i min udvikling.</p>
                        </section>

                        <section className="mb-6 pb-6 border-b border-gray-200">
                            <section className="flex justify-between items-start mb-2">
                                <h3 className="font-medium">STX</h3>
                                <span className="font-thin italic text-sm">august 2016 - juli 2019</span>
                            </section>
                            <p className="font-thin mb-2">Favrskov Gymnasium</p>
                            <p className="font-thin text-sm">Matematik A, Biologi B, Idræt B</p>
                        </section>

                        <section className="mb-6 pb-6 border-b border-gray-200">
                            <section className="flex justify-between items-start mb-2">
                                <h3 className="font-medium">Efterskole</h3>
                                <span className="font-thin italic text-sm">august 2015 - juli 2016</span>
                            </section>
                            <p className="font-thin mb-2">Vivild Gymnastik- og Idrætsefterskole</p>
                            <p className="font-thin text-sm">10. klasse</p>
                        </section>

                        <section className="mb-6 pb-6 border-b border-gray-200">
                            <section className="flex justify-between items-start mb-2">
                                <h3 className="font-medium">Folkeskole</h3>
                                <span className="font-thin italic text-sm">august 2005 - juli 2015</span>
                            </section>
                            <p className="font-thin mb-2">Haldum-Hinnerup Skolen</p>
                            <p className="font-thin text-sm">0. - 9. klasse </p>
                        </section>
                    </section>
                )}

                {activeTab === 'projekter' && (
                    <section>
                        <h2 className="font-playfair font-thin text-2xl mb-4">Udvalgte Projekter</h2>
                        
                        <section className="mb-6 pb-6 border-b border-gray-200">
                            <section className="flex justify-between items-start mb-2">
                                <h3 className="font-medium">Trust Center - Hovedopgave</h3>
                                <span className="font-thin italic text-sm">januar 2026</span>
                            </section>
                            <p className="font-thin text-sm mb-2">
                                Udviklet i samarbejde med .legal. En løsning der håndterer compliance-dokumentation gennem komponentbaseret arkitektur, React Router og API-simulering.
                            </p>
                            <section className="flex gap-2">
                                <a href="https://github.com/louisemogensenn/hovedopgave" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
                                    GitHub →
                                </a>
                                <a href="https://trustcenter.louisemogensen.dk" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
                                    Live site →
                                </a>
                            </section>
                        </section>

                        <section className="mb-6 pb-6 border-b border-gray-200">
                            <section className="flex justify-between items-start mb-2">
                                <h3 className="font-medium">Frontend Specialisering</h3>
                                <span className="font-thin italic text-sm">maj 2025</span>
                            </section>
                            <p className="font-thin text-sm">
                                Fordybelse i avancerede React koncepter og moderne frontend-udvikling.
                            </p>
                        </section>

                        <section>
                            <section className="flex justify-between items-start mb-2">
                                <h3 className="font-medium">Bæredygtigt Webdesign</h3>
                                <span className="font-thin italic text-sm">april 2025</span>
                            </section>
                            <p className="font-thin text-sm">
                                Fokus på performance-optimering og miljøvenligt webdesign.
                            </p>
                        </section>
                    </section>
                )}
            </section>

            {/* Call to action */}
            <section className="text-center py-8 border-t border-gray-300">
                <h2 className="font-playfair font-thin text-2xl mb-4">Interesseret?</h2>
                <p className="font-thin mb-6">
                    Jeg vil rigtig gerne fortælle dig mere om, hvordan jeg kan bidrage med mine kompetencer hos jer!
                </p>
                <a 
                    href="mailto:louisemogensen@outlook.dk" 
                    className="inline-flex items-center justify-center w-40 h-10 text-base transition-all duration-300 rounded-[50px] bg-black text-white hover:bg-gray-800"
                >
                    Kontakt mig
                </a>
            </section>
        </section>
    );
}