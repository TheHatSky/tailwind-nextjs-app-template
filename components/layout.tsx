import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "[Your Name]";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }: { children: React.ReactNode; home?: boolean }) {
  return (
    <div className="container max-w-xl px-4 mt-12 mx-auto mb-24">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex flex-col items-center">
        {home ? (
          <>
            <Image priority src="/images/profile.jpg" className="rounded-full" height={144} width={144} alt={name} />
            <h1 className="text-4xl font-bold">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image priority src="/images/profile.jpg" className="rounded-full" height={108} width={108} alt={name} />
              </a>
            </Link>
            <h2 className="text-xl">
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="mt-12">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
