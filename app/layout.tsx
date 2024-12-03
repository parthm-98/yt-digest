'use client'

import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./components/navlinks";
import AddIcon from "./components/addicon";
import HomeIcon from "./components/homeicon";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) 
{
  let servers = [
    { id: "1", img: "/customers/amy-burns.png" },
    { id: "2", img: "/customers/balazs-orban.png" },
    { id: "3", img: "/customers/delba-de-oliveira.png" },
    { id: "4", img: "/customers/evil-rabbit.png" },
    { id: "5", img: "/customers/lee-robinson.png" },
    { id: "6", img: "/customers/michael-novotny.png" },
  ];
  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-200">
        {/* Channel List */}
        <div className="flex h-full flex-col p-3 space-y-2 overflow-y-auto scrollbar-hidden scroll-smooth">
          <NavLink href="/home">
            <HomeIcon className=" transition-all duration-200 overflow-hidden hover:rounded-2xl"/>
          </NavLink>
        <div className="h-[2px] bg-gray-300 rounded-full"></div>
        {servers.map((server) => (
          <NavLink href={`/server${server.id}`} key={server.id}>
            <img src={`${server.img}`} alt="" />
          </NavLink>
        ))}
        <Link href="/search">
          <div className="flex items-center justify-center bg-gray-300 h-12 w-12 rounded-full">
            <AddIcon className=" transition-all duration-200 overflow-hidden hover:rounded-2xl"/>
          </div>
        </Link>
        </div>        
        <div className="flex-1 h-full pr-3 py-3">
          <div className="flex-1 h-full bg-white rounded-md shadow-lg overflow-hidden">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}