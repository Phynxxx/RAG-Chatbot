"use client";
import { useState } from "react";
import { processPdfFile } from "./actions";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Loader2, Upload, FileText, CheckCircle, AlertCircle } from "lucide-react";

export default function PDFUpload(){
    const [isLoading,setIsLoading]=useState(false);
    const [message, setMessage]=useState<{
        type: "error" | "success";
        text: string;
    }|null>(null);
    const handleFileUpload= async (e: React.ChangeEvent<HTMLInputElement>)=>{
        const file=e.target.files?.[0];
        if (!file) return;

        setIsLoading(true);
        setMessage(null);

        try{
            const formData= new FormData();
            formData.append("pdf", file);

            const result =await processPdfFile(formData);

            if (result.success){
                setMessage({
                    type: "success",
                    text: result.message || "PDF processed successfully",
                })
                e.target.value="";
            }
            else{
                setMessage({
                    type: "error",
                    text: result.error || "Error occurred while processing PDF",
                })
            }
        }catch(error){
            setMessage({
                type: "error",
                text: "An error occurred",
            })
        }finally {
            setIsLoading(false);
        }
    }
return (
<div className="min-h-screen bg-yellow-50 py-8 md:py-12 px-4">
    <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="border-6 border-black bg-gradient-to-r from-blue-300 to-purple-300 p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
            <div className="flex items-center gap-4">
                <div className="bg-black p-4 border-4 border-black">
                    <Upload className="w-8 h-8 text-white" />
                </div>
                <div>
                    <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                        PDF Upload
                    </h1>
                    <p className="font-bold text-base md:text-lg">Upload documents to power your AI knowledge base</p>
                </div>
            </div>
        </div>

        {/* Upload Card */}
        <Card className="border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden">
            <CardContent className="pt-8 pb-8">
                <div className="space-y-6">
                    {/* Upload Section */}
                    <div className="border-4 border-black bg-cyan-100 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-yellow-300 border-4 border-black p-2">
                                <FileText className="w-5 h-5" />
                            </div>
                            <Label htmlFor="pdf-upload" className="text-xl font-black uppercase cursor-pointer">
                                Choose PDF File
                            </Label>
                        </div>
                        <Input 
                            id="pdf-upload"
                            type="file"
                            accept=".pdf"
                            onChange={handleFileUpload}
                            disabled={isLoading}
                            className="w-full border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-semibold text-base bg-white file:bg-black file:text-white file:font-bold file:border-0 file:px-8 file:py-3.5 file:mr-4 file:rounded-none file:h-full hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed h-14 flex items-center"/>
                        <p className="mt-3 font-semibold text-sm">
                            📄 Supported format: PDF files only
                        </p>
                    </div>

                    {/* Loading State */}
                    {
                        isLoading && (
                            <div className="border-4 border-black bg-purple-300 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <div className="flex items-center gap-3">
                                    <div className="bg-white border-4 border-black p-2">
                                        <Loader2 className="h-6 w-6 animate-spin"/>
                                    </div>
                                    <span className="font-black text-lg uppercase">Processing PDF...</span>
                                </div>
                                <div className="mt-3 h-3 bg-white border-2 border-black overflow-hidden">
                                    <div className="h-full bg-black animate-pulse"></div>
                                </div>
                            </div>
                        )
                    }  

                    {/* Success/Error Messages */}
                    {
                        message && (
                            <Alert 
                                variant={message.type==="error"?"destructive":"default"}
                                className={`border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                                    message.type === "error" 
                                        ? "bg-red-300" 
                                        : "bg-green-300"
                                }`}
                            >
                                <div className="flex items-start gap-3">
                                    <div className={`p-2 border-4 border-black ${
                                        message.type === "error" ? "bg-white" : "bg-white"
                                    }`}>
                                        {message.type === "error" ? (
                                            <AlertCircle className="h-6 w-6" />
                                        ) : (
                                            <CheckCircle className="h-6 w-6" />
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <AlertTitle className="font-black text-xl uppercase mb-2">
                                            {message.type==="error"?"Error!":"Success!"}
                                        </AlertTitle>
                                        <AlertDescription className="font-semibold text-base">
                                            {message.text}
                                        </AlertDescription>
                                    </div>
                                </div>
                            </Alert>
                        )
                    }    
                </div>

                {/* Info Section */}
                <div className="mt-8 border-4 border-black bg-yellow-100 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h3 className="font-black text-lg uppercase mb-3">How It Works</h3>
                    <ol className="space-y-2 font-semibold">
                        <li className="flex items-start gap-2">
                            <span className="bg-black text-white px-2 py-1 text-xs font-black border-2 border-black">1</span>
                            <span>Upload your PDF document using the file selector above</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="bg-black text-white px-2 py-1 text-xs font-black border-2 border-black">2</span>
                            <span>The system processes and chunks your document automatically</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="bg-black text-white px-2 py-1 text-xs font-black border-2 border-black">3</span>
                            <span>Embeddings are generated and stored in the vector database</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="bg-black text-white px-2 py-1 text-xs font-black border-2 border-black">4</span>
                            <span>Start chatting with your document in the chat interface!</span>
                        </li>
                    </ol>
                </div>
            </CardContent>
        </Card>
    </div>
</div>)
}