import "@/styles/globals.css"
import Image from "next/image";


export const ProjectWireFrames = () => {
    return (
        <div>
            <h2 className="flex justify-center text-3xl font-bold pl-16 pt-10">WireFrames For my application:</h2>
            <Image className="mx-auto" src="/logo.webp" width={100} height={100} alt="logo" />
            <div className="flex flex-col justify-center items-center text-2xl font-bold py-10">
            <h2>Link to my wire frames: </h2>
            <a className="text-3xl text-blue-500" href="https://www.figma.com/design/E88up2y83ESag3ifRM49De/Untitled?node-id=0-1&t=LVWOuUTqfTjkmXUC-1">Figma </a>
            <p className="p-32 pt-2 align-center">https://www.figma.com/design/E88up2y83ESag3ifRM49De/Untitled?node-id=0-1&t=LVWOuUTqfTjkmXUC-1</p>
            Plan to follow this general structure and this page format.
            </div>
        </div>
    )

}