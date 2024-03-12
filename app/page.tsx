"use client";

import PageContainer from "@/components/page-container";
import PostsList from "@/components/posts-list";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCategories } from "@/hooks/useCategories";
import { usePosts } from "@/hooks/usePosts";
import { Category } from "@prisma/client";
// import { CATEGORIES } from "@/utils/data/categories";
// import { POSTS } from "@/utils/data/posts";
// import { Category } from "@/utils/types";
import Link from "next/link";

export default function Home() {
  // gets posts from db
  const {data: posts, isFetching} = usePosts();

  const {data: categories} = useCategories();

  return (
    <PageContainer>
      <div className="py-10 px-4">
        {/* Hero section */}
        <div
          style={{backgroundImage: "url('/img/hero_bg.jpg')"}}
          className="rounded-lg aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-center shadow-lg"
        >
          <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="sm:max-w-xl max-w-xs bg-secondary-foreground/80 p-4 rounded-lg">
                <h1 className="font-bold text-3xl sm:text-5xl text-white dark:text-black text-center">
                  Become A Better React Developer
                </h1>
                <Input type="email" placeholder="Enter your email" className="light:bg-white mt-4" />
                <Button size="lg" variant="outline" className="w-full py-6 text-xl mt-4">Subscibe to our newsletter</Button>
              </div>
          </div>
        </div>
        {/* Categories section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
          {categories?.map((category: Category) => (
            <Button key={category.id} variant="outline">
              <Link href={`/categories/${category.slug}`}>{category.title}</Link>
            </Button>
          ))}
        </div>
        {/* List Posts section */}
        {!isFetching && <PostsList posts={posts} />}
      </div>
    </PageContainer>
  );
}
