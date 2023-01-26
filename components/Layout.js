import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../src/styles/utils.module.css";
import Link from "next/link";

const name = "Yama Kou";
export const siteTitle = "blog";

function Layout({children, home}) {
    return (
        <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <img
                src="/images/profile.png"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <img
                  src="/images/profile.png"
                  alt=""
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                />
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <div className={utilStyles.colorInherit}>{name}</div>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div>
            <Link href="/">← ホームへ戻る</Link>
          </div>
        )}
      </div>
    );
}

export default Layout;