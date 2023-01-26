import Layout from "components/Layout";
import Link from "next/link";
import utilStyle from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";

import { getSortedPostsData } from "../../lib/posts"

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData, //これをHomeに渡す
    },
  };
}

//SSRの場合(contextにはrequestされたときのパラメータが入る)
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       //コンポーネントに渡すためのprops
//     },
//   };
// }

export default function Home({ allPostsData }) {
  return (
  <Layout home>
    <section className={utilStyle.headingMd}>
      <p>
        勉強用Next.jsアプリ
      </p>
    </section>

    <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
      <h2>Next.jsについての学びブログ</h2>
      <div className={styles.grid}>
        {allPostsData.map(({id, title, date, thumbnail}) => (
          <article key={id}>
          <Link href={`/posts/${id}`}>
            <img src={`${thumbnail}`} className={styles.thumbnailImage} />
          </Link>
          <Link href={`/posts/${id}`}>
            <div className={utilStyle.boldText}>
            {title}
            </div>
          </Link>
          <br/>
          <small className={utilStyle.lightText}>{date}</small>
        </article>
        ))}
      </div>
    </section>

  </Layout>
  )
}