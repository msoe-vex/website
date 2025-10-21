export default function FancyDiv({ extra_classes, children, id }) {
        const content = <div className={`p-4 text-center text-xl rounded-lg border-4 border-zinc-400 bg-zinc-800 my-8 ${extra_classes}`}>
            {children}
        </div>;


    return id != null ? <div id={id}>{content}</div> : content;
}