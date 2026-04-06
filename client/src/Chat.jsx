import { useState, useRef, useEffect } from "react";
import { sendMessage } from "./hooks/api";
import { Send, Bot, User, Sparkles, Loader2, Trash2 } from "lucide-react";

export default function Chat() {
    const [messages, setMessages] = useState(() => {
        const saved = localStorage.getItem("chat");
        return saved ? JSON.parse(saved) : [];
    });
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const chatRef = useRef();

    useEffect(() => {
        localStorage.setItem("chat", JSON.stringify(messages));
    }, [messages]);

    useEffect(() => {
        chatRef.current?.scrollTo({
            top: chatRef.current.scrollHeight,
            behavior: "smooth"
        });
    }, [messages]);

    const handleSend = async (text = input) => {
        if (!text) return;

        const userMessage = { role: "user", content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput("");

        setLoading(true);

        const reply = await sendMessage(text);
        const botMessage = { role: "bot", content: reply };
        setMessages(prev => [...prev, botMessage]);

        setLoading(false);

        let i = 0;
        const interval = setInterval(() => {
            i++;
            setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1].content = reply.slice(0, i);
                return updated;
            });
            if (i >= reply.length) clearInterval(interval);
        }, 15);
    };

    const clearChat = () => {
        localStorage.removeItem("chat");
        setMessages([]);
    };

    const suggestedQuestions = [
        "¿Cómo puedo agendar una cita?",
        "Tengo dolor de cabeza, ¿qué hago?",
        "¿Cuáles son los horarios de atención?",
        "¿Qué especialidades médicas ofrecen?",
    ];

    return (
        <div className="min-h-[calc(100vh-80px)] bg-[#f4f6fb] flex justify-center py-8 px-4">
            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col h-[85vh]">

                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white shadow-md">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl">
                            <Bot className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Mirana | Asistente Médico IA</h2>
                            <div className="flex items-center gap-2 text-blue-100 text-sm">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                En línea
                            </div>
                        </div>
                    </div>
                    <p className="mt-3 text-xs md:text-sm text-blue-100 opacity-90 leading-relaxed">
                        Obtén información médica instantánea. Recuerda que esto no sustituye una consulta profesional.
                    </p>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                        >
                            <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${message.role === "user" ? "bg-blue-600" : "bg-white border border-blue-100"
                                }`}>
                                {message.role === "user" ? (
                                    <User className="w-5 h-5 text-white" />
                                ) : (
                                    <Bot className="w-5 h-5 text-blue-600" />
                                )}
                            </div>

                            <div className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-sm ${message.role === "user"
                                ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-tr-none"
                                : "bg-white text-slate-800 border border-slate-100 rounded-tl-none"
                                }`}>
                                <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                                <p className={`text-[10px] mt-2 font-medium opacity-70 ${message.role === "user" ? "text-right" : "text-left"
                                    }`}>
                                    {message.timestamp?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </p>
                            </div>
                        </div>
                    ))}

                    {loading && (
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full bg-white border border-blue-100 flex items-center justify-center">
                                <Sparkles className="w-4 h-4 text-blue-400 animate-spin" />
                            </div>
                            <div className="bg-white border border-slate-100 rounded-2xl px-4 py-3 shadow-sm">
                                <div className="flex gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" />
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="px-6 py-3 bg-white border-t border-slate-100">
                    <div className="flex flex-wrap gap-2">
                        {suggestedQuestions.map((q, i) => (
                            <button
                                key={i}
                                onClick={() => handleSend(q)}
                                className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full transition-all border border-blue-100 font-medium"
                            >
                                {q}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="p-4 bg-white border-t border-slate-100">
                    <div className="flex gap-3 items-center">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            placeholder="Describe tus síntomas..."
                            className="flex-1 px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm"
                            disabled={loading}
                        />
                        <button
                            onClick={() => handleSend()}
                            disabled={!input.trim() || loading}
                            className="bg-blue-600 text-white p-3.5 rounded-2xl hover:bg-blue-700 transition-all shadow-md shadow-blue-200 disabled:opacity-50 disabled:shadow-none"
                        >
                            {loading ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <Send className="w-5 h-5" />
                            )}
                        </button>
                        <button
                            onClick={clearChat}
                            className="bg-slate-200 text-slate-700 p-3.5 rounded-2xl hover:bg-slate-300 transition-all"
                        >
                            <Trash2 className="w-5 h-5" />
                        </button>
                    </div>
                    <p className="text-[10px] text-center text-slate-400 mt-3 font-medium uppercase tracking-wider">
                        Consulta profesional recomendada
                    </p>
                </div>
            </div>
        </div>
    );
}