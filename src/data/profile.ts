export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

// TODO: 보여 주기용 더미 값 — 나중에 진짜 내용으로 교체
export const profile = {
  name: "박민지",
  bio: "간호사로 일하다가, 현재는 대웅제약 신사업전략 2팀에서 교육간호사로 일하고 있어요.",
  image: "/avatar.svg",
};

// 링크 카드 목록 — id는 클릭 수 집계 키로 쓰이니 바꾸지 마세요.
export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com/" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/" },
  { id: "blog", title: "Blog", url: "https://example.com/" },
];
