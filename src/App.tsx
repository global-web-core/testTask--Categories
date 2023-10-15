import React, { useEffect } from 'react';
import './App.css';
import { CatalogPage } from './pages';
import { namePages } from './globals/constants/constants';
import { useAppSelector } from './store/hook';
import { pageSelect } from './store/page/page-selectors';

function App() {
  const page = useAppSelector(pageSelect);
  

  useEffect(() => {
    if (page.current === namePages.main) {
      window.history.pushState(null, "", "/");
    } else {
      window.history.pushState(null, "", `/${page.current}`);
    }
  },[page])
  return (
    <>
      <CatalogPage />
    </>
  );
}

export default App;