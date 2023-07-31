import PostTitleCard from "~/components/PostTitleCard";
import { api } from "~/utils/api";

export default function Home() {
  const posts = api.posts.getAll.useQuery();
  if (posts.isLoading)
    return (
      <main>
        <p className="px-20 py-8 font-light">Loading feed...</p>
      </main>
    );
  if (posts.isError)
    return (
      <main>
        <p className="px-20 py-8 font-light">
          Error occurred while fetching the posts.
        </p>
      </main>
    );
  else if (posts.data)
    return (
      <main className="bg-white">
        <ul className="grid grid-cols-1 gap-8 px-20 py-8 md:grid-cols-3">
          {posts.data.map((post) => {
            return (
              <li key={post.id}>
                <PostTitleCard
                  id={post.id}
                  title={post.title}
                  createdAt={post.createdAt}
                />
              </li>
            );
          })}
        </ul>
      </main>
    );
}
