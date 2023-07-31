import React from "react";

interface PostDetailsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  createdAt: Date;
}

function PostDetailsCard(props: PostDetailsCardProps) {
  return <div>PostDetailsCard</div>;
}

export default PostDetailsCard;
