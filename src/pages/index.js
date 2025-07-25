import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>Vasitum | Dashboard</title>
      </Head>
      <div>
        <Link href="/dashboard">
          <button>Go to Dashboard</button>
        </Link>
      </div>
    </>
  );
}
