import { HttpError, page } from "fresh";
import { Head } from "fresh/runtime";

import Container from "@/components/Container.tsx";
import Metadata from "@/components/Metadata.tsx";
import PostCard from "@/components/PostCard.tsx";
import { Post } from "@/lib/types.ts";
import { define } from "@/utils.ts";
import { STATUS_CODE } from "@std/http/status";

export const handler = define.handlers({
  async GET(ctx) {
    try {
      const url = new URL("/api/posts", ctx.url);
      const response = await fetch(url);
      const posts = await response.json() as Post[];

      return page(posts);
    } catch (error) {
      throw new HttpError(
        STATUS_CODE.InternalServerError,
        (error as Error).message,
      );
    }
  },
});

export default define.page<typeof handler>((props) => {
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
        {data.map((post) => <PostCard key={post.title} {...post} />)}
      </section>
    </Container>
  );
});
