import Card from "../Card";
import { BookOpen, Sparkles, ExternalLink } from "lucide-react";
import Image from "next/image";

const ENGenLogoIcon = ({ size = 24 }) => (
    <Image 
        src="/engen.svg" 
        alt="Engineering Notebook Generator Logo" 
        width={size} 
        height={size} 
        className="object-contain" 
    />
);

export default function Innovation() {
    return (
        <section id="innovation" className="py-24 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                            <Sparkles size={16} />
                            <span>Featured Project</span>
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <div className="relative w-16 h-16 shrink-0 rounded-2xl overflow-hidden shadow-lg border border-border bg-card flex items-center justify-center p-2.5 transition-transform hover:scale-105 duration-300">
                                <Image
                                    src="/engen.svg"
                                    alt="Engineering Notebook Generator Logo"
                                    width={48}
                                    height={48}
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <div className="space-y-0.5">
                                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                                    Engineering Notebook Generator
                                </h2>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                                    Digital Documentation Platform
                                </p>
                            </div>
                        </div>

                        <p className="text-xl text-muted-foreground leading-relaxed">
                            We've pioneered a professional-grade, open-source digital notebook platform specifically for VEX robotics teams. Our editor streamlines documentation with automated LaTeX exports and collaborative tools.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <a
                                href="https://notebook.msoevex.com/about"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-rose-600 text-primary-foreground rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                            >
                                Try the Generator
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-xl">
                        <Card title="Notebook Features" icon={ENGenLogoIcon}>
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-muted/50 border border-border hover:bg-muted/70 transition-colors duration-200">
                                    <h4 className="font-bold text-primary mb-1">LaTeX Powered</h4>
                                    <p className="text-sm text-muted-foreground">Professional typesetting for high-quality engineering documentation.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-muted/50 border border-border hover:bg-muted/70 transition-colors duration-200">
                                    <h4 className="font-bold text-primary mb-1">Cloud Sync</h4>
                                    <p className="text-sm text-muted-foreground">Collaborate in real-time with your entire team from anywhere.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-muted/50 border border-border hover:bg-muted/70 transition-colors duration-200">
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

