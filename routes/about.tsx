import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import Container from "@/components/Container.tsx";
import Link from "@/components/Link.tsx";
import Metadata from "@/components/Metadata.tsx";

const About = (props: PageProps) => {
  const { url } = props;

  return (
    <>
      <Head>
        <Metadata
          description="A software engineer based in Ho Chi Minh City"
          og={{
            title: "Việt Huỳnh - About",
            description: "A software engineer based in Ho Chi Minh City",
            type: "profile",
            profile: {
              first_name: "Việt",
              last_name: "Huỳnh",
              gender: "male",
            },
            url: url.href,
            image: {
              url: `${url.origin}/assets/images/profile-picture.webp`,
              width: "800",
              height: "800",
              type: "image/webp",
            },
          }}
          title="Việt Huỳnh - About"
          url={url}
        />
      </Head>
      <Container title="More about me">
        <article class="prose max-w-full">
          <p>
            Before I got into software development, I was excited about many
            things around a computer in my high school, from hardware to
            software. Remember the days when forum was still popular? That was
            when I liked fiddling around with XAMPP and vBulletin and similar
            forum software. I even wrote{" "}
            <Link href="https://nsis.sourceforge.io/Main_Page" target="_blank">
              NSIS
            </Link>{" "}
            scripts to create alternative update installers for{" "}
            <Link
              href="https://en.wikipedia.org/wiki/Audition_Online"
              target="_blank"
            >
              Audition Online
            </Link>, my favourite game at the time, which were less in size
            compared to the one from the publisher thanks to delta patching.
          </p>
          <p>
            I decided to pursue Software Engineering in university afterward. I
            thought I would go with PHP but I ended up going with the Microsoft
            stack where I would work with C# and .NET Framework because those
            were what I was most familiar with after graduation.
          </p>
          <p>
            So I began my career as a full-stack engineer by joining a fresher
            program in 2015. That was my first time to work on a real world
            project in a team of many newly graduated engineers. I worked mostly
            with ASP.NET MVC, Entity Framework and jQuery. Those software
            development life cycle, software development principles and
            practices were all new to me.
          </p>
          <p>
            After quite some time, I became interested in the JavaScript
            ecosystem and started with AngularJS and Node.js. But it didn't last
            long as I couldn't resist new technologies. I decided to learn React
            and started my new journey as a front end engineer. I had the
            opportunity to work with other exciting technologies - TypeScript,
            Next.js, GraphQL, gRPC, Cypress, Playwright, just to name a few.
          </p>
          <p>
            Now let's leave those programming things aside. I am not such a
            nerdy techie who is all into technologies. I am an ordinary person
            and have hobbies just like everyone else. To entertain myself, I
            usually listen to music, watch movies and hang out with friends. I
            would go around the city to explore coffee shops and cocktail bars
            when I need to calm my mind. I may take photos during the time since
            I have an interest in phone photography. I own a Nokia 808 PureView,
            a Pixel 4 XL and an iPhone 14 Pro Max currently but I mostly use the
            Pixel since it has a great modded camera app that allows me to tune
            various photo capturing settings such as noise reduction strength,
            saturation and sharpness. You can see my photos on{" "}
            <Link href="https://flic.kr/ps/ApMou" target="_blank">Flickr</Link>
            {" "}
            or{" "}
            <Link href="https://instagr.am/vietthedev/" target="_blank">
              Instagram
            </Link>.
          </p>
          <section>
            <p>
              Ah. Let me introduce this little family member to you. His name is
              Sữa (Milk). I adopted him in December 2018 when he was over three
              months old.
            </p>
            <figure>
              <picture>
                <source
                  media="(max-width: 499px)"
                  srcset="/assets/images/about/Sua-400.avif"
                  type="image/avif"
                />
                <source
                  media="(min-width: 500px)"
                  srcset="/assets/images/about/Sua-800.avif"
                  type="image/avif"
                />
                <img
                  alt="Sữa's photo"
                  src="/assets/images/about/Sua.webp"
                  width="864"
                  height="518"
                />
              </picture>
              <figcaption class="text-center">Sữa's photo</figcaption>
            </figure>
          </section>
          <p>
            Alright. That is pretty much about me. If you want to connect with
            me then check out my presences on social networks:
          </p>
          <ul>
            <li>
              Facebook:{" "}
              <Link
                href="https://fb.com/vietthedev/"
                target="_blank"
                title="Facebook"
              >
                fb.com/vietthedev
              </Link>
            </li>
            <li>
              Instagram:{" "}
              <Link
                href="https://instagr.am/vietthedev/"
                target="_blank"
                title="Instagram"
              >
                instagr.am/vietthedev
              </Link>
            </li>
            <li>
              GameVN:{" "}
              <Link
                href="http://gvn.co/members/slaxh.420842/"
                target="_blank"
                title="GameVN"
              >
                gvn.co/members/slaxh.420842
              </Link>
            </li>
            <li>
              VOZ:{" "}
              <Link
                href="https://voz.vn/u/salad.47367/"
                target="_blank"
                title="VOZ"
              >
                voz.vn/u/salad.47367
              </Link>
            </li>
            <li>
              Telegram:{" "}
              <Link
                href="https://t.me/vietthedev"
                target="_blank"
                title="Telegram"
              >
                t.me/vietthedev
              </Link>
            </li>
          </ul>
        </article>
      </Container>
    </>
  );
};

export default About;
