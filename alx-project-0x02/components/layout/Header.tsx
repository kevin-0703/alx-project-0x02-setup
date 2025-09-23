import React from "react";
import Home from "@/pages/home";
import About from "@/pages/about";
import Link from "next/link";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
