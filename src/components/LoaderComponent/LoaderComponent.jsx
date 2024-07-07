import React from "react";
import { FadeLoader } from "react-spinners";
import styles from "./LoaderComponent.module.css";

const Loader = () => (
  <div className={styles.loadingContainer}>
    <FadeLoader color="#E2725B" loading={true} />
    <p className="">Cargando...</p>
  </div>
);

export default Loader;
