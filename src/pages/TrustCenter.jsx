import TrustCenterImage from "../assets/tc.jpg";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Button from "../components/CallToAction";
import { Link } from "react-router-dom";

export default function TrustCenter() {
    return(
        <section className="w-[90%] mx-auto">
            <img src={TrustCenterImage} alt="Trust Center Projekt" className="mx-auto"/>
            <Heading text="Trust Center"/>
            <Paragraph text="Løsningen er udviklet i samarbejdet med .legal, hvor jeg i forbindelse med mit studie var i praktik. "/>
            <Paragraph text="Et Trust Center løser den tunge manuelle håndtering  af compliance-dokumentation, og fungerer som central for opbevaring heraf."/>
            <Paragraph text="Processen tager udgangspunkt i en grundig brugerresearch for at få forståelse for området og det egentlige problem. Løsningen er designet efter .legals eksisterende visuelle identitet og er afslutningsvist kodet i React med fokus på komponentbaseret opsætning."/>
            <Paragraph text="Brugen af React giver brugerne det konstante overblik, hvor logo og navigation er opsat i Layout-komponenten. Derfor skifter indholdet i hver kategori som det eneste."/>
            <Paragraph text="Jeg er i udviklingen blevet meget klogere på React og de muligheder, den komponentbaserede tilgang giver. Det er netop denne årsag, der gør, at React er mit foretrukne framework at arbejde i."/>
            <section className="flex justify-center gap-10.5 mt-11.5">
                <Button text="Se GitHub" to="https://github.com/louisemogensenn/hovedopgave" filled={true} />
                <Button text="Se website" to="https://trustcenter.louisemogensen.dk/om" filled={false} />
            </section>

        <section className="text-center">
        <Heading text="Komponentbaseret arkitektur"/>
        <p className="font-helvetica font-thin mb-8">Jeg opbyggede løsningen med genbrugelige komponenter, der modtager dynamiske props. Samme komponenter bruges på tværs af alle kategorier, hvilket sikrer konsistent præsentation, høj brugervenlighed og nem vedligeholdelse.</p>

        <Heading text="React Router Dom"/>
        <p className="font-helvetica font-thin mb-8">Implementerede routing uden sideopdateringer. Layout-komponenten holder navigation og logo statisk, mens kun indholdet i Outlet-komponenten skifter. Det giver brugeren følelsen af konstant overblik.</p>

        <Heading text="API-Simulering"/>
        <p className="font-helvetica font-thin mb-8">Hele løsningen er bygget til at fungere for forskellige virksomheder uden kodeændringer. Ved at udskifte JSON-filen og tilslutte en rigtig API, tilpasser løsningen sig automatisk til nye dokumenter, kategorier og indhold. Komponentstrukturen sikrer, at designet holder, uanset om der er 10 eller 100 dokumenter.</p>
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