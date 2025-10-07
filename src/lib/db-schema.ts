import { PgTable, serial, text, vector, index, pgTable } from "drizzle-orm/pg-core";

export const documents =pgTable(
    "documents",
    {
        id: serial("id").primaryKey(),
        content: text("content").notNull(),
        embedding: vector("embedding", {dimensions: 1536}),
    },
    (table)=>[
        index("embeddingIndex").using(
            "hnsw",
            table.embedding.op("vector_cosine_ops")),
    ]
);

export type InsertDocument = typeof documents.$inferInsert;
export type SelectDocument = typeof documents.$inferSelect;