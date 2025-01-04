import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import Card from "@/components/Card.tsx";
import Container from "@/components/Container.tsx";
import Link from "@/components/Link.tsx";
import List from "@/components/List.tsx";
import Metadata from "@/components/Metadata.tsx";
import Tag from "@/components/Tag.tsx";
import Paragraph from "@/components/Typography/Paragraph.tsx";
import Subtitle from "@/components/Typography/Subtitle.tsx";
import Text from "@/components/Typography/Text.tsx";
import Title from "@/components/Typography/Title.tsx";
import IconBrandLinkedin from "tabler_icons_tsx/brand-linkedin.tsx";
import IconMail from "tabler_icons_tsx/mail.tsx";

import introduction from "@/data/portfolio/introduction.json" with {
  type: "json",
};
import projects from "@/data/portfolio/projects.json" with { type: "json" };
import skills from "@/data/portfolio/skills.json" with { type: "json" };

const Home = (props: PageProps) => {
  const { url } = props;

  return (
    <>
      <Head>
        <Metadata
          description="A software engineer based in Ho Chi Minh City"
          og={{
            title: "Việt Huỳnh - Portfolio",
            description: "A software engineer based in Ho Chi Minh City",
            type: "profile",
            profile: {
              first_name: "Việt",
              last_name: "Huỳnh",
              gender: "male",
            },
            url: url.origin,
            image: {
              url: `${url.origin}/assets/images/profile-picture.webp`,
              width: "800",
              height: "800",
              type: "image/webp",
            },
          }}
          title="Việt Huỳnh - Portfolio"
          url={url}
        />
      </Head>
      <Container title="Portfolio">
        <section class="mb-8 w-full flex flex-col md:flex-row justify-center items-center md:gap-4">
          <div class="max-w-[20rem]">
            <picture>
              <source
                media="(max-width: 499px)"
                srcset="/assets/images/profile-picture-400.avif"
                type="image/avif"
              />
              <source
                media="(min-width: 500px)"
                srcset="/assets/images/profile-picture-800.avif"
                type="image/avif"
              />
              <img
                class="rounded-full"
                alt="Việt Huỳnh's profile picture"
                src="/assets/images/profile-picture.webp"
                width="800"
                height="800"
              />
            </picture>
          </div>
          <div>
            {introduction.map((paragraph) => (
              <Paragraph key={paragraph}>{paragraph}</Paragraph>
            ))}
          </div>
        </section>

        <Title>Skills</Title>
        <section class="mb-8 w-full flex flex-wrap md:flex-row justify-center gap-2">
          {skills.map((skill) => <Tag key={skill}>{skill}</Tag>)}
        </section>

        <Title>Projects</Title>
        <section class="mb-8 w-full grid auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map(({ name, description, stack, role, url }) => (
            <Link
              key={name}
              class="hover:!no-underline"
              title={name}
              href={url}
              target="_blank"
            >
              <Card class="flex flex-col h-full justify-between gap-3">
                <Subtitle class="!mb-0">{name}</Subtitle>
                <Paragraph class="!my-0">{description}</Paragraph>
                <div class="flex flex-wrap gap-2">
                  {stack.map((item) => <Tag key={item}>{item}</Tag>)}
                </div>
                <div class="text-right text-sm italic">{role}</div>
              </Card>
            </Link>
          ))}
        </section>

        <Title>Contact</Title>
        <section class="w-full flex flex-col md:flex-row justify-center">
          <List class="list-none">
            <List.Item class="!ml-0">
              <Link
                class="flex gap-2"
                title="Email"
                href="mailto:contact@vietthe.dev"
              >
                <IconMail /> contact@vietthe.dev
              </Link>
            </List.Item>
            <List.Item class="!ml-0">
              <Link
                class="flex gap-2"
                title="LinkedIn"
                href="https://www.linkedin.com/in/viet-huynh"
                target="_blank"
              >
                <IconBrandLinkedin /> linkedin.com/in/viet-huynh
              </Link>
            </List.Item>
            <List.Item class="!ml-0">
              <Link
                class="flex gap-2"
                title="In-person"
                href="https://maps.app.goo.gl/oZtQosTgCoWMhuuH7"
                target="_blank"
              >
                <Text>🧑‍🤝‍🧑</Text>
                <Text>Ho Chi Minh City, Vietnam</Text>
              </Link>
            </List.Item>
          </List>
        </section>
      </Container>
    </>
  );
};

export default Home;
