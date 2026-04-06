import axios from "axios";

export async function sendMessage(input) {

    const token = localStorage.getItem("token"); // 🔥 AQUÍ SIEMPRE

    if (!token) {
        throw new Error("No hay token");
    }

    const response = await axios.post(
        "https://backendmed-8mxy.onrender.com/api/chat",
        { message: input },
        {
            headers: {
                Authorization: `Bearer ${token}` // 🔐 CLAVE
            }
        }
    );

    return response.data.reply;
}
