import { useState } from "react";
import Pet from "../interfaces/Pet";



export function PetInfo() {

    const [pet, setPet] = useState<Pet>({ name: "Fluffy", breed: "German Shephard" });

    return (
        <div className="PetInfo">
            <img src={'/petinfo/public/images/dog1.jpg'} alt="Doggie"></img>
            <p>{pet.name}</p>
            <p>{pet.breed}</p>
        
        </div>
    )
}
export default PetInfo;
