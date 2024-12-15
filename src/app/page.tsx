import Link from "next/link";

export default function Home() {
  return (
    <section className="page w-full">
      <Link href={'/news'}>To news</Link>
      <Link href={'/institute'}>To institute</Link>
      <Link href={'/dalian'}>To dalian</Link>
    </section>
  );
}
