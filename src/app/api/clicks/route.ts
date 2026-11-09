import { NextResponse } from "next/server";
import { getClickCounts } from "@/lib/mongodb";

// 항상 최신 클릭 수를 돌려주도록 캐시하지 않음
export const dynamic = "force-dynamic";

/** 모든 링크의 클릭 수를 한 번에 반환: { github: 42, blog: 3, ... } */
export async function GET() {
  const counts = await getClickCounts();
  return NextResponse.json(counts, {
    headers: { "Cache-Control": "no-store" },
  });
}
