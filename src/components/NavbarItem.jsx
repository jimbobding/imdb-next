"use client";
import Link from "next/link";

import { Suspense } from "react"; // Import Suspense
import { useSearchParams } from "next/navigation";

function NavbarItem({ title, param }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {" "}
      <NavbarItemContent title={title} param={param} />
    </Suspense>
  );
}

function NavbarItemContent({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 brounded-lg "
            : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}

export default NavbarItem;
