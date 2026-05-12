export default function Card({ children, className = "", title, icon: Icon }) {
  return (
    <div className={`group relative p-8 rounded-2xl border border-border bg-card hover:bg-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 ${className}`}>
      {title && (
        <div className="flex items-center gap-3 mb-6">
          {Icon && (
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Icon size={24} />
            </div>
          )}
          <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
        </div>
      )}
      <div className="text-muted-foreground leading-relaxed text-lg">
        {children}
      </div>
    </div>
  );
}
