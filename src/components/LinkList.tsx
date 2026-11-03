import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

type Props = {
  links: LinkItem[];
  initialCounts: Record<string, number>;
};

export default function LinkList({ links, initialCounts }: Props) {
  return (
    <ul className="mt-8 flex w-full flex-col gap-5">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard link={link} initialCount={initialCounts[link.id] ?? 0} />
        </li>
      ))}
    </ul>
  );
}
