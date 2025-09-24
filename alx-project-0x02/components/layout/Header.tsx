import React from "react";
import Home from "@/pages/home";
import About from "@/pages/about";
import Posts from "@/pages/posts";
import Link from "next/link";

const Header = () => {
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
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
