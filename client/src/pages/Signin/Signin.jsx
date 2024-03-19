import React,  { useState } from "react";
import axios from "axios"; 


const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try{
            const res = await axios.post("/auth/signin", { username, password });
            console.log("res", res.data);

        } catch(err){
            console.log(err);
        }
    };

    return( <form className="bg-gray-200 flex flex-col py-12 px-8 rounded-lg w-8/12 md:w-6/12 mx-auto gap-10">
        <h2 className="text-3xl font-bold text-center">Sign in to Twitter</h2>

        <input 
        onChange={(e) => setUsername(e.target.value)}
        type="text" 
        placeholder="username" 
        className="text-xl py-2 rounded-full px-4"
        />
        <input 
        onChange={(e) => setPassword(e.target.value)}
        type="password" 
        placeholder="password" 
        className="text-xl py-2 rounded-full px-4"
        />

        <button className="text-xl py-2 rounded-full px-4 bg-yellow-500 text-white" 
        onClick={handleLogin}
        >
            Sign In
        </button>

        <p className="text-center text-xl">You don't have an account?</p>

        <input type="text" 
        placeholder="username" 
        className="text-xl py-2 rounded-full px-4"
        />
        <input type="email" 
        placeholder="email"
        required 
        className="text-xl py-2 rounded-full px-4"
        />
        <input type="password" 
        placeholder="password" 
        className="text-xl py-2 rounded-full px-4"
        />

        <button className="text-xl py-2 rounded-full px-4 bg-yellow-500 text-white" 
        type="submit">
        Sign up
        </button>
    </form>
    );
};

export default Signin;