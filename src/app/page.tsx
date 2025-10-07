import Link from "next/link";
import { ArrowRight, Upload, MessageSquare, Database, Zap, FileText, Search, Brain, Shield, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="border-8 border-black bg-white p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-8">
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">
              RAG Chatbot
            </h1>
            <p className="text-2xl md:text-3xl font-bold mb-8 border-l-8 border-black pl-4">
              Turn any PDF into instant AI knowledge for your company
            </p>
            <p className="text-lg md:text-xl mb-10 leading-relaxed">
              A powerful Retrieval-Augmented Generation chatbot capable of real-time document processing and intelligent query handling. Upload your documents and get accurate, context-aware responses instantly.
            </p>
            <div className="bg-blue-100 border-4 border-black p-4 mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-bold text-sm md:text-base flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>📌 Note: Document upload is restricted to admin users only for security purposes.</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/chat"
                className="bg-black text-white px-8 py-4 font-bold text-lg border-4 border-black hover:bg-white hover:text-black transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] inline-flex items-center justify-center gap-2 uppercase"
              >
                Start Chatting <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/upload"
                className="bg-blue-400 text-black px-8 py-4 font-bold text-lg border-4 border-black hover:bg-blue-500 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] inline-flex items-center justify-center gap-2 uppercase"
              >
                Upload Documents <Upload className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-pink-100 border-y-8 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12 uppercase text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Upload className="w-8 h-8" />,
                title: "Easy Upload",
                description: "Upload PDFs and documents instantly. Our system processes them in real-time.",
                color: "bg-yellow-300"
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "AI-Powered Intelligence",
                description: "Advanced RAG technology provides accurate, contextual responses from your documents.",
                color: "bg-green-300"
              },
              {
                icon: <Search className="w-8 h-8" />,
                title: "Semantic Search",
                description: "Vector database enables lightning-fast semantic search across all your documents.",
                color: "bg-blue-300"
              },
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Natural Conversations",
                description: "Chat naturally with your documents. Ask questions and get instant, accurate answers.",
                color: "bg-purple-300"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Real-Time Processing",
                description: "Documents are processed and indexed immediately upon upload.",
                color: "bg-orange-300"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Secure & Private",
                description: "Your data stays secure with enterprise-grade security measures.",
                color: "bg-red-300"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`${feature.color} border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all`}
              >
                <div className="bg-white border-4 border-black p-3 inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black mb-2 uppercase">{feature.title}</h3>
                <p className="font-semibold">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12 uppercase text-center">
            How It Works
          </h2>
          <div className="border-8 border-black bg-white p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Upload Your Documents",
                  description: "Upload PDFs through our intuitive interface. Documents are chunked and processed automatically. (Admin access required)",
                  color: "bg-yellow-300"
                },
                {
                  step: "02",
                  title: "AI Processes & Indexes",
                  description: "Our system creates embeddings and stores them in a vector database for semantic search.",
                  color: "bg-green-300"
                },
                {
                  step: "03",
                  title: "Ask Questions",
                  description: "Type your question in the chat UI. The system searches for relevant content using semantic similarity.",
                  color: "bg-blue-300"
                },
                {
                  step: "04",
                  title: "Get Intelligent Answers",
                  description: "The RAG system retrieves relevant content, combines it with your prompt, and generates accurate responses.",
                  color: "bg-purple-300"
                }
              ].map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                  <div className={`${item.color} border-4 border-black p-4 font-black text-3xl min-w-[80px] text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black mb-2 uppercase">{item.title}</h3>
                    <p className="text-lg font-semibold">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="container mx-auto px-4 py-16 bg-cyan-100 border-y-8 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12 uppercase text-center">
            Technical Architecture
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="bg-yellow-300 border-4 border-black p-3 mb-4 inline-block">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black mb-3 uppercase">Chat UI</h3>
              <p className="font-semibold mb-2">Modern, responsive interface for natural conversations.</p>
              <ul className="list-disc list-inside space-y-1 font-semibold">
                <li>Real-time message streaming</li>
                <li>Intuitive prompt input</li>
                <li>Conversation history</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="bg-green-300 border-4 border-black p-3 mb-4 inline-block">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black mb-3 uppercase">Route Handler</h3>
              <p className="font-semibold mb-2">Next.js API routes power the backend processing.</p>
              <ul className="list-disc list-inside space-y-1 font-semibold">
                <li>Search tool integration</li>
                <li>Prompt formatting</li>
                <li>Response streaming</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="bg-blue-300 border-4 border-black p-3 mb-4 inline-block">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black mb-3 uppercase">Search Tool</h3>
              <p className="font-semibold mb-2">Semantic search finds relevant content from your documents.</p>
              <ul className="list-disc list-inside space-y-1 font-semibold">
                <li>Vector similarity search</li>
                <li>Content retrieval</li>
                <li>Context formatting</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="bg-purple-300 border-4 border-black p-3 mb-4 inline-block">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black mb-3 uppercase">Vector Database</h3>
              <p className="font-semibold mb-2">Stores document embeddings for fast semantic search.</p>
              <ul className="list-disc list-inside space-y-1 font-semibold">
                <li>Document embeddings</li>
                <li>Chunked content storage</li>
                <li>Lightning-fast queries</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="border-8 border-black bg-gradient-to-br from-yellow-300 via-pink-300 to-blue-300 p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">
              Ready to Transform Your Documents?
            </h2>
            <p className="text-xl font-bold mb-8">
              Start using RAG Chatbot today and unlock the power of AI-driven document intelligence.
            </p>
            <Link 
              href="/chat"
              className="bg-black text-white px-12 py-5 font-black text-xl border-4 border-black hover:bg-white hover:text-black transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] inline-flex items-center gap-3 uppercase"
            >
              Get Started Now <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-8 border-black bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="font-bold text-md">
              ©2025 Made by Syamantak Pyne😎.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
