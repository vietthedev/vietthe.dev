---
title: The first version of my new site
publishedAt: 2024-05-10T07:56:29.025Z
excerpt: It has been quite a while since my last post. And the last update of my old portfolio was 4 years ago. One was just a WordPress blog and one was an ancient version of Next.js. Both haven't been maintained for ages and I've got a lot of free time recently so there's no better time to learn and create something new.
private: false
---

## Motivation

As a developer, it's a good idea to have something to showcase what I can do and
what I've done. I did it before by creating a
[portfolio](https://github.com/vietthedev/next-portfolio), but there were a few
problems. Firstly, it was created while I was still learning React so I chose a
different set of tools without considering the type of the site. Secondly, I
didn't bother updating it so it became ancient, both in terms of content and
technologies.

One more thing I wanted to get rid of was my blog hosted at `blog.huynhviet.com`
which you could be one of its visitors. It was a WordPress installation on my
VPS. To host it, I had to install PHP and MariaDB that consumed an unnecessary
amount of resources for a simple blog. So I urged that I should use something
else.

## The choice of tools

You may be wondering why I don't use static site generators like Astro, Hugo,
Gatsby or Eleventy. I actually considered one of them but this time I want to
learn something new and create the site myself. Then a guy in one of my chat
groups inspired me and told me to give [Fresh](https://fresh.deno.dev/) a try.
For those who don't already know, Fresh is a web framework created by Deno.
Fresh is to Next.js as [Deno](https://deno.com/) is to Node.js. There's
[Preact](https://preactjs.com/) in Fresh, just as there's React in Next.js. So
that looks like the technical stack I'm already familiar with, but with
completely new frameworks. Learning is always a good thing, no? The result is,
of course, I ended up using Fresh.

In addition to technical stack changes, I also left out the database system and
put all the content in Markdown files. Why? Not only are they portable, widely
supported, easy to format, easy to backup and lightweight, but I also don't have
to get my hands dirty with backing up and restoring the database anymore.

## What's coming next?

To be honest, I don't know. Technology is ever-changing, and so am I. It could
be anything. There are some improvements to the site I can make such as project
restructuring, interface redesign, portfolio interactivity, tagging for the
blog, and internationalisation support. It could even involve me pulling down
the whole site and starting over with a different framework.

For blog content, I will continue writing about my life, my career, and
technical topics, in English or Vietnamese. However, I think I will just write
once in a while.
