"use client";
import {useState, Fragment} from "react";
import {useChat} from "@ai-sdk/react";
import {
    PromptInput,
    PromptInputBody,
    type PromptInputMessage,
    PromptInputSubmit,
    PromptInputTextarea,
    PromptInputToolbar,
    PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import { Response } from "@/components/ai-elements/response";
import { Message, MessageContent } from "@/components/ai-elements/message";
import {
    Conversation,
ConversationContent,
ConversationScrollButton,}
from "@/components/ai-elements/conversation";
import { Loader } from "@/components/ai-elements/loader";
import { MessageSquare } from "lucide-react";

export default function RAGChatBot() {

    const [input,setInput]= useState("");
    const {messages, sendMessage, status}=useChat();

    const handleSubmit = (message: PromptInputMessage) =>{
        if (!message.text) return;
        sendMessage({text:message.text});
        setInput("");
    }
    return (
        <div className="min-h-screen bg-yellow-50 p-4 md:p-6">
            <div className="max-w-5xl mx-auto h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] flex flex-col">
                {/* Header */}
                <div className="border-6 border-black bg-gradient-to-r from-purple-300 to-pink-300 p-4 md:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-black p-3 border-4 border-black">
                            <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl md:text-3xl font-black uppercase">RAG Chatbot</h1>
                            <p className="font-bold text-sm md:text-base">Ask questions about your documents</p>
                        </div>
                    </div>
                </div>

                {/* Chat Container */}
                <div className="flex-1 flex flex-col border-6 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                    <Conversation className="h-full bg-blue-50">
                        <ConversationContent className="p-4 md:p-6">
                            {messages.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full gap-6">
                                    <div className="bg-yellow-300 border-6 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                                        <MessageSquare className="w-16 h-16" />
                                    </div>
                                    <div className="text-center">
                                        <h2 className="text-2xl font-black uppercase mb-2">Start a Conversation</h2>
                                        <p className="font-bold text-lg">Type your question below to get started</p>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    {messages.map((message)=>(
                                        <div key={message.id}>
                                           {message.parts.map((part,i)=>{
                                            switch (part.type){
                                                case "text":
                                                    return (
                                                        <Fragment key={`${message.id}-${i}`}>
                                                            <Message from={message.role} className="mb-4">
                                                                <MessageContent 
                                                                    variant="flat"
                                                                    className={
                                                                        message.role === "user" 
                                                                            ? "!bg-black !text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-semibold"
                                                                            : "!bg-green-300 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-semibold"
                                                                    }
                                                                >
                                                                    <Response>
                                                                        {part.text}
                                                                    </Response>
                                                                </MessageContent>
                                                            </Message>
                                                        </Fragment>
                                                    );
                                                    default:
                                                        return null;
                                            }
                                           })} 
                                        </div>
                                    )
                                    )}
                                    {(status==="submitted" || status==="streaming") && (
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="bg-purple-300 border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                                <Loader size={20} />
                                            </div>
                                            <span className="font-black uppercase">Thinking...</span>
                                        </div>
                                    )}
                                </>
                            )}
                        </ConversationContent>
                        <ConversationScrollButton className="!bg-yellow-300 !border-4 !border-black hover:!bg-yellow-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all font-black" />
                    </Conversation>

                    {/* Input Area */}
                    <div className="border-t-6 border-black bg-cyan-100 p-4">
                        <PromptInput onSubmit={handleSubmit}>
                            <PromptInputBody className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
                                <PromptInputTextarea 
                                    value={input} 
                                    onChange={(e)=>setInput(e.target.value)}
                                    className="font-semibold text-base focus:ring-0 focus:ring-offset-0 resize-none"
                                    placeholder="Type your question here..."
                                />
                            </PromptInputBody>
                            <PromptInputToolbar className="mt-3">
                                <PromptInputTools>
                                    {/* Model Selector, web search, etc */}
                                </PromptInputTools>
                                <PromptInputSubmit className="!bg-black !text-white !border-4 !border-black hover:!bg-white hover:!text-black !shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:!shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:!translate-x-[-2px] hover:!translate-y-[-2px] !transition-all !font-black !uppercase" />
                            </PromptInputToolbar>
                        </PromptInput>
                    </div>
                </div>
            </div>
        </div>
    );
}
