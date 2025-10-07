import {
  streamText,
  UIMessage,
  convertToModelMessages,
  tool,
  InferUIDataParts,
  InferUITools,
  UIDataTypes,
  stepCountIs
} from "ai";
import { z } from "zod";
import { searchDocuments } from "@/lib/search";
import { openai } from "@ai-sdk/openai";

const tools = {
  searchKnowledgeBase: tool({
    description: "Search the knowledge base for info",
    inputSchema: z.object({
      query: z.string().describe("The search to find relevant documents"),
    }),
    execute: async ({ query }) => {
      try {
        const result = await searchDocuments(query, 3, 0.5);
        if (result.length === 0) {
          return "No relevant information found";
        }

        const formattedResults = result
          .map((r, i) => `[${i + 1}] ${r.content}`)
          .join("\n\n");
        return formattedResults;
      } catch (error) {
        console.error("Search error", error);
        return "Error while searching";
      }
    },
  }),
};

export type ChatTools = InferUITools<typeof tools>
export type ChatMessage= UIMessage<never, UIDataTypes, ChatTools>;
export async function POST(req: Request) {
  try {
    const { messages }: { messages: ChatMessage[] } = await req.json();
    const result = streamText({
      model: openai("gpt-4.1-mini"),
      messages: convertToModelMessages(messages),
      tools,
      system: `You are a helpful assistant with access to a knowledge base. 
          When users ask questions, search the knowledge base for relevant information.
          Always search before answering if the question might relate to uploaded documents.
          Base your answers on the search results when available. Give concise answers that correctly answer what the user is asking for. Do not flood them with all the information from the search results.`,
      stopWhen: stepCountIs(2),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Error streaming chat completion:", error);
    return new Response("Failed to stream chat completion", { status: 500 });
  }
}
