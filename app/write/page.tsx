"use client";

import PageContainer from "@/components/page-container";
import PageTitle from "@/components/page-title";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCategories } from "@/hooks/useCategories";
import { Category, Post } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Button } from "@/components/ui/button";
import { useMutation } from "react-query";
import axios from "axios";
import { slugify } from "@/utils/slugify";

export default function WritePage() {
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [content, setContent] = useState("");

  const {data: categories, isFetching} = useCategories();

  const {mutate, isLoading} = useMutation((newPost: Partial<Post>) => axios.post("/api/posts", newPost),
  {
    onSuccess: (data) => {
      console.log(data);
    },
  }
  )

  const {data: session, status} = useSession();

  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (title !== "" && content !== "" && catSlug !== "") {
      await mutate({
        title,
        content,
        catSlug,
        slug: slugify(title),
        image: "/img/hero_bg.jpg"
      });
    }
  };

  // if (!session) {
  //   router.replace("/login");
  // }

  return (
    <PageContainer>
      <div className="p-10">
        <PageTitle title="Write a new post" />
        {/* Title post */}
        <Input 
          type="text" 
          placeholder="Title" 
          className="mb-6" 
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* Category / select */}
        {isFetching ? <p>Loading categories</p> : 
        <Select onValueChange={(value) => setCatSlug(value)}>
          <SelectTrigger>
            <SelectValue placeholder="select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category: Category) => (
              <SelectItem key={category.id} value={category.slug}>
                {category.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>}
        {/* Content */}
        <ReactQuill
          className="mt-6" 
          placeholder="Write post content here..."
          value={content}
          onChange={setContent}
        />
        {/* Submit button */}
        <Button className="mt-6" onClick={handleSubmit}>Publish</Button>
      </div>
    </PageContainer>
  )
}
