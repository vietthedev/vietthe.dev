import { extractYaml } from "@std/front-matter";
import { join } from "@std/path";

import { Post } from "@/lib/types.ts";

export const getPostPath = async () => {
  const devPath = "data/blog";
  const prodPath = "_fresh/client/data/blog";

  try {
    await Deno.stat(prodPath);

    return prodPath;
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return devPath;
    }

    throw error;
  }
};

export const getFiles = (directory: string) =>
  Array.fromAsync(Deno.readDir(directory));

export const getPosts = async (includesPrivate = false): Promise<Post[]> => {
  const promises = (await getFiles(await getPostPath())).map((file) =>
    getPost(file.name.replace(".md", ""))
  );
  let posts = await Promise.all(promises) as Post[];

  if (!includesPrivate) {
    posts = posts.filter((post) => !post.private);
  }

  return posts.toSorted((a, b) =>
    b.publishedAt.getTime() - a.publishedAt.getTime()
  );
};

export const getPost = async (slug: string): Promise<Post | null> => {
  try {
    const text = await Deno.readTextFile(
      join(await getPostPath(), `${slug}.md`),
    );
    const { attrs, body } = extractYaml<Post>(text);

    return {
      slug,
      title: attrs.title,
      publishedAt: new Date(attrs.publishedAt),
      content: body,
      excerpt: attrs.excerpt,
      private: attrs.private,
    };
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) return null;

    throw err;
  }
};

export const formatPostDate = (date: string | Date) =>
  new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Ho_Chi_Minh",
  }).format(new Date(date));
