"use client"

export default function Banner() {
    return (
        <div className="absolute sticky top-0 flex justify-center align-center border-b-2 bg-zinc-900 p-4 border-zinc-500 z-1">
            <div className="grid grid-cols-2 sm:grid-cols-5 w-full">
                <BannerLink target="header">HOME</BannerLink>
                <BannerLink target="about">ABOUT</BannerLink>
                <BannerLink target="programs">PROGRAMS</BannerLink>
                <BannerLink target="vex-u">VEXU</BannerLink>
                <BannerLink target="contact-us" extra_classes="col-span-2 sm:col-span-1">CONTACT</BannerLink>
            </div>
        </div>
    );
}

function BannerLink({ target, children, extra_classes="" }) {
    const on_click = () => {
        document.getElementById(target).scrollIntoView({
            behavior: 'smooth',
        });
    }
    
    return (
        <div className="hover:cursor-pointer" onClick={on_click}>
            <p className={`w-full text-center text-lg ${extra_classes}`}>
                <strong>{children}</strong>
            </p>
        </div>
    );
}