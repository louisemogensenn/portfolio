import scale from "../assets/scale.jpg";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Button from "../components/CallToAction";

export default function SustainableWebdesign() {
    return(
        <section className="w-[90%] mx-auto max-w-2xl">
            <img src={scale} alt="Bæredygtigt Webdesign" className="w-full"/>
            <Heading text="Bæredygtigt Webdesign"/>
            <Paragraph text="Denne side er under ombygning."/>
            <section className="flex justify-center gap-10.5 mt-11.5">
                <Button text="Se GitHub" to="https://github.com/louisemogensenn/scale" filled={true} />
                <Button text="Se website" to="https://scale.louisemogensen.dk" filled={false} />
            </section>

            <br />

        <section className="text-center">
        <Heading text="Energieffektiv kode"/>
        <p className="font-helvetica font-thin mb-8">Ved at benytte React, der genbruger komponenter og ikke genindlæser alt indhold på siderne, mindskes energien, der bruges på at klikke rundt på sitet. Det, at tænke energieffektivitet ind i programmering er noget jeg vil tage med mig videre i mit fremtidige arbejdsliv.</p>

        <Heading text="Energieffektivt design"/>
        <p className="font-helvetica font-thin mb-8">Ved at gøre brugeren opmærksom på, at light mode benytter langt mere energi en dark mode, tvinges denne til at reflektere over, hvilket mode, der ønskes. Designet er opbygget er at kunne minimere brugen af energi, og giver brugeren muligheden for at tage stilling og engagere sig.</p>

        <Heading text="Kommunikation"/>
        <p className="font-helvetica font-thin mb-8">Selvom løsningen inderholder tydelig visuel kommunikation er der også tænkt i den direkte kommunikation i løsningen. Her er der arbejdet med at undgå Green Washing og samtidig oplyse brugeren om de muligheder, bæredygtigt webdesign giver.</p>
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