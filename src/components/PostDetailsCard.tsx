import React from "react";

interface PostDetailsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  createdAt: Date;
}

function PostDetailsCard(props: PostDetailsCardProps) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.createdAt.toString()}</p>
      <p>{props.children}</p>
    </div>
  );
}

export default PostDetailsCard;
