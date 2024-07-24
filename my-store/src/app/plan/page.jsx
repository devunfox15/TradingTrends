import React from "react";
import {Project} from "../../components/(project)/project";


export default function SitePlan() {
    return (
    <div>
    <h1>Project Outcomes </h1>
    <p>All products are fake and not meant to be purchased. Credit card info is not stored in db, However user Information is stored to acess the site via OAuth login or register.<br /> 
    Technology used - Next.js, React, TailwindCSS, Prisma, SQlite. Typesript was used for prisma library and not used in this project else where.</p>
    <h1 > Site plan</h1>
    <Project />
    </div>
    );
}
