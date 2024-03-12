import { PostWithCategory } from "@/utils/types"
import PostCard from "./post-card";

type Props = {
    posts: PostWithCategory[];
}

export default function PostsList({
    posts
}: Props) {
  return (
    <div
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6"
    >
        {posts.map((post: PostWithCategory) => (
            <PostCard key={post.id} post={post} />
        ))}
    </div>
  )
}
