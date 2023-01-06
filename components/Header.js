import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className="bg-black text-white flex justify-between px-5 py-8">
        <h1>
          <Link href="/">JAN REBOLLEDO</Link>
        </h1>
        <p
          className="z-[101] block md:hidden"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? "[ CLOSE ]" : "[ MENU ]"}
        </p>
        <p className="hidden md:flex gap-8">
          <Link href="/">[ HOME ]</Link>
          <Link href="/#projects">[ PROJECTS ]</Link>
          <Link href="/#contact">[ CONTACT ]</Link>
        </p>
      </header>
      <nav onClick={() => setToggle(!toggle)}>{toggle && <MobileNav />}</nav>
    </>
  );
}

function MobileNav() {
  return (
    <div className="w-full h-full fixed z-[100] top-0 left-0 bg-black text-white px-5 py-8 flex justify-center gap-4 flex-col">
      <Link href="/" className="text-2xl">
        [ HOME ]
      </Link>
      <Link href="/#projects" className="text-2xl">
        [ PROJECTS ]
      </Link>
      <Link href="/#contact" className="text-2xl">
        [ CONTACT ]
      </Link>
    </div>
  );
}
