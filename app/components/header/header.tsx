import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-green-400 py-2">
      <ul className="flex gap-32 justify-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/cabinet">Cabinet</Link>
        </li>
        <li>
          <Link href="/api/auth/signin">Login</Link>
        </li>
        <li>
          <Link href="/api/auth/signout">Sign Out</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
