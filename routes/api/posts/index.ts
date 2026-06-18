import { getPosts } from "@/lib/utils.ts";
import { define } from "@/utils.ts";

export const handler = define.handlers({
  async GET() {
    const posts = await getPosts();

    return new Response(JSON.stringify(posts), {
      headers: { "Content-Type": "application/json" },
    });
  },
});
