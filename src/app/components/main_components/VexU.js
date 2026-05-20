import Image from "next/image";
import TEAM_PHOTO from "../../assets/images/team_photo_at_worlds.jpg"
import Card from "../Card";
export default function VexU() {
    return (
        <section id="vex-u" className="py-24 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4">
                <Card className="overflow-hidden p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Raider Robotics</h2>
                            <div className="h-1.5 w-16 bg-primary rounded-full mb-8"></div>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                                One of our project teams is the Raider Robotics VEX U team, providing students a way to put their skills to the test with competitive robotics. In VEX U, students work with the team to design, develop, test, and compete with multiple robots against other collegiate teams. 
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                This team works year-long to design and program two collaborative robots to compete in a yearly game. These robots are required to both operate completely autonomously, as well as operating with human drivers during a competition match.
                            </p>
                        </div>
                        <div className="relative min-h-[400px] bg-slate-900 overflow-hidden">
                            <Image 
                                src={TEAM_PHOTO}  
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105" 
                                alt="Raider Robotics Team Photo"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-card/20 to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}