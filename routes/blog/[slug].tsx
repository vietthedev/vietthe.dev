import { Head } from "fresh/runtime";
import { PageProps } from "fresh";
import { render } from "@deno/gfm";

import CommentWidget from "@/components/CommentWidget.tsx";
import Container from "@/components/Container.tsx";
import Link from "@/components/Link.tsx";
import Metadata from "@/components/Metadata.tsx";
import { Post } from "@/lib/types.ts";
import { formatPostDate } from "@/lib/utils.ts";
import { handler as getPost } from "@/routes/api/posts/[slug].ts";
import { Handler } from "fresh/compat";

export const handler: Handler<Post> = async (req, ctx) => {
  const response = await getPost(req, ctx);

  if (!response.ok) return ctx.renderNotFound();

  const post = await response.json();

  return ctx.render(post);
};

const PostPage = (props: PageProps<Post>) => {
  const { data, url } = props;
  const { content, excerpt, publishedAt, title } = data;

  return (
    <Container>
      <Head>
        <Metadata
          description={excerpt}
          og={{
            title,
            description: excerpt,
            type: "article",
            article: {
              published_time: new Date(publishedAt).toISOString(),
              author: "Việt Huỳnh",
            },
            url: url.origin + url.pathname,
          }}
          title={`${title} - Việt Huỳnh - Blog`}
          url={url}
        />
        <title>{title} - Việt Huỳnh - Blog</title>
      </Head>
      <article class="max-w-full prose">
        <h1 class="text-4xl md:text-5xl font-bold">{title}</h1>
        <time
          class="italic text-gray-500"
          datetime={new Date(publishedAt).toISOString()}
        >
          {formatPostDate(publishedAt)}
        </time>
        <section
          class="my-4 border-y"
          dangerouslySetInnerHTML={{
            __html: render(`${excerpt}\n\n${content}`),
          }}
        />
        <section>
          <Link href="/blog">&larr; Go back</Link>
        </section>
        <CommentWidget />
      </article>
    </Container>
  );
};

export default PostPage;
