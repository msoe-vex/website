import FancyDiv from "../styled_components/FancyDiv";

export default function About() {
    return (
        <div id="about" className="my-8">
            <h2 className="w-full text-center text-4xl"><strong>About MSOE Robotics</strong></h2>
            <FancyDiv extra_classes="w-full lg:w-[80%] mx-[auto]">
                <p>
                    <em>
                        MSOE Robotics is a student run collegiate robotics team with three main goals: community outreach through support of local FIRST robotics programs, professional development of students through connections with local businesses and experts in STEM industries, and competition in college level competitive robotics across multiple offered platforms.
                    </em>
                </p>
            </FancyDiv>
        </div>
    );
}