import Navbar from "../components/Navbar";
import styles from "../styles/index.module.css";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Next js portfolio" />
        <meta name="keywords" content="Hrml, css, javascript, react, next" />
        <meta name="author" content="Saurabh Pandey" />
      </Head>
      <Navbar />
      <header>
        <div className={styles.text}></div>
        <div className="text__box">
          <h1 className="heading__primary">
            <span className={styles.text}>Welcome to the world of next js</span>
            <span>Love with Javascript</span>
          </h1>
          <a href="#" className={styles.text}>
            Code Inertia
          </a>
        </div>
      </header>
    </>
  );
};

export default index;
