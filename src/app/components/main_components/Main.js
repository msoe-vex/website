import About from "./About";
import ContactUs from "./ContactUs";
import Programs from "./Programs";
import VexU from "./VexU";
import Innovation from "./Innovation";

export default function Main() {
    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <About/>
                <div className="px-4">
                    <hr className="border-border opacity-50" />
                </div>
                <Programs/>
                <div className="px-4">
                    <hr className="border-border opacity-50" />
                </div>
                <Innovation/>
                <div className="px-4">
                    <hr className="border-border opacity-50" />
                </div>
                <VexU/>
                <div className="px-4">
                    <hr className="border-border opacity-50" />
                </div>
                <ContactUs/>
            </div>
        </main>
    );
}