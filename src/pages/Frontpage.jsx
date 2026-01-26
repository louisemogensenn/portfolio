import louiseMogensen from '../assets/louiseMogensen.jpeg';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Button from '../components/CallToAction';

export default function Frontpage() {
    return (
        <section className="w-[90%] mx-auto max-w-2xl">
        <img src={louiseMogensen} alt="Billede af Louise Mogensen" className="w-full" />
        <Heading text="Hvem er jeg?" />
        <Paragraph text="Jeg hedder Louise, jeg er 26 år gammel og er uddannet multimediedesigner. Jeg har en stor interesse i at forme og formidle brugerbehov til konkrete løsningsforslag, der løser problematikker og skaber værdi. "/>
        <Paragraph text="Min styrke ligger i at kombinere forskellige discipliner: Jeg bruger research og brugerdefinering til at forstå de reelle behov, designer intuitive og æstetiske løsninger ud fra solide designprincipper, og implementerer løsningen gennem kode i både HTML, CSS, JavaScript og React."/>
        <Paragraph text="Jeg nyder at udfordre mig selv og lære nyt. Jeg er ikke bange for at stille spørgsmål og dykke ned i nye emner for at dygtiggøre mig."/>
        <Paragraph text="Har du lyst til at høre mere om, hvordan jeg kan byde positivt ind hos jer må du endelig kontakte mig!"/>

        <section className="flex justify-center gap-10.5 mt-11.5">
            <Button text="Se projekter" to="/projects" filled={true} />
            <Button text="Kontakt" to="/contact" filled={false} />
        </section>

        </section>
    );
}