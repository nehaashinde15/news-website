import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.sass"; // Import Sass module

function Header() {
  const [query, setQuery] = useState("");

  return (
    <header className={styles.header}>
      <h1>News Website</h1>
      <nav>
        <Link href="#">Home</Link>
        <Link href="#business">Business</Link>
        <Link href="#technology">Tech</Link>
        <Link href="#sports">Sports</Link>
      </nav>
      <div className={styles["search-container"]}>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <Link href={`#search/${query}`} className={styles["search-button"]}>
          Search
        </Link>
      </div>
    </header>
  );
}

export default Header;
