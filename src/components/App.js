import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './App.css';
import Portfolio from '../containers/Portfolio';


export default function App() {
  return (
    <main className={styles.App}>
      <Header />
      <Portfolio />
      <Footer />
    </main>
  );
}
