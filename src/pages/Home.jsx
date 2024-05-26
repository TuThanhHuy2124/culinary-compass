import { Button } from "@material-tailwind/react"

export default function Home () {

    return (
        <div className="min-h-screen flex flex-col items-center justify-start w-screen max-w-full z-0">
            <div id="bg-container" className="relative h-max bg-contain bg-no-repeat w-screen max-w-full">
                <img id="bg" src="../../backgrounds/home_bg.svg" className="max-w-full w-screen z-[-1]"></img>
                <div className="box-border w-full absolute top-1/2 -translate-y-1/2 flex items-center justify-around">
                    <div id="greeting" className=""> 
                        <h1 className="text-6xl text-white mb-2 font-bold">Welcome to CulinaryCompass!</h1>
                        <h2 className="text-2xl text-white font-light">Start planning your meals at UCI and beyond!</h2>
                    </div>
                    <img src="../../logos/anteater.png" className="h-auto w-72"></img>
                </div>
            </div>
            <Button onClick={()=>{
                if(localStorage.getItem("username") !== null) {
                    window.location.href += "month"
                }}}
                className="!bg-yellow-400 !text-blue-800 -translate-y-3/4 !h-[10vh] mt-2">
                <h1 className="text-[3vw] p-2">Get Started</h1>
            </Button>
            <p className="my-2 text-6xl font-medium w-full justify-start pl-8">Your navigator to a healthier lifestyle</p>
            <div className="flex flex-col">
                
                <div id="row-1" className="flex w-screen p-2 content-start">
                    <div className="flex flex-col justify-around content-between w-1/3 pl-8">
                        <p className="text-4xl font-thin w-full mr-2">Add your meals to our calendar, and track your nutrition.</p>
                        <p className="text-3xl font-thin w-full mr-2">Realtime dietary feedback? Let us show you the way...</p>
                    </div>
                    <div className="w-2/3 border-black rounded-xl border-2 flex justify-center items-center"><div className="flex w-11/12 items-center  justify-center border-black border-2 rounded-lg"><img className="rounded-lg justify-center max-w-full max-h-full"src="public/logos/input.png"></img></div></div>
                </div>
            </div>
            <img className="w-full" src="public/backgrounds/Group 56.png"/>
            <p className="my-2 text-6xl font-medium w-full text-right p-8">Achieve your goals consistently</p>
            <div className="flex w-screen pl-8 mb-8">
            <div className="w-2/3 border-black rounded-xl border-2 flex justify-center items-center"><div className="flex w-11/12 items-center  justify-center border-black border-2 rounded-lg"><img className="rounded-lg justify-center max-w-full max-h-full"src="public/backgrounds/calendar.png"></img></div></div>
            <div className="flex flex-col justify-center content-between w-1/3 pr-8">
                        <p className="text-4xl font-thin w-full mr-2 text-right">Plan your month, <br/> day-by-day.</p>
                        <div className="my-4 flex justify-center items-center"><img className="self-end max-h-48 " src="public/logos/petah.png"></img></div>
                        <p className="text-3xl font-thin w-full mr-2 text-right">Let us guide you closer towards your dreams.</p>
                    </div>
            </div>
        </div>
    )
}