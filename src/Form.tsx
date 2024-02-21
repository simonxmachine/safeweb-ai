import React from "react";
import { useState, useEffect, useRef } from 'react';
import { AnalyticsBrowser } from '@segment/analytics-next'

export const analytics = AnalyticsBrowser.load({ writeKey: 'u4hbGHBJ3a2Rl3oXLem6I5YxsomyFF3l' })

export default function Form() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");

    const buttonClicked = () => {

        analytics.track('Form Submitted', {
            name: name,
            address: address,
            email: email, 
            otherinfo: 'otherinfo', 
            otherinfo2: 'otherinfo2', 
            otherinfo3: 'otherinfo3',
            otherinfo4: 'otherinfo4',
            otherinfo5: 'otherinfo5',

        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
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
                    <button type="submit" onClick={buttonClicked}>Submit</button>
                </form>
            </div>
        </div>
    );
}