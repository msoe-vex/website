import PROF_DEV from "./../../assets/programs/Professional_Development.png"
import OUTREACH from "./../../assets/programs/Community_Outreach.png"
import COMPETITIVE from "./../../assets/programs/Competitive_Robotics.png"
import Program from "./Program";

export default function Programs() {
    return (
        <div id="programs" className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
            <Program title="Professional Development" img={PROF_DEV} about="MSOE Robotics is dedicated to providing students the resources and opportunities they need to be successful in their future. From providing opportunities to meet peers to networking with business leaders in the community, we allow for our members to explore many possible career paths for their futures, and provide them with the resources necessary to make it a reality."/>
            <Program title="Community Outreach" img={OUTREACH} about="MSOE Robotics seeks to grow local elementary through highschool STEM programs and forge pathways and opportunities for the next generation of engineers and innovators. Using our skills and resources, the MSOE Robotics organization seeks to help lower-income schools with few STEM opportunities through the sponsorship of competitive robotics teams through mentoring, providing resources and connections to."/>
            <Program title="Competitive Robotics" img={COMPETITIVE} about="MSOE Robotics features a number of competitive robotics programs that offer students experiences and opportunities they won’t find in the classroom. From hands on technical skills ranging from assembly and fabrication to developing embedded software and architecting artificial intelligence systems. Students can expect to foster these and other lifelong resume-building skills as well as relating our educational content to a broader context."/>
        </div>
    );
}