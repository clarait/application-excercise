import router from "next/router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { api } from "~/utils/api";
import { createPostSchema, createPostType } from "~/utils/postSchema";
import { zodResolver } from "@hookform/resolvers/zod";

function CreateNewPost() {
  const { register, handleSubmit, formState } = useForm<createPostType>({
    resolver: zodResolver(createPostSchema),
    mode: "onTouched",
  });
  const createPost = api.posts.createUser.useMutation();
  const onSubmit: SubmitHandler<createPostType> = (data) =>
    createPost.mutate(data);
  if (createPost.isSuccess) {
    router.push("/");
  }
  return (
    <main className="flex grow flex-col items-center bg-white">
      <h1 className="w-full border-b-2 border-black bg-yellow-400 px-4 py-6 text-center text-4xl font-light">
        Create new post
      </h1>
      <div className="flex w-full grow px-8 pb-16 pt-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex w-full max-w-4xl grow flex-col gap-1 rounded-md border-2 border-black bg-teal-400 px-8 py-6 shadow-brutalist"
        >
          <label className="text-2xl font-light">Title</label>
          <input
            type="text"
            placeholder="Title of your blog post"
            {...register("title", { required: true })}
            className={
              "border-2 border-black px-4 py-3 font-light " +
              (formState.errors.title && "text-red-400")
            }
          />
          <label className="min-h-5">{formState.errors.title?.message}</label>
          <label className="text-2xl font-light">Content</label>
          <textarea
            placeholder="Content of your blog post"
            {...register("content", { required: true })}
            className={
              "grow border-2 border-black px-4 py-3 font-light " +
              (formState.errors.content && "text-red-400")
            }
          />
          <label className="min-h-5">{formState.errors.content?.message}</label>
          <input
            type="submit"
            className="mt-1 cursor-pointer self-end rounded-md border-2 border-black bg-yellow-400 px-16 py-4 font-light"
          />
        </form>
      </div>
    </main>
  );
}

export default CreateNewPost;
