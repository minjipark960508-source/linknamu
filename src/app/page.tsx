import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import { links, profile } from "@/data/profile";
import { getClickCounts } from "@/lib/mongodb";

// 클릭 수를 매 요청마다 최신으로 보여주기 위해 동적 렌더링
export const dynamic = "force-dynamic";

export default async function Home() {
  const counts = await getClickCounts();

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col items-center px-4 py-12 sm:py-16">
      {/* 상단: 원형 프로필 사진 + 이름 + 한 줄 소개 */}
      <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />

      {/* 하단: 링크 카드 세로 배치 */}
      <LinkList links={links} initialCounts={counts} />

      <footer className="mt-auto pt-12 text-xs text-neutral-400">
        🌳 링크나무
      </footer>
    </main>
  );
}
