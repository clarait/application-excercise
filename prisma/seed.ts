import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function generateBlogPosts() {
  try {
    const numBlogPosts = 20;
    for (let i = 0; i < numBlogPosts; i++) {
      await prisma.blogPost.create({
        data: {
          title: faker.lorem.sentence({ min: 1, max: 5 }),
          content: faker.lorem.paragraphs({ min: 2, max: 8 }),
        },
      });
    }
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect();
  }
}

generateBlogPosts();
