'use client'

import { useState } from "react";

const likes = () => {
    let [like, setlike] = useState(0);
    const add = () =>
        setlike((prev) => (prev === 0 ? 1 : 0));
    return (
        <div className="text-white text-center bg-fb w-64 mt-20 m-auto h-64 rounded-full drop-shadow-xl">
            <h1 className="p-6 text-xl mt-8">Likes</h1>
            <h1 className="text-2xl text-amber-200 ">{like}</h1>
            <br></br>
        
            <p className="text-sm mt-7">Total likes {like}</p>
        </div>
    )
}

export default likes;