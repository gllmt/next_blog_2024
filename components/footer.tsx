import { CATEGORIES } from "@/utils/data/categories";
import PageContainer from "./page-container";
import Link from "next/link";
import { Category } from "@/utils/types";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="p-4 border-t">
        <PageContainer>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <Link className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-emerald-500" href="/">NextBlog</Link>
                <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
                    {CATEGORIES.map((category: Category) => (
                        <div key={category.id}>
                            <Link href={`/categories/${category.slug}`}>
                                <Button variant="ghost">
                                    {category.name}
                                </Button>
                            </Link>
                        </div>
                    ))}
                    <Link href="/write">
                        <Button variant="ghost">Write a post</Button>
                    </Link>
                </div>
            </div>
        </PageContainer>
    </footer>
  )
}
