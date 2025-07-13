import axios from "axios";

export const loginHandler = async (username, password) => {
    try{
        const { data: { token }, status } = await axios.get("https://quiz-app-backend-yp5k.onrender.com/auth/login", {
            username: username,
            password: password
        });
        if(status === 200){
            localStorage.setItem("token", token);
            return token;
        }
    } catch(err){
        console.error(err);
    }
}