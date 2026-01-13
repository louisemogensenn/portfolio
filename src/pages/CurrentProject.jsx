import questionmark from "../assets/questionmark.jpg";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Button from "../components/CallToAction";

export default function CurrentProject() {
    return (
        <section className="w-[90%] mx-auto max-w-2xl">
            <img src={questionmark} alt="Nuværende projekt" className="w-full" />
            <Heading text="Nuværende projekt" />
            <Paragraph text="Har du lyst til at høre mere om, hvad jeg arbejder på lige nu? Hold øje med min GitHub eller giv mig et kald. Jeg vil rigtig gerne fortælle dig om det." />
            <section className="flex justify-center gap-10.5 mt-11.5">
                <Button text="Se GitHub" to="https://github.com/louisemogensenn?tab=repositories" filled={true} />
                <Button text="Kontakt" to="/contact" filled={false} />
            </section>
        </section>
    )
}