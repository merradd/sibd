import Link from "next/link";

export default function Home() {
  return (
    <section className="page w-full">
      <Link href={'/'}>To news</Link>
      <Link href={'/dalian'}>To dalian</Link>
    </section>
  );
}
