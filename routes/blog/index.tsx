import { Head } from "fresh/runtime";
import { PageProps } from "fresh";
import { handler as getPosts } from "@/routes/api/posts/index.ts";
import Container from "@/components/Container.tsx";
import { Post } from "@/lib/types.ts";
import PostCard from "@/components/PostCard.tsx";
import Metadata from "@/components/Metadata.tsx";
import { Handler } from "fresh/compat";

export const handler: Handler<Post[]> = async (req, ctx) => {
  const response = await getPosts(req, ctx);
  const posts = await response.json();

  return ctx.render(posts);
};

const Blog = (props: PageProps<Post[]>) => {
  const { data, url } = props;

  return (
    <Container title="Blog">
      <Head>
        <Metadata
          description="A place where I tell my stories"
          og={{
            title: "Việt Huỳnh - Blog",
            description: "A place where I tell my stories",
            type: "website",
            url: url.origin + url.pathname,
          }}
          title="Việt Huỳnh - Blog"
          url={url}
        />
        <title>Việt Huỳnh - Blog</title>
      </Head>
      <section class="flex flex-col gap-y-16 [&>article:not(:last-child)]:border-b">
        {data.map((post) => <PostCard {...post} />)}
      </section>
    </Container>
  );
};

export default Blog;
