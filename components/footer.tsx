"use client";

import React, { useState } from "react";
import {
    PiFacebookLogo,
    PiInstagramLogo,
    PiLinkedinLogo,
    PiTwitterLogo,
} from "react-icons/pi";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [subscriptionStatus, setSubscriptionStatus] = useState("");

    const mainLinks = [
        { href: '/services', name: 'Advantages' },
        { href: '/projects', name: 'Ecosystem' },
        { href: '/about', name: 'Partners' },
        { href: '/site-selection', name: 'Site Selection' },
        { href: '/news', name: 'News' },
    ];

    const legalLinks = [
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
        { name: "Sitemap", href: "#" },
    ];

    const socialLinks = [
        { icon: PiFacebookLogo, href: "#" },
        { icon: PiInstagramLogo, href: "#" },
        { icon: PiLinkedinLogo, href: "#" },
        { icon: PiTwitterLogo, href: "#" },
    ];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email) {
            // Here you would typically make an API call to your backend
            setSubscriptionStatus("success");
            setEmail("");
            setTimeout(() => setSubscriptionStatus(""), 3000);
        }
    };
    const currentYear = new Date().getFullYear();
    return (
        <section id="footer" className="w-full bg-slate-950 text-white">
            <footer className="py-24 px-6 md:w-5xl 2xl:w-7xl md:mx-auto">
                <div className="mx-auto" id="contact">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
                        {/* left side */}
                        <div>
                            <p className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 italic">Get in Touch</p>
                            <h2 className="text-4xl font-bold mb-6 tracking-tight">Let&apos;s Talk!</h2>
                            <a
                                href="mailto:hi@email.com"
                                className="text-2xl font-medium hover:text-amber-500 transition-colors inline-block mb-10"
                            >
                                hi@email.com
                            </a>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                2780 Jetport Road, Suite A
                                <br />
                                Kinston, NC 28504
                            </p>
                        </div>

                        {/* Middle - Navigation */}
                        <div className="grid grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Platform</h3>
                                {mainLinks.slice(0, 3).map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="block text-slate-300 hover:text-white transition-colors text-lg"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Company</h3>
                                {mainLinks.slice(3).map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="block text-slate-300 hover:text-white transition-colors text-lg"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right side - Newsletter */}
                        <div>
                            <h3 className="text-lg font-bold mb-6">
                                Executive Updates
                            </h3>
                            <p className="text-slate-400 mb-8">Receive critical infrastructure updates and relocation briefings.</p>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="flex flex-col gap-3">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Executive Email"
                                        className="w-full px-5 py-4 bg-slate-900 border border-slate-800 rounded-xl focus:outline-none focus:ring-2 
                  focus:ring-amber-500 focus:border-transparent transition-all"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="w-full bg-amber-500
                   text-slate-950 font-bold px-6 py-4 rounded-xl hover:bg-amber-400 transition-all duration-300 shadow-lg shadow-amber-500/10"
                                    >
                                        Subscribe to Briefings
                                    </button>
                                </div>
                                {subscriptionStatus === "success" && (
                                    <p className="text-amber-500 text-sm font-medium">Briefing subscription confirmed.</p>
                                )}
                            </form>
                        </div>
                    </div>

                    {/* Bottom section */}
                    <div
                        className="flex flex-col md:flex-row 
        justify-between items-start md:items-center pt-10 border-t border-slate-900"
                    >
                        {/* Legal links */}
                        <div className="flex gap-8 mb-6 md:mb-0">
                            {legalLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-500 hover:text-slate-300 transition-colors text-sm font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Social links */}
                        <div className="flex gap-8 mb-6 md:mb-0">
                            {socialLinks.map((link, index) => {
                                const Icon = link.icon;
                                return (
                                    <a
                                        key={index}
                                        href={link.href}
                                        className="text-slate-500 hover:text-amber-500 transition-all transform hover:scale-110"
                                    >
                                        <Icon size={24} />
                                    </a>
                                );
                            })}
                        </div>

                        {/* Copyright */}
                        <div className="text-slate-600 text-sm font-medium">© {currentYear} NCGTP. All Rights Reserved.</div>
                    </div>


                </div>
            </footer>
        </section>
    );
};

export default Footer;