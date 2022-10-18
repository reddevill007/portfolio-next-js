import Home from "../components/Home";
import ServiceContainer from "../components/ServiceContainer";
import Header from "../components/Header";
import styles from "../styles/serviceBox.module.css";

const index = () => {
  return (
    <>
      <section>
        <Home />
      </section>
      <section className={styles.services}>
        <Header title="Services" />
        <ServiceContainer />
      </section>
    </>
  );
};

export default index;
