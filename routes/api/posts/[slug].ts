import { Post } from "@/lib/types.ts";
import { getPost } from "@/lib/utils.ts";
import { Handler } from "fresh/compat";

export const handler: Handler<Post> = async (_req, ctx) => {
  const post = await getPost(ctx.params.slug);

  if (!post) return new Response(null, { status: 404 });

  return new Response(JSON.stringify(post), {
    headers: { "Content-Type": "application/json" },
  });
};
