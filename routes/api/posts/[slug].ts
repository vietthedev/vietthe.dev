import { Post } from "@/lib/types.ts";
import { getPost } from "@/lib/utils.ts";
import { define } from "@/utils.ts";

export const handler = define.handlers<Post>(async (ctx) => {
  const post = await getPost(ctx.params.slug);

  if (!post) return new Response(null, { status: 404 });

  return new Response(JSON.stringify(post), {
    headers: { "Content-Type": "application/json" },
  });
});
