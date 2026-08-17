// // // import { Globe, Share2, AtSign, ShieldCheck } from "lucide-react";
// // // import Image from "next/image";
// // // import Link from "next/link";
// // // import finalLogo from "@/assets/images/final_logo.png";

// // // export function Footer() {
// // //   return (
// // //     <footer className="bg-white pt-20 pb-10 border-t border-slate-100 font-sans">
// // //       <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-7xl">
// // //         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

// // //           {/* Brand Info */}
// // //           <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
// // //             <Link href="/" className="flex items-center hover:opacity-95 transition-opacity w-fit">
// // //               <Image
// // //                 src={finalLogo}
// // //                 alt="HealthSync Logo"
// // //                 className="h-20 sm:h-24 md:h-28 w-auto max-w-[340px] object-contain"
// // //               />
// // //             </Link>

// // //             <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
// // //               Global leader in enterprise healthcare connectivity. Building the digital infrastructure for the future of medicine.
// // //             </p>

// // //             <div className="flex gap-3">
// // //               <Link 
// // //                 href="/infrastructure"
// // //                 title="Global Infrastructure"
// // //                 className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-[#1A1053] hover:bg-[#1A1053] hover:text-white transition-colors"
// // //               >
// // //                 <Globe className="h-4 w-4" />
// // //               </Link>
// // //               <Link 
// // //                 href="/solutions"
// // //                 title="Explore Solutions"
// // //                 className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-[#1A1053] hover:bg-[#1A1053] hover:text-white transition-colors"
// // //               >
// // //                 <Share2 className="h-4 w-4" />
// // //               </Link>
// // //               <a 
// // //                 href="mailto:enterprise@healthsync.io"
// // //                 title="Contact Enterprise Support"
// // //                 className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-[#1A1053] hover:bg-[#1A1053] hover:text-white transition-colors"
// // //               >
// // //                 <AtSign className="h-4 w-4" />
// // //               </a>
// // //             </div>
// // //           </div>

// // //           {/* Product Links */}
// // //           <div className="flex flex-col gap-4">
// // //             <h4 className="font-bold text-[#1A1053] text-sm tracking-wider uppercase mb-2">Product</h4>
// // //             <Link href="/solutions/claim-sync" className="text-sm text-slate-500 hover:text-[#1A1053] transition-colors">Hospital ERP</Link>
// // //             <Link href="/solutions/complaint-management" className="text-sm text-slate-500 hover:text-[#1A1053] transition-colors">Lab LIMS</Link>
// // //             <Link href="/solutions/incident-management" className="text-sm text-slate-500 hover:text-[#1A1053] transition-colors">Patient App</Link>
// // //             <Link href="/solutions/asset-management" className="text-sm text-slate-500 hover:text-[#1A1053] transition-colors">AI Assistant</Link>
// // //           </div>

// // //           {/* Resources Links */}
// // //           <div className="flex flex-col gap-4">
// // //             <h4 className="font-bold text-[#1A1053] text-sm tracking-wider uppercase mb-2">Resources</h4>
// // //             <Link href="/infrastructure" className="text-sm text-slate-500 hover:text-[#1A1053] transition-colors">API Documentation</Link>
// // //             <Link href="/compliance" className="text-sm text-slate-500 hover:text-[#1A1053] transition-colors">Security Portal</Link>
// // //             <Link href="/about" className="text-sm text-slate-500 hover:text-[#1A1053] transition-colors">Case Studies</Link>
// // //             <Link href="/hipaa" className="text-sm text-slate-500 hover:text-[#1A1053] transition-colors">Support Hub</Link>
// // //           </div>

// // //           {/* Legal Links */}
// // //           <div className="flex flex-col gap-4">
// // //             <h4 className="font-bold text-[#1A1053] text-sm tracking-wider uppercase mb-2">Legal</h4>
// // //             <Link href="/privacy" className="text-sm text-slate-500 hover:text-[#1A1053] transition-colors">Privacy Policy</Link>
// // //             <Link href="/compliance" className="text-sm text-slate-500 hover:text-[#1A1053] transition-colors">Compliance</Link>
// // //             <Link href="/terms" className="text-sm text-slate-500 hover:text-[#1A1053] transition-colors">Terms of Service</Link>
// // //             <Link href="/hipaa" className="text-sm text-slate-500 hover:text-[#1A1053] transition-colors">HIPAA Statement</Link>
// // //           </div>

// // //         </div>

// // //         {/* Bottom Bar */}
// // //         <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
// // //           <p className="text-xs text-slate-400">
// // //             © 2024 HealthSync Enterprise. HIPAA Compliant.
// // //           </p>
// // //           <div className="flex items-center gap-6 text-xs font-medium text-slate-500">
// // //             <Link href="/compliance" className="flex items-center gap-1.5 hover:text-slate-800 transition-colors">
// // //               <ShieldCheck className="h-4 w-4 text-green-500" /> SOC2 Certified
// // //             </Link>
// // //             <Link href="/hipaa" className="flex items-center gap-1.5 hover:text-slate-800 transition-colors">
// // //               <ShieldCheck className="h-4 w-4 text-green-500" /> ISO 27001
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </footer>
// // //   );
// // // }




// // "use client";

// // import {
// //   Globe,
// //   Share2,
// //   AtSign,
// //   ShieldCheck,
// //   ArrowRight,
// //   MapPin,
// //   Mail,
// //   Phone,
// // } from "lucide-react";
// // import Image from "next/image";
// // import Link from "next/link";
// // import finalLogo from "@/assets/images/final_logo.png";

// // const productLinks = [
// //   { label: "Hospital ERP", href: "/solutions/claim-sync" },
// //   { label: "Lab LIMS", href: "/solutions/complaint-management" },
// //   { label: "Patient App", href: "/solutions/incident-management" },
// //   { label: "AI Assistant", href: "/solutions/asset-management" },
// // ];

// // const resourceLinks = [
// //   { label: "API Documentation", href: "/infrastructure" },
// //   { label: "Security Portal", href: "/compliance" },
// //   { label: "Case Studies", href: "/about" },
// //   { label: "Support Hub", href: "/hipaa" },
// // ];

// // const legalLinks = [
// //   { label: "Privacy Policy", href: "/privacy" },
// //   { label: "Compliance", href: "/compliance" },
// //   { label: "Terms of Service", href: "/terms" },
// //   { label: "HIPAA Statement", href: "/hipaa" },
// // ];

// // const socialLinks = [
// //   { icon: Globe, href: "/infrastructure", label: "Global Infrastructure" },
// //   { icon: Share2, href: "/solutions", label: "Explore Solutions" },
// //   { icon: AtSign, href: "mailto:enterprise@healthsync.io", label: "Contact Support", isExternal: true },
// // ];

// // const certifications = [
// //   { label: "SOC2 Certified", href: "/compliance" },
// //   { label: "ISO 27001", href: "/hipaa" },
// //   { label: "HIPAA Compliant", href: "/hipaa" },
// // ];

// // export function Footer() {
// //   return (
// //     <footer className="relative overflow-hidden bg-[#0f0c29]">
// //       {/* Background effects */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#1A1053]/40 rounded-full blur-[120px]" />
// //         <div className="absolute bottom-0 right-[-10%] w-[500px] h-[400px] bg-[#1A1053]/30 rounded-full blur-[100px]" />
// //         <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `radial-gradient(circle, #fff 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }} />
// //       </div>

// //       {/* CTA Banner */}
// //       <div className="relative z-10 border-b border-white/[0.06]">
// //         <div className="container mx-auto px-5 md:px-8 lg:px-12 max-w-7xl py-8 md:py-15">
// //           <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
// //             <div className="max-w-xl text-center lg:text-left">
// //               <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
// //                 Ready to transform your{" "}
// //                 <span className="text-white/70">healthcare operations?</span>
// //               </h3>
// //               <p className="mt-4 text-base text-white/50 leading-relaxed">
// //                 Join 500+ healthcare organizations already streamlining their workflows with HealthSync.
// //               </p>
// //             </div>
// //             <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
// //               <Link
// //                 href="/demo"
// //                 className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[14px] font-semibold text-[#1A1053] shadow-[0_8px_30px_rgba(255,255,255,0.15)] transition-all duration-300 hover:bg-white/90 hover:shadow-[0_12px_40px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 active:translate-y-0"
// //               >
// //                 Request Demo
// //                 <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
// //               </Link>
// //               <Link
// //                 href="/contact"
// //                 className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-8 py-4 text-[14px] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30"
// //               >
// //                 Contact Sales
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Footer */}
// //       <div className="relative z-10 container mx-auto px-5 md:px-8 lg:px-12 max-w-7xl pt-20 pb-12">
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

// //           {/* Brand Column */}
// //           <div className="lg:col-span-4 flex flex-col gap-7">
// //             <Link href="/" className="flex items-center w-fit group">
// //               <Image
// //                 src={finalLogo}
// //                 alt="HealthSync Logo"
// //                 className="h-14 sm:h-16 w-auto max-w-[260px] object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
// //               />
// //             </Link>

// //             <p className="text-[15px] text-white/40 leading-relaxed max-w-sm">
// //               Global leader in enterprise healthcare connectivity. Building the digital infrastructure for the future of medicine.
// //             </p>

// //             <div className="flex flex-col gap-3 mt-2">
// //               <div className="flex items-center gap-3 text-sm text-white/40">
// //                 <MapPin className="h-4 w-4 shrink-0 text-white/30" />
// //                 <span>San Francisco, CA / Dubai, UAE</span>
// //               </div>
// //               <div className="flex items-center gap-3 text-sm text-white/40">
// //                 <Mail className="h-4 w-4 shrink-0 text-white/30" />
// //                 <a href="mailto:enterprise@healthsync.io" className="hover:text-white/70 transition-colors">
// //                   enterprise@healthsync.io
// //                 </a>
// //               </div>
// //               <div className="flex items-center gap-3 text-sm text-white/40">
// //                 <Phone className="h-4 w-4 shrink-0 text-white/30" />
// //                 <span>+1 (800) 555-0199</span>
// //               </div>
// //             </div>

// //             {/* Social Icons */}
// //             <div className="flex gap-3 mt-2">
// //               {socialLinks.map((social, i) => {
// //                 const Icon = social.icon;
// //                 const Component = social.isExternal ? "a" : Link;
// //                 return (
// //                   <Component
// //                     key={i}
// //                     href={social.href}
// //                     title={social.label}
// //                     {...(social.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
// //                     className="group flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.08] text-white/50 transition-all duration-300 hover:bg-[#1A1053] hover:border-[#1A1053] hover:text-white hover:shadow-[0_8px_20px_rgba(26,16,83,0.4)] hover:-translate-y-1"
// //                   >
// //                     <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
// //                   </Component>
// //                 );
// //               })}
// //             </div>
// //           </div>

// //           {/* Product Links */}
// //           <div className="lg:col-span-2 lg:col-start-6">
// //             <h4 className="text-xs font-bold tracking-[0.2em] text-white/30 uppercase mb-6">
// //               Product
// //             </h4>
// //             <ul className="flex flex-col gap-4">
// //               {productLinks.map((link, i) => (
// //                 <li key={i}>
// //                   <Link
// //                     href={link.href}
// //                     className="group relative inline-flex items-center text-[15px] text-white/50 transition-colors duration-300 hover:text-white"
// //                   >
// //                     <span className="relative">
// //                       {link.label}
// //                       <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-full" />
// //                     </span>
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Resources Links */}
// //           <div className="lg:col-span-2">
// //             <h4 className="text-xs font-bold tracking-[0.2em] text-white/30 uppercase mb-6">
// //               Resources
// //             </h4>
// //             <ul className="flex flex-col gap-4">
// //               {resourceLinks.map((link, i) => (
// //                 <li key={i}>
// //                   <Link
// //                     href={link.href}
// //                     className="group relative inline-flex items-center text-[15px] text-white/50 transition-colors duration-300 hover:text-white"
// //                   >
// //                     <span className="relative">
// //                       {link.label}
// //                       <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-full" />
// //                     </span>
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Legal Links */}
// //           <div className="lg:col-span-2">
// //             <h4 className="text-xs font-bold tracking-[0.2em] text-white/30 uppercase mb-6">
// //               Legal
// //             </h4>
// //             <ul className="flex flex-col gap-4">
// //               {legalLinks.map((link, i) => (
// //                 <li key={i}>
// //                   <Link
// //                     href={link.href}
// //                     className="group relative inline-flex items-center text-[15px] text-white/50 transition-colors duration-300 hover:text-white"
// //                   >
// //                     <span className="relative">
// //                       {link.label}
// //                       <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-full" />
// //                     </span>
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         </div>

// //         {/* Bottom Bar */}
// //         <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-6">
// //           <p className="text-sm text-white/30">
// //             © {new Date().getFullYear()} HealthSync Enterprise. All rights reserved.
// //           </p>

// //           <div className="flex flex-wrap items-center justify-center gap-5">
// //             {certifications.map((cert, i) => (
// //               <Link
// //                 key={i}
// //                 href={cert.href}
// //                 className="group flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/[0.06] px-4 py-2 text-xs font-medium text-white/40 transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-400"
// //               >
// //                 <ShieldCheck className="h-3.5 w-3.5 text-emerald-500/60 group-hover:text-emerald-400 transition-colors" />
// //                 {cert.label}
// //               </Link>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }






// "use client";

// import {
//   Globe,
//   Share2,
//   AtSign,
//   ShieldCheck,
//   ArrowRight,
//   ArrowUp,
//   MapPin,
//   Mail,
//   Phone,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import finalLogo from "@/assets/images/final_logo.png";

// const productLinks = [
//   { label: "Hospital ERP", href: "/solutions/claim-sync" },
//   { label: "Lab LIMS", href: "/solutions/complaint-management" },
//   { label: "Patient App", href: "/solutions/incident-management" },
//   { label: "AI Assistant", href: "/solutions/asset-management" },
// ];

// const resourceLinks = [
//   { label: "API Documentation", href: "/infrastructure" },
//   { label: "Security Portal", href: "/compliance" },
//   { label: "Case Studies", href: "/about" },
//   { label: "Support Hub", href: "/hipaa" },
// ];

// const legalLinks = [
//   { label: "Privacy Policy", href: "/privacy" },
//   { label: "Compliance", href: "/compliance" },
//   { label: "Terms of Service", href: "/terms" },
//   { label: "HIPAA Statement", href: "/hipaa" },
// ];

// const socialLinks = [
//   { icon: Globe, href: "/infrastructure", label: "Global Infrastructure" },
//   { icon: Share2, href: "/solutions", label: "Explore Solutions" },
//   { icon: AtSign, href: "mailto:enterprise@healthsync.io", label: "Contact Support", isExternal: true },
// ];

// const certifications = [
//   { label: "SOC2 Certified", href: "/compliance" },
//   { label: "ISO 27001", href: "/hipaa" },
//   { label: "HIPAA Compliant", href: "/hipaa" },
// ];

// export function Footer() {
//   const [email, setEmail] = useState("");
//   const [subscribed, setSubscribed] = useState(false);

//   const handleSubscribe = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email.trim()) return;
//     setSubscribed(true);
//     setEmail("");
//     setTimeout(() => setSubscribed(false), 3000);
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="relative overflow-hidden bg-[#0f0c29]">
//       {/* Background effects */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[280px] bg-[#1A1053]/40 rounded-full blur-[120px]" />
//         <div className="absolute bottom-0 right-[-10%] w-[500px] h-[350px] bg-[#1A1053]/30 rounded-full blur-[100px]" />
//         <div
//           className="absolute inset-0 opacity-[0.02]"
//           style={{ backgroundImage: `radial-gradient(circle, #fff 0.5px, transparent 0.5px)`, backgroundSize: "40px 40px" }}
//         />
//       </div>

//       {/* CTA Banner — reduced vertical padding */}
//       <div className="relative z-10 border-b border-white/[0.06]">
//         <div className="container mx-auto px-5 md:px-8 lg:px-12 max-w-7xl py-10 md:py-14">
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
//             <div className="max-w-xl text-center lg:text-left">
//               <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-tight">
//                 Ready to transform your{" "}
//                 <span className="text-white/70">healthcare operations?</span>
//               </h3>

//             </div>
//             <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0">
//               <Link
//                 href="/demo"
//                 className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold text-[#1A1053] shadow-[0_8px_30px_rgba(255,255,255,0.15)] transition-all duration-300 hover:bg-white/90 hover:shadow-[0_12px_40px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 active:translate-y-0"
//               >
//                 Request Demo
//                 <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//               </Link>
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-7 py-3.5 text-[14px] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30"
//               >
//                 Contact Sales
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Footer — tighter padding + newsletter added to brand column */}
//       <div className="relative z-10 container mx-auto px-5 md:px-8 lg:px-12 max-w-7xl pt-14 pb-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-10">

//           {/* Brand Column */}
//           <div className="lg:col-span-4 flex flex-col gap-6">
//             <Link href="/" className="flex items-center w-fit group">
//               <Image
//                 src={finalLogo}
//                 alt="HealthSync Logo"
//                 className="h-12 sm:h-14 w-auto max-w-[240px] object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
//               />
//             </Link>
// {/* 
//             <p className="text-[14px] text-white/40 leading-relaxed max-w-sm">
//               Global leader in enterprise healthcare connectivity. Building the digital infrastructure for the future of medicine.
//             </p> */}

//             {/* Newsletter signup */}
//             <form onSubmit={handleSubscribe} className="flex flex-col gap-2 max-w-sm">
//               <label className="text-xs font-bold tracking-[0.15em] text-white/30 uppercase">
//                 Stay updated
//               </label>
//               <div className="flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/[0.08] p-1.5 focus-within:border-white/25 transition-colors">
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="you@company.com"
//                   className="flex-1 bg-transparent outline-none px-3 text-sm text-white placeholder:text-white/30"
//                 />
//                 <button
//                   type="submit"
//                   className="shrink-0 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#1A1053] transition-all hover:bg-white/90 active:scale-95"
//                 >
//                   {subscribed ? "Subscribed" : "Subscribe"}
//                 </button>
//               </div>
//             </form>

//             <div className="flex flex-col gap-2.5 mt-1">
//               <div className="flex items-center gap-3 text-sm text-white/40">
//                 <MapPin className="h-4 w-4 shrink-0 text-white/30" />
//                 <span>San Francisco, CA / Dubai, UAE</span>
//               </div>
//               <div className="flex items-center gap-3 text-sm text-white/40">
//                 <Mail className="h-4 w-4 shrink-0 text-white/30" />
//                 <a href="mailto:enterprise@healthsync.io" className="hover:text-white/70 transition-colors">
//                   enterprise@healthsync.io
//                 </a>
//               </div>
//               <div className="flex items-center gap-3 text-sm text-white/40">
//                 <Phone className="h-4 w-4 shrink-0 text-white/30" />
//                 <span>+1 (800) 555-0199</span>
//               </div>
//             </div>

//             {/* Social Icons */}
//             <div className="flex gap-3 mt-1">
//               {socialLinks.map((social, i) => {
//                 const Icon = social.icon;
//                 const Component = social.isExternal ? "a" : Link;
//                 return (
//                   <Component
//                     key={i}
//                     href={social.href}
//                     title={social.label}
//                     {...(social.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
//                     className="group flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.08] text-white/50 transition-all duration-300 hover:bg-[#1A1053] hover:border-[#1A1053] hover:text-white hover:shadow-[0_8px_20px_rgba(26,16,83,0.4)] hover:-translate-y-1"
//                   >
//                     <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
//                   </Component>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Product Links */}
//           <div className="lg:col-span-2 lg:col-start-6">
//             <h4 className="text-xs font-bold tracking-[0.2em] text-white/30 uppercase mb-5">
//               Product
//             </h4>
//             <ul className="flex flex-col gap-3.5">
//               {productLinks.map((link, i) => (
//                 <li key={i}>
//                   <Link
//                     href={link.href}
//                     className="group relative inline-flex items-center text-[14px] text-white/50 transition-colors duration-300 hover:text-white"
//                   >
//                     <span className="relative">
//                       {link.label}
//                       <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-full" />
//                     </span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Resources Links */}
//           <div className="lg:col-span-2">
//             <h4 className="text-xs font-bold tracking-[0.2em] text-white/30 uppercase mb-5">
//               Resources
//             </h4>
//             <ul className="flex flex-col gap-3.5">
//               {resourceLinks.map((link, i) => (
//                 <li key={i}>
//                   <Link
//                     href={link.href}
//                     className="group relative inline-flex items-center text-[14px] text-white/50 transition-colors duration-300 hover:text-white"
//                   >
//                     <span className="relative">
//                       {link.label}
//                       <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-full" />
//                     </span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Legal Links */}
//           <div className="lg:col-span-2">
//             <h4 className="text-xs font-bold tracking-[0.2em] text-white/30 uppercase mb-5">
//               Legal
//             </h4>
//             <ul className="flex flex-col gap-3.5">
//               {legalLinks.map((link, i) => (
//                 <li key={i}>
//                   <Link
//                     href={link.href}
//                     className="group relative inline-flex items-center text-[14px] text-white/50 transition-colors duration-300 hover:text-white"
//                   >
//                     <span className="relative">
//                       {link.label}
//                       <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-full" />
//                     </span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-5">
//           {/* <p className="text-sm text-white/30">
//             © {new Date().getFullYear()} HealthSync Enterprise. All rights reserved.
//           </p> */}

//           <div className="flex flex-wrap items-center justify-center gap-4">
//             {certifications.map((cert, i) => (
//               <Link
//                 key={i}
//                 href={cert.href}
//                 className="group flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/[0.06] px-3.5 py-1.5 text-xs font-medium text-white/40 transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-400"
//               >
//                 <ShieldCheck className="h-3.5 w-3.5 text-emerald-500/60 group-hover:text-emerald-400 transition-colors" />
//                 {cert.label}
//               </Link>
//             ))}
//           </div>

//           <button
//             onClick={scrollToTop}
//             aria-label="Back to top"
//             className="group flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.05] border border-white/[0.08] text-white/50 transition-all duration-300 hover:bg-white/10 hover:text-white hover:-translate-y-1 shrink-0"
//           >
//             <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// }




"use client";

import {
  Globe,
  Share2,
  AtSign,
  ShieldCheck,
  ArrowRight,
  ArrowUp,
  MapPin,
  Mail,
  Phone,
  Check,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import finalLogo from "@/assets/images/final_logo.png";

const productLinks = [
  { label: "Hospital ERP", href: "/solutions/claim-sync" },
  { label: "Lab LIMS", href: "/solutions/complaint-management" },
  { label: "Patient App", href: "/solutions/incident-management" },
  { label: "AI Assistant", href: "/solutions/asset-management" },
];

const resourceLinks = [
  { label: "API Documentation", href: "/infrastructure" },
  { label: "Security Portal", href: "/compliance" },
  { label: "Case Studies", href: "/about" },
  { label: "Support Hub", href: "/hipaa" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Compliance", href: "/compliance" },
  { label: "Terms of Service", href: "/terms" },
  { label: "HIPAA Statement", href: "/hipaa" },
];

const socialLinks = [
  { icon: Globe, href: "/infrastructure", label: "Global Infrastructure" },
  { icon: Share2, href: "/solutions", label: "Explore Solutions" },
  { icon: AtSign, href: "mailto:enterprise@healthsync.io", label: "Contact Support", isExternal: true },
];

const certifications = [
  { label: "SOC2 Certified", href: "/compliance" },
  { label: "ISO 27001", href: "/hipaa" },
  { label: "HIPAA Compliant", href: "/hipaa" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#0f0c29]">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[220px] bg-[#1A1053]/40 rounded-full blur-[110px]" />
        <div className="absolute bottom-0 right-[-10%] w-[420px] h-[280px] bg-[#1A1053]/25 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: `radial-gradient(circle, #fff 0.5px, transparent 0.5px)`, backgroundSize: "40px 40px" }}
        />
      </div>

      {/* CTA Banner — compact single row */}
      <div className="relative z-10 border-b border-white/[0.06]">
        <div className="container mx-auto px-5 md:px-8 lg:px-12 max-w-7xl py-7 md:py-9">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <h3 className="text-lg md:text-xl font-bold text-white tracking-tight text-center lg:text-left">
              Ready to transform your{" "}
              <span className="text-white/60">healthcare operations?</span>
            </h3>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
              <Link
                href="/demo"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[13px] font-semibold text-[#1A1053] shadow-[0_6px_24px_rgba(255,255,255,0.15)] transition-all duration-300 hover:bg-white/90 hover:shadow-[0_10px_32px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 active:translate-y-0"
              >
                Request Demo
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-[13px] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer — compact grid */}
      <div className="relative z-10 container mx-auto px-5 md:px-8 lg:px-12 max-w-7xl pt-10 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 mb-8">

          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link href="/" className="flex items-center w-fit group">
              <Image
                src={finalLogo}
                alt="HealthSync Logo"
                className="h-10 sm:h-11 w-auto max-w-[210px] object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>

            {/* Newsletter signup */}
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 max-w-sm">
              <label className="text-[11px] font-bold tracking-[0.15em] text-white/30 uppercase">
                Stay updated
              </label>
              <div className="flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/[0.08] p-1.5 focus-within:border-white/25 focus-within:bg-white/[0.07] transition-all">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 bg-transparent outline-none px-3 text-sm text-white placeholder:text-white/30 min-w-0"
                />
                <button
                  type="submit"
                  className={`shrink-0 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-all active:scale-95 ${subscribed
                      ? "bg-emerald-500 text-white"
                      : "bg-white text-[#1A1053] hover:bg-white/90"
                    }`}
                >
                  {subscribed ? (
                    <>
                      <Check className="h-3.5 w-3.5" /> Done
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </div>
            </form>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2.5 text-[13px] text-white/40">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-white/30" />
                <span>San Francisco, CA / Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2.5 text-[13px] text-white/40">
                <Mail className="h-3.5 w-3.5 shrink-0 text-white/30" />
                <a href="mailto:enterprise@healthsync.io" className="hover:text-white/70 transition-colors">
                  enterprise@healthsync.io
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-[13px] text-white/40">
                <Phone className="h-3.5 w-3.5 shrink-0 text-white/30" />
                <span>+1 (800) 555-0199</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2.5">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                const Component = social.isExternal ? "a" : Link;
                return (
                  <Component
                    key={i}
                    href={social.href}
                    title={social.label}
                    {...(social.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] border border-white/[0.08] text-white/50 transition-all duration-300 hover:bg-[#1A1053] hover:border-[#1A1053] hover:text-white hover:shadow-[0_6px_16px_rgba(26,16,83,0.4)] hover:-translate-y-0.5"
                  >
                    <Icon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
                  </Component>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-white/30 uppercase mb-4">
              Product
            </h4>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="group relative inline-flex items-center text-[13.5px] text-white/50 transition-colors duration-300 hover:text-white"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-white/30 uppercase mb-4">
              Resources
            </h4>
            <ul className="flex flex-col gap-3">
              {resourceLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="group relative inline-flex items-center text-[13.5px] text-white/50 transition-colors duration-300 hover:text-white"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-white/30 uppercase mb-4">
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="group relative inline-flex items-center text-[13.5px] text-white/50 transition-colors duration-300 hover:text-white"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar — single row, badges left, back-to-top right */}
        <div className="pt-5 border-t border-white/[0.06] flex flex-wrap items-center justify-center md:justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {certifications.map((cert, i) => (
              <Link
                key={i}
                href={cert.href}
                className="group flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] px-3 py-1.5 text-[11px] font-medium text-white/40 transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-400"
              >
                <ShieldCheck className="h-3 w-3 text-emerald-500/60 group-hover:text-emerald-400 transition-colors" />
                {cert.label}
              </Link>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.05] border border-white/[0.08] text-white/50 transition-all duration-300 hover:bg-white/10 hover:text-white hover:-translate-y-1 shrink-0"
          >
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}