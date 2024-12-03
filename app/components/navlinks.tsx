import { usePathname } from "next/navigation";
import Link from "next/link";

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
  };

export default function NavLink ({ href, children }: NavLinkProps){
    const pathname = usePathname();
    const isActive = pathname.startsWith(href); 

    return(
      <Link href={href}>
         <div className="relative block group">
              <div className="flex h-full items-center absolute -left-3 group">
              <div
                className={`${
                  isActive ? "h-10 bg-gray-800" : "h-5 scale-0 group-hover:opacity-100"
                } w-1 transition-all duration-200 rounded-r`}>
                </div>
              </div>
              <div className="group-active:translate-y-px">
                <div 
                className={`${
                  isActive
                    ? "bg-white rounded-2xl"
                    : "hover: rounded-3xl bg-gray-800 text-gray-100 hover:rounded-2xl hover:text-white"
                } flex items-center justify-center h-12 w-12 transition-all duration-200 overflow-hidden`}>
                  {children}
                </div>
              </div>
            </div>
      </Link>
    )}