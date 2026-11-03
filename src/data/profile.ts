export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile = {
  name: "박민지",
  bio: "대웅제약 교육간호사 | 새로운 취미 도전중",
  image: "/avatar.svg",
};

// 링크 카드 목록 — id는 클릭 수 집계 키로 쓰이니 바꾸지 마세요.
export const links: LinkItem[] = [
  { id: "github", title: "🐙 깃허브", url: "https://github.com/minjipark960508-source" },
  // TODO: 실제 블로그 주소로 교체
  { id: "blog", title: "✍️ 블로그", url: "https://example.com/" },
  { id: "email", title: "📧 이메일", url: "mailto:minjipark960508@gmail.com" },
];
