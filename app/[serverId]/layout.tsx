'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { use } from "react";
import VideoLink from "../components/videolinks";

export default function ServerLayout({
  children,
  params: paramsPromise,
}: {
  children: React.ReactNode;
  params: Promise<{ serverId: string }>; 
}) {

  const params = use(paramsPromise);

  const videoList = [
    { id: "video1", name: "Introduction" },
    { id: "video2", name: "Deep Dive" },
    { id: "video3", name: "Deep Dive" },
    { id: "video4", name: "Deep Dive" },
    { id: "video5", name: "Deep Dive" },
    { id: "video6", name: "Deep Dive" },
    { id: "video7", name: "Deep Dive" },
    { id: "video8", name: "Deep Dive" },
    { id: "video9", name: "Deep Dive" },
  ];

  const pathname = usePathname();

  return (
    <div className="flex h-full">
      <div className="w-96 flex flex-col p-4 space-y-1 overflow-y-auto scrollbar-hidden">
        {videoList.map((video) => (
          <VideoLink
            key={video.id}
            href={`/${params.serverId}/${video.id}`}>
          </VideoLink>
        ))}
      </div>
      {/* Main Content */}
      <div className="flex-1 justify-center">{children}</div>
    </div>
  );
}
