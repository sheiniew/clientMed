import axios from "axios";

const token = localStorage.getItem("token");

export async function sendMessage(input) {
    try {
        const response = await axios.post("http://localhost:3000/api/chat", { message: input }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.reply;
    } catch (error) {
        console.error("Error enviando mensaje:", error);
        throw error;
    } 
}