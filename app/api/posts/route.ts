import prisma from "@/lib/connect";
import { NextResponse } from "next/server";

export const GET = async() => {
  try {
    const posts = await prisma.post.findMany();
    return NextResponse.json(posts, {status: 200});
  } catch (error) {
    return NextResponse.json({error: "Something went wrong"}, {status: 500});
  }
};