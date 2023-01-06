import Link from "next/link";

export default function Footer() {
  var date = new Date();
  var year = date.getFullYear();
  return (
    <footer className="bg-black text-white py-8 text-center border-t-2 border-solid border-white">
      Copyright © {year}. Digital Experience by{" "}
      <Link href="/">[ JAN REBOLLEDO ]</Link>
    </footer>
  );
}
