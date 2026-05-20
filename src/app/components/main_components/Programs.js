import ROBOT_FIELD from "./../../assets/images/robot_on_competition_field.jpg"
import TEAM_INTERVIEW from "./../../assets/images/team_in_compeition_booth_fun_interview.jpg"
import GENERAL_MEETING from "./../../assets/images/general_meeting_in_stem_center.jpg"
import TEAM_WORKING from "./../../assets/images/team_working_in_competition_booth.jpg"
import GREATNESS_AWAITS from "./../../assets/images/greatness_awaits.jpg"
import WORLDS_STAGE from "./../../assets/images/worlds_stage.jpg"
import VEX_ROBOTS from "./../../assets/images/vex_robots_at_worlds.jpg"
import Program from "./Program";

export default function Programs() {
    const profDevImages = [ROBOT_FIELD, TEAM_INTERVIEW];
    const outreachImages = [GENERAL_MEETING, TEAM_WORKING];
    const competitiveImages = [GREATNESS_AWAITS, WORLDS_STAGE, VEX_ROBOTS];

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
                        img={profDevImages} 
                        about="MSOE Robotics is dedicated to providing students the resources and opportunities they need to be successful in their future. From providing opportunities to meet peers to networking with business leaders in the community, we allow for our members to explore many possible career paths for their futures."
                    />
                    <Program 
                        title="Community Outreach" 
                        img={outreachImages} 
                        about="MSOE Robotics seeks to grow local elementary through highschool STEM programs and forge pathways and opportunities for the next generation of engineers and innovators. We help lower-income schools with few STEM opportunities through mentorship and resource sharing."
                    />
                    <Program 
                        title="Competitive Robotics" 
                        img={competitiveImages} 
                        about="MSOE Robotics features a number of competitive robotics programs that offer students experiences and opportunities they won’t find in the classroom. From hands on technical skills to developing embedded software and architecting artificial intelligence systems."
                    />
                </div>
            </div>
        </section>
    );
}