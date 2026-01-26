import scale from "../assets/scale.jpg";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Button from "../components/CallToAction";

export default function SustainableWebdesign() {
    return(
        <section className="w-[90%] mx-auto max-w-2xl">
            <img src={scale} alt="Bæredygtigt Webdesign" className="w-full"/>
            <Heading text="Bæredygtigt Webdesign"/>
            <Paragraph text="Projektet er udarbejdet med udgangspunkt i energieffektive valg. Bæredygtigt webdesign addresserer den høje CO2-udledning, der er i forbindelse med hosting og brug af hjemmesider. Løsningen er altså udarbejdet efter Tom Greenwood's bog 'Sustainable Webdesign', hvor hvert valg - hvad end det er ux, design eller programmering, er truffet efter hvad der er mindst CO2-venligt. En spændende opgave, hvor alle processer og overvejeler er taget med udgangspunkt i dette."/>
            <section className="flex justify-center gap-10.5 mt-11.5">
                <Button text="Se GitHub" to="https://github.com/louisemogensenn/scale" filled={true} />
                <Button text="Se website" to="https://scale.louisemogensen.dk" filled={false} />
            </section>

            <br />

        <section className="text-center">
            <Heading text="Kommunikation"/>
            <p className="font-helvetica font-thin mb-8">Selvom løsningen inderholder tydelig visuel kommunikation er der også tænkt i den direkte kommunikation i løsningen. Her er der arbejdet med at undgå Green Washing og samtidig oplyse brugeren om de muligheder, bæredygtigt webdesign giver.</p>

            <Heading text="Energieffektivt design"/>
            <p className="font-helvetica font-thin mb-8">Ved at gøre brugeren opmærksom på, at light mode benytter langt mere energi en dark mode, tvinges denne til at reflektere over, hvilket mode, der ønskes. Designet er opbygget er at kunne minimere brugen af energi, og giver brugeren muligheden for at tage stilling og engagere sig.</p>

            <Heading text="Energieffektiv kode"/>
            <p className="font-helvetica font-thin mb-8">Ved at benytte React, der genbruger komponenter og ikke genindlæser alt indhold på siderne, mindskes energien, der bruges på at klikke rundt på sitet. Det, at tænke energieffektivitet ind i programmering er noget jeg vil tage med mig videre i mit fremtidige arbejdsliv.</p>
        
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