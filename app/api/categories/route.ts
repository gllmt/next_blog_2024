// /api/categories

// import { Category } from "@/utils/types";
import { NextResponse } from "next/server"
import prisma from "@/lib/connect";


// GET POST PUT
export const GET = async () => {
    try {
        const categories = await prisma.category.findMany();
        return NextResponse.json(categories, { status: 200 });
    } catch (error) {
        return NextResponse.json({error: "Something went wrong !"}, { status: 500 });
    }
    // get all categories
    // res.json({ categories: [] })
}