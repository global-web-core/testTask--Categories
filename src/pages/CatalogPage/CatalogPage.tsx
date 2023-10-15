import React, { useEffect, useState } from 'react';
import { Links } from '../../components';
import { Catalog } from '../../models';
import { codeAnswer, namePages, text } from '../../globals/constants/constants';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { setCategories } from '../../store/categories/categories-actions';
import { categoriesSelectByUrl, categoriesSelectAll } from '../../store/categories/categories-selectors';
import { pageSelect } from '../../store/page/page-selectors';
import { ICategories } from '../../typesAndInterfaces/interfaces';
import { backPage, changePage } from '../../store/page/page-actions';
import styles from './CatalogPage.module.css';
import { Helpers } from '../../globals';


export const CatalogPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(pageSelect);
  const selectedCategory = useAppSelector((state) => categoriesSelectByUrl(state, page.current));
  const categoriesAll = useAppSelector((state) => categoriesSelectAll(state));
  const [activeLinks, setActiveLinks] = useState<ICategories.Db[] | null>(null);
  
  useEffect(() => {
    Catalog.getAll().then(data => {
      if (data.code === codeAnswer.ok && data.data) {
        dispatch(setCategories(data.data));
      }
    });
  }, []);

  useEffect(() => {
    if (page.current === namePages.main && categoriesAll?.data) {
      if (categoriesAll?.data.length === 1) {
        dispatch(changePage(categoriesAll.data[0].slug));
      } else {
        setActiveLinks(categoriesAll.data);
      }
    } else {
      setActiveLinks(selectedCategory);
    }
  }, [page, categoriesAll]);

  const handleClickBack = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    dispatch(backPage(page.current));
  }

  const shouldEnableBackButton = () => {
    if (categoriesAll?.data?.length === 1 && page.current === categoriesAll?.data[0].slug) {
      return false;
    } else if (page.current !== namePages.main) {
      return true;
    }
    return false;
  }


  return (
    <>
    <div className={styles.catalog}>
      {shouldEnableBackButton() && <a className={styles.back} href={`/${Helpers.slicePreviousSlug(page.current)}/`} onClick={(event) => handleClickBack(event)}>{text.back}</a>}
      {activeLinks?.map(link => (
        <Links key={link.id} data={link} />
      ))}
    </div>
    </>
  );
}