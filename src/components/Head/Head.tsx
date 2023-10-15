import React, { useEffect } from 'react';
import { HeadProps } from './Head.props';

export const Head = ({isRobots}: HeadProps): JSX.Element => {
  useEffect(() => {
    const metaTag = document.querySelector('meta[name="robots"]');
    if (metaTag) {
      metaTag.setAttribute('content', isRobots ? 'index' : 'noindex');
    } else {
      const newMetaTag = document.createElement('meta');
      newMetaTag.name = 'robots';
      newMetaTag.content = isRobots ? 'index' : 'noindex';
      document.head.appendChild(newMetaTag);
    }
  }, [isRobots]);
  
  return (
    <></>
  );
}