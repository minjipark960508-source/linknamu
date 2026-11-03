import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { incrementClick } from "@/lib/mongodb";

export async function POST(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  // 등록된 링크만 집계 (임의 키 생성 방지)
  if (!links.some((link) => link.id === id)) {
    return NextResponse.json({ error: "Unknown link" }, { status: 404 });
  }

  try {
    const count = await incrementClick(id);
    return NextResponse.json({ id, count });
  } catch (err) {
    console.error("클릭 수 저장 실패:", err);
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }
}
