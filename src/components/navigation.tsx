"use client";

import { SignInButton, SignOutButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, MessageSquare, Upload, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home", icon: Home },
        { href: "/chat", label: "Chat", icon: MessageSquare },
        { href: "/upload", label: "Upload", icon: Upload },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="border-b-6 border-black bg-white sticky top-0 z-50 shadow-[0px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="container mx-auto px-4">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo/Brand */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="bg-black p-3 border-4 border-black group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-transform">
                            <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-black uppercase hidden sm:block">
                            RAG Chatbot
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-3">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`
                                        px-6 py-3 font-bold border-4 border-black transition-all
                                        inline-flex items-center gap-2 uppercase text-sm
                                        ${isActive(link.href)
                                            ? "bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                            : "bg-white text-black hover:bg-black hover:text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px]"
                                        }
                                    `}
                                >
                                    <Icon className="w-4 h-4" />
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Auth Buttons - Desktop */}
                    <div className="hidden md:flex gap-3">
                        <SignedOut>
                            <SignInButton mode="modal">
                                <Button className="bg-white text-black px-6 py-3 font-bold border-4 border-black hover:bg-black hover:text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all uppercase">
                                    Sign In
                                </Button>
                            </SignInButton>
                            <SignUpButton mode="modal">
                                <Button className="bg-black text-white px-6 py-3 font-bold border-4 border-black hover:bg-white hover:text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all uppercase">
                                    Sign Up
                                </Button>
                            </SignUpButton>
                        </SignedOut>
                        <SignedIn>
                            <SignOutButton>
                                <Button className="bg-red-300 text-black px-6 py-3 font-bold border-4 border-black hover:bg-red-400 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all uppercase">
                                    Sign Out
                                </Button>
                            </SignOutButton>
                        </SignedIn>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden bg-black text-white p-3 border-4 border-black hover:bg-white hover:text-black transition-all"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden pb-4 pt-2 border-t-4 border-black mt-4">
                        <div className="flex flex-col gap-3">
                            {navLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`
                                            px-6 py-3 font-bold border-4 border-black transition-all
                                            inline-flex items-center gap-2 uppercase text-sm
                                            ${isActive(link.href)
                                                ? "bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                                : "bg-white text-black hover:bg-black hover:text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                                            }
                                        `}
                                    >
                                        <Icon className="w-4 h-4" />
                                        {link.label}
                                    </Link>
                                );
                            })}
                            
                            {/* Auth Buttons - Mobile */}
                            <div className="flex flex-col gap-3 pt-2 border-t-4 border-black mt-2">
                                <SignedOut>
                                    <SignInButton mode="modal">
                                        <Button className="w-full bg-white text-black px-6 py-3 font-bold border-4 border-black hover:bg-black hover:text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all uppercase">
                                            Sign In
                                        </Button>
                                    </SignInButton>
                                    <SignUpButton mode="modal">
                                        <Button className="w-full bg-black text-white px-6 py-3 font-bold border-4 border-black hover:bg-white hover:text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all uppercase">
                                            Sign Up
                                        </Button>
                                    </SignUpButton>
                                </SignedOut>
                                <SignedIn>
                                    <SignOutButton>
                                        <Button className="w-full bg-red-300 text-black px-6 py-3 font-bold border-4 border-black hover:bg-red-400 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all uppercase">
                                            Sign Out
                                        </Button>
                                    </SignOutButton>
                                </SignedIn>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

