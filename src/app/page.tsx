import Link from "next/link";

export default function Home() {
  return (
    <section className="page w-full">
      <Link href={'/news'}>To news</Link>
    </section>
  );
}
