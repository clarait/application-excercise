import React from "react";

interface PostDetailsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  createdAt: Date;
}

function PostDetailsCard(props: PostDetailsCardProps) {
  return (
    <div className="flex grow flex-col items-center bg-white">
      <h1 className="w-full border-b-2 border-black bg-teal-400 px-4 py-6 text-center text-4xl font-light">
        {props.title}
      </h1>
      <p className="max-w-4xl grow px-8 py-12 text-lg font-light">
        {props.children}
      </p>
      <p className="w-full border-t-2 border-black bg-yellow-400 p-3 text-left font-light">
        Blog post created on: {props.createdAt.toLocaleString()}
      </p>
    </div>
  );
}

export default PostDetailsCard;
