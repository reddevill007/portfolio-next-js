import "../styles/globals.css";
import { useEffect } from "react";
import Router from "next/router";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import Layout from "../components/Layout/Layout";

nProgress.configure({
  minimum: 0.8,
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const start = () => {
      nProgress.start();
    };
    const end = () => {
      nProgress.done();
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
