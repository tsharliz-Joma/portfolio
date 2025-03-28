import "../styles/globals.css";

export const metadata = {
  title: "Charles Joma Portfolio",
  description:
    "Explore the portfolio of a skilled junior software engineer based in Sydney. Specializing in innovative web development projects, business solutions, and creative technology.",
  keywords:
    "software engineer, portfolio, junior software engineer, Sydney, web development, business solutions, creative technology",
  author: "Charles Joma",
  charset: "UTF-8",
};

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full h-full scroll-smooth">
      <head>
        <meta charSet={metadata.charset} />
        <meta name="viewport" content={viewport} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tsharliz.com" />
        <meta property="og:image" content="https://www.tsharliz.com/og-boxer.jpg" />
        <meta name="twitter:card" content="https://www.tsharliz.com/og-boxer.jpg" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://www.tsharliz.com/twitter-image.png" />
      </head>
      <body className="overflow-y-scroll bg-white">{children}</body>
    </html>
  );
}
