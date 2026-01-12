export default function UnderConstruction() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            <h1 className="font-playfair text-[60px] text-center mb-6">
                Under ombygning
            </h1>
            <p className="font-helvetica text-lg text-center max-w-md">
                Siden er i øjeblikket under opdatering. 
                Kom snart tilbage for at se det nye design.
            </p>
            
            {/* Optional: Tilføj animation */}
            <div className="mt-12 flex gap-2">
                <div className="w-3 h-3 bg-black rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-3 h-3 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
        </div>
    );
}