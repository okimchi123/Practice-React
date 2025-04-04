import { useState } from "react";
import {Star } from "lucide-react";
import avatar from "../assets/images/avatar.png";

export default function HeroSection() {
    const [contact, setContact] = useState({
        firstName: "John",  
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        });
        alert("Toggle Favorite")
    }
    return(
        <>
        <main>
            <article className="card bg-white px-2 py-4 mt-[10%] flex flex-col items-center border border-gray-200 shadow-md rounded-md h-[350px]">
                <img
                    src={avatar}
                    className="avatar rounded-full w-35"
                    alt="User profile picture of John Doe"
                />
                <div className="info p-2">
                    <Star className="cursor-pointer select-none" onClick={() => toggleFavorite()} fill = {contact.isFavorite ? "yellow" : "white"} color={contact.isFavorite ? "yellow" : "black"} />
                    <h2 className="name text-2xl text-gray font-medium">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
        </>
    )
}