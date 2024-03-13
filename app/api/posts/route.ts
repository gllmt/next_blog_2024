import { getAuthSession } from "@/lib/auth-options";
import prisma from "@/lib/connect";
import { NextResponse } from "next/server";
// import { CATEGORY_SLUG } from "@/lib/constants";

export const GET = async(req: Request) => {
  try {
    // const session = await getAuthSession();

    // if (!session || !session.user) {
    //   return NextResponse.json({ message: "You are not authorized"}, {status: 403});
    // }

    const {searchParams} = new URL(req.url);
    const catSlug = searchParams.get("cat");

    const posts = await prisma.post.findMany({
      where: {
        ...(catSlug && catSlug !== "null" && catSlug !== "" && {catSlug}),
      },
      include: {
        cat: true
      },
    });
    return NextResponse.json(posts, {status: 200});
  } catch (error) {
    return NextResponse.json({error: "Something went wrong"}, {status: 500});
  }
};