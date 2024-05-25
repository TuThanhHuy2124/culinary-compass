import { Button } from "@material-tailwind/react"

export default function Home () {
    return (
        <div className="min-h-screen flex flex-col items-center justify-around">
            <div id="bg-container" className="w-screen">
                <div id="greeting"> 
                    <h1>Welcome to CulinaryCompass!</h1>
                    <h2>Start planning your meals at UCI and beyond!</h2>
                </div>
                <img></img>
            </div>
            <Button>Get Started</Button>
            <div id="row-1">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero impedit id porro cum iste velit, corporis, quasi omnis eligendi accusantium, quia illo? Repellendus, officia accusantium inventore sapiente voluptatum nihil?</p>
                <img></img>
            </div>
            <div id="row-2">
                <img></img>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia eligendi, alias laudantium perferendis iste commodi in nostrum, exercitationem, fuga ducimus nisi doloribus. Tenetur praesentium esse excepturi illum minus totam consequatur.</p>
            </div>
        </div>
    )
}