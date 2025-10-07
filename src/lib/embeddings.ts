import {embed, embedMany} from "ai";
import {google} from "@ai-sdk/google"

export async function generateEmbedding(text:string){
    const input= text.replace("\n"," ");
    const{embedding}=await embed({
        model: google.textEmbeddingModel("text-embedding-004"),
        value: input,
    });
    return embedding;
}

export async function generateEmbeddings(texts:string[]){
    const inputs=texts.map((text)=>text.replace("\n"," "))
    const{embeddings}=await embedMany({
        model: google.textEmbeddingModel("text-embedding-004"),
        values: inputs,
    });

    return embeddings;
}