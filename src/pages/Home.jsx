import { Button } from "@material-tailwind/react"
import { IDInput } from "../components/IDInput"
import { SearchBar } from "../components/SearchBar"
export default function Home () {
    return (
        <div className="min-h-screen flex flex-col items-center justify-start w-screen">
            <SearchBar></SearchBar>
            <div id="bg-container" className="relative h-auto bg-contain bg-no-repeat w-full">
                <img id="bg" src="../../home_bg.svg"></img>
                <div className="box-border w-full absolute top-1/2 -translate-y-1/2 flex items-center justify-around">
                    <div id="greeting" className=""> 
                        <h1 className="text-5xl text-white">Welcome to CulinaryCompass!</h1>
                        <h2 className="text-2xl text-white">Start planning your meals at UCI and beyond!</h2>
                    </div>
                    <img src="../../home_img.png" className="h-auto w-48"></img>
                </div>
            </div>
            <Button>Get Started</Button>
            <div id="row-1-container" className="flex">
                <div id="row-1-text" className="relative w-fit p-2">
                    <p className="absolute bg-red-300 top-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero impedit id porro cum iste velit, corporis, quasi omnis eligendi accusantium, quia illo? Repellendus, officia accusantium inventore sapiente voluptatum nihil?</p>
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
                    <img src="../../home_bottom_bg.svg"></img>
                    <p className="absolute bg-red-300 top-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia eligendi, alias laudantium perferendis iste commodi in nostrum, exercitationem, fuga ducimus nisi doloribus. Tenetur praesentium esse excepturi illum minus totam consequatur.</p>
                </div>
            </div>
        </div>
    )
}