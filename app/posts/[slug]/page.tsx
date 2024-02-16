import PageContainer from "@/components/page-container"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Post } from "@/utils/types"
import { Eye, MessageCircle } from "lucide-react"

export default function SinglePostPage() {
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
  }

  return (
    <PageContainer>
      <div className="p-8">
        <div
          style={{backgroundImage: "url('/img/hero_bg.jpg')"}}
          className="rounded-lg aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-center shadow-lg"
        >
          <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="sm:max-w-xl max-w-xs bg-secondary-foreground/80 p-4 rounded-lg">
                <h1 className="font-bold text-3xl sm:text-5xl text-white dark:text-black text-center">
                  {POST.title}
                </h1>
              </div>
          </div>
        </div>
        <div className="flex justify-between items-center p-4 mb-3">
          <div className="flex justify-center items-center gap-3">
            <Avatar>
              <AvatarImage src="/img/shadcn_avatar.jpg" alt="John ReactDev" />
              <AvatarFallback>{POST.author}</AvatarFallback>
            </Avatar>
            <div>
              <p>{POST.author}</p>
              <p className="text-slate-500 text-sm">
                Posted on {new Date(POST.date).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <MessageCircle size={20} />
              <p>{POST.nbComments}</p>
            </div>
            <div className="flex items-center gap-1">
              <Eye size={20} />
              <p>{POST.nbViews}</p>
            </div>
          </div>
        </div>
        <Separator />
        <div className="mt-6" 
          dangerouslySetInnerHTML={{__html: POST.content as string}}
        />
      </div>
    </PageContainer>
  )
}
