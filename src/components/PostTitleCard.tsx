import Link from "next/link";
import React from "react";

interface PostTitleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  createdAt: Date;
}

function PostTitleCard(props: PostTitleCardProps) {
  return (
    <Link
      href={`/post/${props.id}`}
      className="flex h-full flex-col rounded-md border-2 border-black shadow-brutalist"
    >
      <h4 className="grow border-b-2 border-black bg-teal-400 px-6 py-6 text-xl font-light">
        {props.title}
      </h4>
      <p className="px-6 py-4 font-light">
        Created on: {props.createdAt.toLocaleString()}
      </p>
    </Link>
  );
}

export default PostTitleCard;
