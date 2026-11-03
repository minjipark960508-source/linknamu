"use client";

import { useState } from "react";
import type { LinkItem } from "@/data/profile";

type Props = {
  link: LinkItem;
  initialCount: number;
};

export default function LinkCard({ link, initialCount }: Props) {
  const [count, setCount] = useState(initialCount);

  const handleClick = () => {
    setCount((c) => c + 1);
    // keepalive: 새 탭으로 이동해도 요청이 끝까지 전송되도록
    fetch(`/api/clicks/${encodeURIComponent(link.id)}`, {
      method: "POST",
      keepalive: true,
    }).catch(() => {});
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="flex w-full items-center justify-between rounded-2xl border-2 border-neutral-900 bg-white px-5 py-4 font-medium shadow-[3px_3px_0_0_#171717] transition active:translate-x-[3px] active:translate-y-[3px] active:shadow-none hover:bg-leaf"
    >
      <span>{link.title}</span>
      <span className="text-xs font-normal text-neutral-500">
        {count.toLocaleString()} 클릭
      </span>
    </a>
  );
}
