import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Việt Huỳnh - Software Engineer
        </title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
