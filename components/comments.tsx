"use client";

import React, { SyntheticEvent, useState } from "react"
import { Separator } from "./ui/separator"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useMutation } from "react-query";
import axios from "axios";
import { Comment } from "@prisma/client";
import { useComments } from "@/hooks/useComments";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { CommentWithUser } from "@/utils/types";

function Comments({postSlug}: {postSlug: string}) {

  const {status} = useSession();
  const [content, setContent] = useState("");

  const createComment = (newComment: Partial<Comment>) => {
    return axios.post("/api/comments", newComment).then(res => res.data)
  };

  const {mutate, isLoading} = useMutation(createComment, {
    onSuccess: (data: Comment) => {
      console.log("Comment created successfully", data);
    }
  });
  
  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    mutate({content, postSlug});
  };

  const {data: comments, isFetching} = useComments(postSlug);

  return (
    <div className="mt-10">
      <Separator />
      <h2 className="text-2xl text-slate-500 font-semibold mt-4">Comments</h2>
      {/* Formulaire */}
      <div className="mt-2 mb-6">
        {status === "authenticated" ? <div className="">
          <Textarea 
            placeholder="Write a comment..." 
            onChange={e => setContent(e.target.value)} 
          />
          <Button 
            disabled={content === "" || isLoading} 
            className="mt-4"
            onClick={onSubmit}
            >
            {isLoading ? "Adding your comment" : "Add your comment"}
          </Button>
        </div> : <Link href="/login" className="underline">Login to write a comment</Link>}
      </div>

      {/* List of comments */}
      {isFetching ? <p>Loading comments...</p> : (
        comments.map((comment: CommentWithUser) => (
          <div className="flex items-center mt-4" key={comment.id}>
            <Avatar>
              <AvatarImage src={comment.user.image || "/img/shadcn_avatar.jpg"} alt="" />
              <AvatarFallback>{comment.user.name}</AvatarFallback>
            </Avatar>
            
            <div className="ml-3 p-4 border border-slate-400 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{comment.user.name}</span>
                <span className="text-sm text-slate-500">{new Date(comment.createdAt).toLocaleDateString()}</span>
              </div>

              <p className="mt-2">{comment.content}</p>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Comments