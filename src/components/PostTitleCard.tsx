import Link from "next/link";
import React from "react";

interface PostTitleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  createdAt: Date;
}

function PostTitleCard(props: PostTitleCardProps) {
  return (
    <Link href={`/post/${props.id}`}>
      <h4>{props.title}</h4>
      <p>{props.createdAt.toString()}</p>
    </Link>
  );
}

export default PostTitleCard;
