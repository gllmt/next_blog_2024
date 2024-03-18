import { getAuthSession } from "@/lib/auth-options";
import { NextResponse } from "next/server";
import prisma from "@/lib/connect";

export const GET = async (req: Request) => {
  try {
    const {searchParams} = new URL(req.url);
    const postSlug = searchParams.get("slug");

    if(!postSlug) return NextResponse.json({error: "Post Slug is required !"}, {status: 500});

    const comments = await prisma.comment.findMany({
      where: {postSlug},
      include: {user: true}
    });

    return NextResponse.json(comments, {status: 200});
  } catch (error) {
    return NextResponse.json({error: "Something went wrong"}, {status: 500});
  }
};

export const POST = async (req: Request) => {
   const session = await getAuthSession();

   if(!session || !session.user) {
      return NextResponse.json({error: "Unauthorized"}, {status: 403});
    }
    
    try {
      const body = await req.json();
      const comment = await prisma.comment.create({
        data: {...body, userEmail: session.user.email}
      });
      return NextResponse.json(comment, {status: 200});
   } catch (error) {
     return NextResponse.json({error: "Something went wrong"}, {status: 500});
   }
};