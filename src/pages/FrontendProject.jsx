import iphoneImage from '../assets/gyldendal.jpg';
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Button from "../components/CallToAction";

export default function FrontendProject() {
    return(
        <section className="w-[90%] mx-auto max-w-2xl">
            <img src={iphoneImage} alt="Trust Center Projekt" className="w-full"/>
            <Heading text="Trust Center"/>
            <Paragraph text="I dette projekt har jeg fokuseret på at udvikel en applikation, der skal understøtte elevers læring i komplekse fag såsom filosofi. Her er Hulelignelsen brugt som eksempel til at opsætte opgaver. Løsningen er frontend-fokuseret og tager derfor udgangspunkt i et eksisterende design. Jeg har udviklet en login-baseret løsning, hvor elever kan lytte til teksten, svare på opgaver og optjene point. Disse point kan eleverne benytte i en shop til at designe deres app. Når eleven har besvaret en opgave kan underviseren læse hver elevs besvarelse og på denne vis holde overblikket over, om eleverne forstår emnet."/>
            <section className="flex justify-center gap-10.5 mt-11.5">
                <Button text="Se GitHub" to="https://github.com/louisemogensenn/specialisering" filled={true} />
            </section>

        <section className="text-center">
        <Heading text="Firebase til loginstyring"/>
        <p className="font-helvetica font-thin mb-8">Jeg opbyggede løsningen efter login-styring til både undervisere og elever. Loginstyringen er opbygget med Firebase og har givet mig erfaring med og forståelse for opbygning herefter.</p>

        <Heading text="Styling med Tailwind CSS"/>
        <p className="font-helvetica font-thin mb-8">Jeg har afprøvet Tailwind CSS som stylingværktøjj i projektet. Jeg har her opbygget mine kompetencer inden for denne stylingmetode og de styrker, Tailwind har. Styling med Tailwind er selvlært og sker på baggrund af en interesse for at lære dets mange muligheder.</p>

        <Heading text="sessionStorage"/>
        <p className="font-helvetica font-thin mb-8">Projektet indebærer arbejde med lagering af indhold. Dette sker blandt andet, når en elev ‘afleverer’ en opgave i appen. Deres besvarelser gemmes og vises for underviseren, så denne kan følge med i besvarede opgaver og dertilhørende svar.</p>
        </section>

        <br />

        <Heading text="Har du lyst til at høre mere?"/>
        <p className="font-helvetica font-thin mb-8">Jeg vil rigtig gerne fortælle dig meget mere om mit projekt og hvordan jeg kan bidrage med netop disse kompetencer hos jer! </p>


        <div className="flex justify-center">
            <Button text="Kontakt mig" to="/contact" filled={false} />
        </div>
        </section>
    )
}