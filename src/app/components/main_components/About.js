import Card from "../Card";
import { Info } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 scroll-mt-20">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground tracking-tight">
                        Our Mission
                    </h2>
                    <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
                </div>
                
                <Card icon={Info}>
                    <p className="text-center">
                        MSOE Robotics is a student run collegiate robotics team with three main goals: 
                        <span className="text-foreground font-medium"> community outreach</span> through support of local FIRST robotics programs, 
                        <span className="text-foreground font-medium"> professional development</span> of students through connections with local businesses and experts in STEM industries, and 
                        <span className="text-foreground font-medium"> competition</span> in college level competitive robotics across multiple offered platforms.
                    </p>
                </Card>
            </div>
        </section>
    );
}