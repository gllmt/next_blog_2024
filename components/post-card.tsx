import { PostWithCategory } from "@/utils/types"
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Eye, MessageCircle } from "lucide-react";

type Props = {
    post: PostWithCategory;
}

export default function PostCard({post}: Props) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <Card className="flex flex-col justify-between rounded-lg border-2 h-[100%]">
        <CardHeader>
          <div className="relative overflow-hidden aspect-square">
            <Image
              src={post.image || "/img/hero_bg.jpg"}
              alt={post.title}
              fill={true}
              loading="lazy"
              className="aspect-square object-cover transition-all duration-300 hover:scale-105"
            />
          </div>
          <p className="font-semibold text-lg mt-3">{post.title}</p>
        </CardHeader>
        <CardContent>
          <Badge variant="outline" className="py-2 px-4">
            {post.cat.title}
          </Badge>
        </CardContent>
        <CardFooter>
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <MessageCircle size={16} className="text-slate-500" />
              <p className="text-slate-500">{post.nbComments}</p>
            </div>
            <div className="flex items-center gap-1">
              <Eye size={16} className="text-slate-500" />
              <p className="text-slate-500">{post.view}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
