import louiseMogensen from '../assets/louiseMogensen.jpeg';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

export default function Frontpage() {
    return (
        <section className="w-[90%] mx-auto">
        <img src={louiseMogensen} alt="Billede af Louise Mogensen" />
        <Heading text="Hvem er jeg?" />
        <Paragraph text="Jeg hedder Louise, jeg er 26 år gammel og er uddannet multimediedesigner med flair for frontend-udvikling. I forbindelse med mit studie har jeg fået en stor nysgerrighed for udvikling, der skaber en reel værdi for brugerne."/>
        <Paragraph text="Jeg har opnået erfaring med HTML, CSS og JavaScript, herunder biblioteket React som er mit nuværende foretrukne framework at arbejde i." />
        <Paragraph text="Jeg nyder at udfordre mig selv og ønsker at opnå kendskab til flere frameworks, så min arbejdspalette bliver endnu bredere. Jeg har en stor lyst til at udvide mine kompetencer, så jeg kan blive endnu mere dygtig. Jeg kan byde ind med højt engagement og et stort bidrag i projekter."/>
        <Paragraph text="Har du lyst til at høre mere om, hvordan jeg kan byde positivt ind hos jer må du endelig kontakte mig!"/>
        </section>
    );
    }