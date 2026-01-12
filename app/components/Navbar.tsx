import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-200 p-4 flex space-x-4">
      <Link href="/">Home</Link>
      <Link href="/experience">Experiences</Link>
      <Link href="/project">Projects</Link>
    </nav>
  );
}
