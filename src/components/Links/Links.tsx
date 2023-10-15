import React from 'react';
import { Head } from '../../components';
import { LinksProps } from './Links.props';
import styles from './Links.module.css';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { forwardPage } from '../../store/page/page-actions';
import { pageSelect } from '../../store/page/page-selectors';
import { namePages } from '../../globals/constants/constants';

export const Links = ({data}: LinksProps): JSX.Element => { 
  const dispatch = useAppDispatch();
  const page = useAppSelector(pageSelect);
  
  const handleClickForward = (event: React.MouseEvent<HTMLAnchorElement>, slugParent: string, slug: string) => {
    event.preventDefault();
    const newSlug = page.current === namePages.main ? slugParent + '/' + slug : slug;
    dispatch(forwardPage(newSlug));
  }

  return (
    <>
      <Head isRobots={data.index} />
      <h1>{data.name}</h1>
      <div className={styles.links}>
        {data?.children?.map(link => (
          <a key={link.id} href={page.current === namePages.main ? `/${data.slug}/${link.slug}/` : `/${page.current}/${link.slug}/`} onClick={(event) => handleClickForward(event, data.slug, link.slug)}>{link.name}</a>
        ))}
      </div>
    </>
  );
}