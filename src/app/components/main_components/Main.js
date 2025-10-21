import About from "./About";
import ContactUs from "./ContactUs";
import Programs from "./Programs";
import VexU from "./VexU";

export default function Main() {
    return (
        <main className="flex align-center justify-center p-8 bg-zinc-900">
            <div className="w-[80%] mx-[auto]">
                <About/>
                <Programs/>
                <VexU/>
                <ContactUs/>
            </div>
        </main>
    );
}