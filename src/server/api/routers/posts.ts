import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { createPostSchema } from "~/utils/postSchema";

export const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.blogPost.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        title: true,
        createdAt: true,
      },
    });
  }),
  getDetails: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.blogPost.findUniqueOrThrow({
      where: {
        id: input,
      },
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
      },
    });
  }),
  createUser: publicProcedure
    .input(createPostSchema)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.blogPost.create({
        data: {
          title: input.title,
          content: input.content,
        },
      });
    }),
});
