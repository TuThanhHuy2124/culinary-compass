import { Button } from "@material-tailwind/react"
import { CustomInput } from "../components/CustomInput"

export default function Home () {
    const getStartedEvent = () => {
        localStorage.setItem("username", document.getElementById("uid").value)
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-start w-screen max-w-full z-0">
            <div id="bg-container" className="relative h-max bg-contain bg-no-repeat w-screen max-w-full">
                <img id="bg" src="../../home_bg.svg" className="max-w-full w-screen z-[-1]"></img>
                <div className="box-border w-full absolute top-1/2 -translate-y-1/2 flex items-center justify-around">
                    <div id="greeting" className=""> 
                        <h1 className="text-5xl text-white mb-2">Welcome to CulinaryCompass!</h1>
                        <h2 className="text-2xl text-white">Start planning your meals at UCI and beyond!</h2>
                    </div>
                    <img src="../../home_img.png" className="h-auto w-48"></img>
                </div>
            </div>
            <Button onClick={getStartedEvent} className="!bg-yellow-400 !text-blue-800 -translate-y-3/4 !h-[10vh]">
                <h1 className="text-[3vw] p-2">Get Started</h1>
            </Button>
            <div id="row-1-container" className="flex">
                <div id="row-1-text" className="relative w-fit p-2">
                    <p className="absolute bg-red-300 w-fit mr-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero impedit id porro cum iste velit, corporis, quasi omnis eligendi accusantium, quia illo? Repellendus, officia accusantium inventore sapiente voluptatum nihil?</p>
                    <img src="../../home_top_bg.svg"></img>
                </div>
                <div className="p-2">
                    <img src="../../home_top_bg.svg"></img>
                </div>
            </div>
            <div id="row-2-container" className="flex">
                <div className="p-2">
                    <img src="../../home_top_bg.svg"></img>
                </div>
                <div id="row-2" className="relative p-2">
                    <p className="absolute bg-red-300 w-fit mr-2 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia eligendi, alias laudantium perferendis iste commodi in nostrum, exercitationem, fuga ducimus nisi doloribus. Tenetur praesentium esse excepturi illum minus totam consequatur.</p>
                    <img src="../../home_bottom_bg.svg"></img>
                </div>
            </div>
        </div>
    )
}