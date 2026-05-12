
export const MIN_SPONSOR_WIDTH = 0;

export default function Sponsor({img, alt, link, additional_style=""}) {
    return (
        <div
            className={`max-h-16 h-16 flex justify-center items-center mx-8 flex-shrink-0`}
        >
            <a href={link} className="hover:opacity-80 transition-opacity flex items-center h-full">
                <div className={additional_style}>
                    <img 
                        src={img.src} 
                        alt={alt}
                        className="h-16 w-auto object-contain p-1"
                    />
                </div>
            </a>
        </div>
    );
}