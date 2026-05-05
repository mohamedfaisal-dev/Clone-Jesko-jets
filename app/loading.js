export default function Loading() {
    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black text-white">
            <div className="flex flex-col items-center gap-4">
                <div className="h-16 w-16 animate-spin rounded-full border-4 border-t-transparent border-white"></div>
                <h2 className="animate-pulse font-unbounded text-xl tracking-widest">
                    ALL SHADE JETS
                </h2>
            </div>
        </div>
    );
}
