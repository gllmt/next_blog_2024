import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { Button } from "./ui/button";
import { CATEGORIES } from "@/utils/data/categories";
import { Category } from "@/utils/types";

export default function ResponsiveMenu() {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className="h-6 w-6 md:inline lg:hidden" />
        </SheetTrigger>
        <SheetContent>
            <div className="flex flex-col gap-4">
                <Link href="/write">
                    <Button variant="ghost">Write a post</Button>
                </Link>
                <p className="text-xl font-medium">Categories</p>
                {CATEGORIES.map((category: Category) => (
                    <Link 
                        key={category.id} 
                        href={`/categories/${category.slug}`}
                        className="block"
                    >
                        <Button variant="ghost">{category.name}</Button>
                    </Link>
                ))}
            </div>
        </SheetContent>
    </Sheet>
  )
}
