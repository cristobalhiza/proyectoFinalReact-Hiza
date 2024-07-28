import React from 'react';
import { FadeLoader } from 'react-spinners';
import styles from './LoaderComponent.module.css';

const LoaderComponent = () => (
  <div className={styles.loadingContainer}>
    <FadeLoader color="#E2725B" loading={true} />
    <p>Cargando...</p>
  </div>
);

export default LoaderComponent;
