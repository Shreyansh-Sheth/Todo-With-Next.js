import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Head>
        <title>Data For {id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello {id}</h1>
    </div>
  );
}
