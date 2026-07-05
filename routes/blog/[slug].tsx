import { render } from "@deno/gfm";
import { STATUS_CODE } from "@std/http/status";
import { HttpError, page } from "fresh";
import { Head } from "fresh/runtime";

import CommentWidget from "@/components/CommentWidget.tsx";
import Container from "@/components/Container.tsx";
import Link from "@/components/Link.tsx";
import Metadata from "@/components/Metadata.tsx";
import { formatPostDate, getPost } from "@/lib/utils.ts";
import { define } from "@/utils.ts";

export const handler = define.handlers({
  async GET(ctx) {
    const post = await getPost(ctx.params.slug);

    if (!post) {
      throw new HttpError(STATUS_CODE.NotFound);
    }

    return page(post);
  },
});

export default define.page<typeof handler>((props) => {
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
});
