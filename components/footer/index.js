import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://twitter.com/handeozcn" target="_blank">
        Frontend Dev
      </Link>
    </footer>
  );
}

export default Footer ;