import { usePathname } from "next/navigation";
import Link from "next/link";

type VideoLinkProps = {
    href: string;
  };

export default function VideoLink ({ href }: VideoLinkProps){
    const pathname = usePathname();

    return(
    <Link href={href}>
        <div className={`${
              pathname === `${href}`
                ? "bg-gray-200 rounded-md"
                : "hover:bg-gray-100 rounded-md"
            } flex space-x-1 text-gray-800 p-2`}>
            <img className="w-24 h-14" src="/next.svg" alt="" />
            <div className="flex flex-col">
                <h2>Video name</h2>
                <p> meta data</p>
            </div>
        </div>
    </Link>
    )}