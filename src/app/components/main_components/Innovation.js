import Card from "../Card";
import { BookOpen, Sparkles, ExternalLink } from "lucide-react";

export default function Innovation() {
    return (
        <section id="innovation" className="py-24 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                            <Sparkles size={16} />
                            <span>New Project</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                            Digital Engineering Notebook
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            We've pioneered a professional-grade, open-source digital notebook platform specifically for VEX robotics teams. Our editor streamlines documentation with automated LaTeX exports and collaborative tools.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="https://notebook.msoevex.com/about"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-xl">
                        <Card icon={BookOpen}>
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                                    <h4 className="font-bold text-primary mb-1">LaTeX Powered</h4>
                                    <p className="text-sm text-muted-foreground">Professional typesetting for high-quality engineering documentation.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                                    <h4 className="font-bold text-primary mb-1">Cloud Sync</h4>
                                    <p className="text-sm text-muted-foreground">Collaborate in real-time with your entire team from anywhere.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                                    <h4 className="font-bold text-primary mb-1">Open Source</h4>
                                    <p className="text-sm text-muted-foreground">Built by students, for students. Completely free to use.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
