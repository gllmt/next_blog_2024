// /api/categories

import { Category } from "@/utils/types";
import { NextResponse } from "next/server"

export const CATEGORIES: Category[] = [
    {
        id: 1,
        name: "JavaScript",
        slug: "javascript"
    },
    {
        id: 2,
        name: "React",
        slug: "react"
    },
    {
        id: 3,
        name: "Next.js",
        slug: "nextjs"
    },
    {
        id: 4,
        name: "Tailwind CSS",
        slug: "tailwindcss"
    },
    {
        id: 5,
        name: "Node.js",
        slug: "nodejs"
    }
];

// GET POST PUT
export const GET = async () => {
    return NextResponse.json(CATEGORIES, { status: 200 });
    // get all categories
    // res.json({ categories: [] })
}