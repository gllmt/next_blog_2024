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
import Image from "next/image";

export default function WritePage() {
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [content, setContent] = useState("");

  const [file, setFile] = useState<File>();
  const [imageObjectUrl, setImageObjectUrl] = useState<string | null>(null);

  const {data: categories, isFetching} = useCategories();
  
  const router = useRouter();

  const createPost = (newPost: Partial<Post>) => axios.post("/api/posts", newPost).then((res) => res.data);
  
  const {mutate, isLoading} = useMutation(createPost,
  {
    onSuccess: (data: Post) => {
      router.push(`/posts/${data.slug}`);
    },
  }
  )

  const {data: session, status} = useSession();


  const onChangeFile = (e:SyntheticEvent) => {
    const files = (e.target as HTMLInputElement).files;

    if (!files || !files[0]) return;

    setFile(files[0]);
    setImageObjectUrl(URL.createObjectURL(files[0]));
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const image = await uploadImage();
    console.log("image is : ", image);

    if (title !== "" && content !== "" && catSlug !== "" && image) {
      await mutate({
        title,
        content,
        catSlug,
        slug: slugify(title),
        image: image,
      });
    }
  };

  const uploadImage = async () => {
    try {
      if (!file) return;

      const data = new FormData();
      data.set("file", file);

      const response = await axios.post("/api/upload", data);
      return response.data;

    } catch (error) {
      console.error("Error in uploadImage : ", error);
    }
  };

  if (!session) {
    router.replace("/login");
  }

  return (
    <PageContainer>
      <div className="p-10">
        <PageTitle title="Write a new post" />
        {/* Image */}
        <div className="mb-6">
          {imageObjectUrl && (
            <div className="relative w-40 h-40 mx-auto mb-3 flex">
              <Image
                className="object-cover rounded-lg"
                src={imageObjectUrl} 
                fill
                alt={title}
              />
            </div>
          )}
          <Input type="file" name="image" onChange={onChangeFile} />
        </div>
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
        <Button disabled={isLoading} className="mt-6" onClick={handleSubmit}>
          {isLoading ? "Creating..." : "Publish"}
        </Button>
      </div>
    </PageContainer>
  )
}
