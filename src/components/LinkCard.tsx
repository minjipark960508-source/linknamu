import type { LinkItem } from "@/data/profile";

type Props = {
  link: LinkItem;
  count: number;
  onClick: () => void;
};

export default function LinkCard({ link, count, onClick }: Props) {
  // mailto: 링크는 새 탭을 열면 빈 탭이 남으므로 같은 창에서 메일 앱을 연다
  const isMail = link.url.startsWith("mailto:");

  return (
    <a
      href={link.url}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noopener noreferrer"}
      onClick={onClick}
      className="flex w-full items-center justify-between rounded-2xl border-2 border-neutral-900 bg-white px-5 py-4 font-medium shadow-[3px_3px_0_0_#171717] transition active:translate-x-[3px] active:translate-y-[3px] active:shadow-none hover:bg-leaf"
    >
      <span>{link.title}</span>
      <span className="text-xs font-normal text-neutral-500 tabular-nums">
        {count.toLocaleString()}회
      </span>
    </a>
  );
}
