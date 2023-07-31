This is my completed excercise.

Setup Instructions:
-------------------

1.  Clone the repository.
2.  Configure the database connection in the `.env` file with the credentials I have supplied you.
3.  Install the required dependencies by running `npm install`.
4.  Run the development server using `npm run dev`.
5.  Have fun!

Task Checklist:
-------------

I have completed the following tasks:

1.  Homepage:

    - [x]   Display a list of all blog posts with their titles and creation dates.
    - [x]  Clicking on a blog post should navigate to its detail page.
2.  Blog Post Detail Page:

    - [x]  Display the full content of the selected blog post.
3. BONUS EXCERCISE Create Blog Post Page:

    - [x]  Provide a form to allow users to create a new blog post.
    - [x]  Implement client-side form validation to ensure the title and content are not empty.
4.  Backend API:

    - [x] Use tRPC to create the API endpoints for fetching all blog posts and fetching a single blog post by its ID.

Additional packages used:
--------------------------
- faker.js https://fakerjs.dev/
- ts-node https://www.npmjs.com/package/ts-node
- react hook form https://react-hook-form.com/
- zod react hook form resolver https://www.npmjs.com/package/@hookform/resolvers

Implementations:
--------------------------

1. Planetscale:

    -   Deployed a mysql databse on Planetscale.
    -   Set up the database connection and credentials in the `.env` file.
2.   Prisma:

     -   Created the BlogPost model in schema.prisma.
     -   Connected to the mysql database.
     -   Created a seed.ts file (using faker to generate fake data) and generated posts for the database.
3.  tRPC:

    - Used tRPC to create API endpoints for:
        1. fetching all blog posts (sorted by date, newest first)
        2. fetching a single blog post by its ID
        3. creating a new blog post (used zod to validate the mutation data)
4.  Tailwind:

    -   Used tailwind.css to style the components.
    -   Some simple responsive design implementation (the app should look fine on screens of different sizes).
    -   Added a custom box-shadow by extending the theme in tailwind.config.ts.
5.  Next.js:

    -   Used the page router and dynamic routing for post details.
6.  Typescript

    - Utilized TypeScript types for improved code safety.
7. react hook form and zod

    - Used react hook form to handle the input and submitting of data in new post creation.
    - Used zod schema to validate in frontend and backend.

Important Files and Components:
-----------------
 - prisma/
     - schema.prisma - BlogPost model and datasource
     - seed.ts - data generation funciton for the prisma seed command
- src/server/api/routers/posts.ts - API endpoints
- src/pages/
    - index.tsx - home page / feed with all posts displayed
    - post/[id].tsx - dynamic route page for displaying details of a single post
    - create.tsx - new post creation page
- src/utils/postSchema.ts - zod schema validation object
- src/components/
    - Layout.tsx - layout component for the entire app, includes a header with navigation to home and new post creation
    - PostDetailsCard.tsx - component for displaying the details of a post, used in pages/post/[id].tsx
    - PostTitleCard.tsx - component for displaying the title and creation date of a post, links to the details page for that post, used in pages/index.tsx

----------------

Thank you for reading this readme file!
