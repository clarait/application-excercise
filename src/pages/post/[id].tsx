import React from "react";
import { useRouter } from "next/router";
import PostDetailsCard from "~/components/PostDetailsCard";
import { api } from "~/utils/api";

function Post() {
  const router = useRouter();
  const post = api.posts.getDetails.useQuery(router.query.id as string);
  if (post.isLoading) return <p>Loading...</p>;
  if (post.isError) return <p>Error occurred while fetching the post.</p>;
  else if (post.data)
    return (
      <main className="flex grow flex-col">
        <PostDetailsCard
          title={post.data.title}
          createdAt={post.data.createdAt}
        >
          {post.data.content}
        </PostDetailsCard>
      </main>
    );
}

export default Post;
