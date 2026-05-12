import PROF_DEV from "./../../assets/programs/Professional_Development.png"
import OUTREACH from "./../../assets/programs/Community_Outreach.png"
import COMPETITIVE from "./../../assets/programs/Competitive_Robotics.png"
import Program from "./Program";

export default function Programs() {
    return (
        <section id="programs" className="py-24 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Our Focus Areas</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic">
                        Empowering students and the community through dedicated robotics initiatives.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Program 
                        title="Professional Development" 
                        img={PROF_DEV} 
                        about="MSOE Robotics is dedicated to providing students the resources and opportunities they need to be successful in their future. From providing opportunities to meet peers to networking with business leaders in the community, we allow for our members to explore many possible career paths for their futures."
                    />
                    <Program 
                        title="Community Outreach" 
                        img={OUTREACH} 
                        about="MSOE Robotics seeks to grow local elementary through highschool STEM programs and forge pathways and opportunities for the next generation of engineers and innovators. We help lower-income schools with few STEM opportunities through mentorship and resource sharing."
                    />
                    <Program 
                        title="Competitive Robotics" 
                        img={COMPETITIVE} 
                        about="MSOE Robotics features a number of competitive robotics programs that offer students experiences and opportunities they won’t find in the classroom. From hands on technical skills to developing embedded software and architecting artificial intelligence systems."
                    />
                </div>
            </div>
        </section>
    );
}