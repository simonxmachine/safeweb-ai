import React from "react";
import { useState, useEffect, useRef } from 'react';

export default function Form() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://www.safeweb.ai", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, address, email })

            });
            if (response.ok) {
                console.log("Registered Successfully");
            } else {
                console.log("Registration Failed");
            }
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <div className="flex flex-col">
            <div className="mb-10 max-w-[1050px] mobile-text">
                <h2 className="h2-bold">Sample Form</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />

                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />

                    <br />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        
                    />


<br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
