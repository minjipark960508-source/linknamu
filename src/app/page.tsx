import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import { links, profile } from "@/data/profile";

// 클릭 수는 페이지가 열린 뒤 LinkList가 /api/clicks에서 가져온다
export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col items-center px-4 py-12 sm:py-16">
      {/* 상단: 원형 프로필 사진 + 이름 + 한 줄 소개 */}
      <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />

      {/* 하단: 링크 카드 세로 배치 */}
      <LinkList links={links} />

      <footer className="mt-auto pt-12 text-xs text-neutral-400">
        🌳 링크나무
      </footer>
    </main>
  );
}
