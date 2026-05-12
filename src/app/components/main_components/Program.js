import Image from "next/image";

export default function Program({ title, img, about }) {
  return (
    <div className="group relative flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <Image
          src={img}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
      </div>
      
      <div className="flex-1 p-6 flex flex-col">
        <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="h-1 w-12 bg-primary/30 rounded-full mb-6 group-hover:w-20 transition-all duration-500"></div>
        <p className="text-muted-foreground leading-relaxed flex-1">
          {about}
        </p>
      </div>
    </div>
  );
}