import {RecursiveCharacterTextSplitter} from "@langchain/textsplitters";

export const textSplitter=new RecursiveCharacterTextSplitter({
    chunkSize: 250,
    chunkOverlap: 30,
    separators: [" "],
})

export async function chunkContent(content:string){
return await textSplitter.splitText(content.trim());
}