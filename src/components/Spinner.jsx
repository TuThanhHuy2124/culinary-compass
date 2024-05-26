export default function Spinner () {
    return(
    <>
        <div className="min-h-[var(--min-display)]"></div>
        <div className="fixed bg-blue-gray-100 bg-opacity-50 w-screen h-screen top-0 z-[99999] flex items-center justify-center">
            <div id="spinner" className="w-[20vw] h-[20vw] border-[2vw] border-t-blue rounded-full animate-spin"></div>
        </div>
    </>)
}