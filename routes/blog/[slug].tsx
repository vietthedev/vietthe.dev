import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { render } from "$gfm";
import { handler as postHandler } from "@/routes/api/posts/[slug].ts";
import { Post } from "@/lib/types.ts";
import Container from "@/components/Container.tsx";
import Metadata from "@/components/Metadata.tsx";
import { formatPostDate } from "@/lib/utils.ts";
import CommentWidget from "@/components/CommentWidget.tsx";

export const handler: Handlers<Post> = {
  async GET(req, ctx) {
    const { GET: getPost } = postHandler;
    const response = await getPost!(req, ctx);

    if (!response.ok) return ctx.renderNotFound();

    const post = await response.json();

    return ctx.render(post);
  },
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
        <div
          class="my-4 border-y"
          dangerouslySetInnerHTML={{ __html: render(content) }}
        />
      </article>
      <CommentWidget />
    </Container>
  );
};

export default PostPage;
