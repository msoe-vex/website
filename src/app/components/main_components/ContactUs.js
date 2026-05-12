import Card from "../Card";
import { Mail, Camera, CodeXml, Globe, Send } from "lucide-react";

export default function ContactUs() {
    return (
        <section id="contact-us" className="py-24 scroll-mt-20">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-muted-foreground text-lg">
                        We're always looking for new partners and talented members.
                    </p>
                </div>

                <Card className="text-center">
                    <div className="flex justify-center mb-8">
                        <div className="p-4 rounded-full bg-primary/10 text-primary">
                            <Send size={32} />
                        </div>
                    </div>
                    
                    <p className="text-lg mb-8">
                        Whether you're an MSOE student looking to join us, or a company interested in sponsorship, we'd love to hear from you.
                    </p>
                    
                    <a 
                        href="mailto:msoerobotics@gmail.com" 
                        className="inline-flex items-center gap-2 text-2xl font-bold text-primary hover:underline transition-all"
                    >
                        <Mail size={24} />
                        msoerobotics@gmail.com
                    </a>

                    <div className="mt-12 pt-12 border-t border-border flex justify-center gap-6">
                        <SocialButton href="https://www.instagram.com/raider.robotics/" icon="bi-instagram" label="Instagram" />
                        <SocialButton href="https://github.com/msoe-vex" icon="bi-github" label="GitHub" />
                        <SocialButton href="https://www.msoevex.com/" icon={Globe} label="Website" />
                    </div>
                </Card>
            </div>
        </section>
    );
}

function SocialButton({ href, icon: Icon, label }) {
    return (
        <a 
            href={href} 
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110 bg-background flex items-center justify-center min-w-[56px] min-h-[56px]"
        >
            {typeof Icon === 'string' ? (
                <i className={`bi ${Icon} text-2xl`}></i>
            ) : (
                <Icon size={24} /> 
            )}
        </a>
    )
}