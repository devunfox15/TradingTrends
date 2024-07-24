import "@/styles/globals.css"
import {ProjectWireFrames} from "./projectWireFrames";
export const Project = () => {
    return (
        <div className="flex flex-col justify-center text-2xl font-bold py-10">
{/* Purpose */}
            <h2 className="flex justify-center text-3xl font-bold pl-16 pt-10">Purpose:</h2>
            <p className="p-32 pt-2 align-center">The purpose of this project is to create a store, that allows a consumer to reach a Producer via a website!
            The reason why I decide to do this is because now more then ever people are shopping online due to convienience and ease of use.
            So to advance the Producer in the world we need to have online store. I feel that alot of the work that we do not already have online will be in the next few years and as a web developer I need to be able to do this. So I am making a store designed to be covenient and easy to use for users. 
            </p>

{/* Audience */}
            <h2 className="flex justify-center text-3xl font-bold pl-16 pt-10">Audience:</h2>
            <p className="p-32 pt-2 justify-center ">The audience for this project is people who are interested in shopping online. I will provide them with the necessay tools to do so.</p>

{/* Data sources */}
            <h2 className="flex justify-center text-3xl font-bold pl-16 pt-10">Data Sources:</h2>
                <ul className="flex flex-col text-center text-2xl justify-evenly p-16 pt-2 ">
                    <li className="p-2">External API: https://rapidapi.com/kaushiksheel9/api/shoes-collections</li>
                    <li className="p-2">Session Storage: To help prevent the user from being logged out or loosing the site session. This should prevent the loss of data in carts for example.</li>
                    <li className="p-2">Local Json file to store the data of site product descriptions and any applicabl data the Api does not provide. A user story section to highlight the product on the home page. </li>
                </ul>

{/* Colors/Typography/specific Element styling */}
            <h2 className="flex justify-center text-3xl font-bold pl-16 pt-10">Color, Typography, tailwind, and component based function :</h2>
            <h2 className="p-16 pt-2 text-center pb-0"> Colors: </h2>
            <div className="w-1/2 h-1/2 bg-Primary flex justify-center mx-auto">Primary</div>
            <div className="w-1/2 h-1/2 bg-Secondary flex justify-center mx-auto">secondary</div>
            <div className="w-1/2 h-1/2 bg-Tertiary flex justify-center mx-auto">Tertiary</div>
            <div className="w-1/2 h-1/2 bg-White flex justify-center mx-auto border-2 border-Black">White</div>
            <div className="w-1/2 h-1/2 bg-Black flex justify-center text-white mx-auto">Black</div>

            <h2 className="flex justify-center text-3xl font-bold pl-16 pt-10">Typography:</h2>
            <p className="p-16 pt-2 pb-0 text-center">For my typography I have decided to use Merriweather for the header and Inter for the body. It looks the cleanest in my opinion. </p>
            <h2 className="flex justify-center text-3xl font-bold pl-16 pt-10">Tailwind, and component based function:</h2>
            <p className="p-16 pt-2 text-center">I also am using tailwind to style my application due to the nature of next.js coming preconnected with tailwind. However for anmation I will use CSS.Modules. I also will be build my application with components rather then js.modules. They are the same pricipals and allow for better code reuse and modularity.</p>
{/* wireframes */}
            <ProjectWireFrames/>

{/* Building/Implementation Plan */}
            <h2 className="flex justify-center text-3xl font-bold pl-16 pt-10">Building/Implementation Plan:</h2>
            <ul>
                <li className="flex flex-col justify-center items-center text-2xl font-bold pl-16 pt-10">Week 1 : Home Page 
                    <ul>
                        <li>Higlight the products sold on the home page</li>
                        <li>Slogan, Branding, and Logos Made</li>
                        <li>Hero Image</li>
                        <li>Product List</li>
                        <li>Product Description</li>
                        <li>Customer Json with data on products</li>
                        <li> Connect API</li>
                    </ul>
                </li>
                <li className="flex flex-col justify-center items-center text-2xl font-bold pl-16 pt-10">Week 1 & 2 : Product Pages  
                    <ul>
                    <li>sort products by category</li>
                    <li>make individual products pages</li>
                    <li>Display APi data</li>
                    </ul>
                </li>
                <li className="flex flex-col justify-center items-center text-2xl font-bold pl-16 pt-10">Week 2 & 3 : Cart Page 
                    <ul>
                    <li>Local Storage</li>
                    <li>Session storage</li>
                    <li>Link to checkout</li>
                    <li>Add to cart button</li>
                    <li>Remove from cart button</li>
                    </ul>
                </li>
                <li className="flex flex-col justify-center items-center text-2xl font-bold pl-16 pt-10">Week 3 : Checkout Page 
                    <ul>
                    <li>Check Out Form</li>
                    <li>Form validation</li>
                    <li>Link to home page</li>
                    <li>Link to cart page to go back</li>
                    <li>Success page</li>
                    <li>Arithmetic for total price</li>
                    </ul>
                </li>
                <li className="flex flex-col justify-center items-center text-2xl font-bold pl-16 pt-10">Week 4 : Wrapping up Implementation 
                    <ul>
                    <li>Deployment</li>
                    <li>Git and Github</li>
                    <li>Debugging issues</li>
                    <li>Think about next steps after class!</li>
                    </ul>
                </li>

            </ul>
        </div>
    );
}