import { Post } from "@/utils/types";
// import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
import prisma from "@/lib/connect";

const POST: Post = {
    id: 1,
    category: "React",
    title: "React State Management: Choosing the Right Solution",
    image: "/react-state-management.jpg",
    caption:
      "Explore different state management solutions in React and choose the one that fits your needs.",
    date: "2023-01-15",
    minutesToRead: 10,
    author: "John ReactDev",
    nbViews: 25,
    nbComments: 8,
    slug: "react-state-management-choosing-right-solution",
    content: "lorem ipsum ..."
};

// GET SINGLE POST
export const GET = async (
    req: Request, 
    {params}: { params: { slug: string }}
) => {
    const { slug } = params;

    try {
        const post = await prisma.post.update({
            where: { slug },
            data: { view : { increment: 1 } }
        });
        return NextResponse.json(post, { status: 200 });

    } catch (error) {
        return NextResponse.json({error:"something went wrong !" }, { status: 500 });
    }
};