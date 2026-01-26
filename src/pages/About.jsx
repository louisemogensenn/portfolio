import Paragraph from "../components/Paragraph";
import Heading from "../components/Heading";
import Button from "../components/CallToAction";
import louiseMogensen from "../assets/louiseMogensen2.jpeg";
import coffee from "../assets/coffee.jpeg";

export default function About() {
    return(
        <section className="w-[90%] mx-auto max-w-2xl">
            <img src={louiseMogensen} alt="Trust Center Projekt" className="w-full"/>
            <Heading text="Hvem er jeg?"/>
            <Paragraph text="Jeg er 26 år gammel, jeg er oprindeligt fra Hinnerup (ca. 20km nord for Aarhus) og er altså østjyde helt ind til benet. Jeg er bosat i Aarhus C med min kæreste, og her har vi boet i lidt over fem år. Jeg er ansat i DK Company i Magasin, hvor jeg et par timer om ugen sælger tøj (og så køber jeg også selv en del, ups). Det har været en afveksling fra studiet, hvilket jeg har sat stor pris på."/>

            <section className="text-center gap-10.5 mt-11.5">
                <Button text="Se mit CV" to="/cv" filled={true} />
                <br /><br />
                <p className="italic font-light">Jeg har gjort det kort og godt i mit CV.</p>
            </section>

            <br /><br /><br />

            <Heading text="Mine interesser"/>
            <Paragraph text="Jeg har en hel samling af bøger, og jeg elsker at køb nye og brugte. Hella Joof har engang sagt:"/>
            <section className="text-center italic gap-10.5 mt-11.5">
                <Heading text="“For det første, mens man læser, så er man i gang med en tilegnelse og en udvidelse - og man laver heller ikke ulykker imens“"/>
            </section>
            <br />
            <Paragraph text="Jeg vil altid gerne tilegne mig ny viden - hvad end det er på arbejdsmarkedet eller ved at læse. Og mens jeg læser skal jeg gerne helst have en kop kaffe. Jeg elsker at lave en kop kaffe med en latte art, der er bedre end den sidste."/>

            <img src={coffee} alt="Trust Center Projekt" className="w-full"/>

        <Heading text="Skal vi tage en kop kaffe?"/>
        <p className="font-helvetica font-thin mb-8">Jeg vil gerne vise dig, hvordan du kan lave den bedste latte art. Vi kan jo samtidig snakke om, hvordan jeg kan skabe værdi hos jer. </p>


        <div className="flex justify-center">
            <Button text="Kontakt mig" to="/contact" filled={false} />
        </div>
        </section>
    )
}