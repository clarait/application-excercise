import React from "react";
import { useRouter } from "next/router";
import PostDetailsCard from "~/components/PostDetailsCard";

function Post() {
  const router = useRouter();
  return (
    <div>
      <PostDetailsCard
        id="getid"
        title="gettitle"
        createdAt={new Date(2021)}
      ></PostDetailsCard>
    </div>
  );
}

export default Post;
