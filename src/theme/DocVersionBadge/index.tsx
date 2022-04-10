import React from 'react';
import {ThemeClassNames, useDocsSidebar} from '@docusaurus/theme-common';
import {useLocation} from '@docusaurus/router';
import clsx from 'clsx';
import {
  PropSidebar,
} from '@docusaurus/plugin-content-docs';

function useBreadCrumbs(): string[] {
  const sidebar = useDocsSidebar();
  const {pathname} = useLocation();
  console.log(pathname);
  const breadCrumbs: string[] = [];
  function find(sidebar: PropSidebar) {
    for (const item of sidebar) {
      if (item.type === 'category') {
        breadCrumbs.push(item.label);
        const res = find(item.items);
        if (!res) {
          breadCrumbs.pop();
        } else {
          return true;
        }
      } else if (item.href.replace(/\/$/, '') === pathname.replace(/\/$/, '')) {
        breadCrumbs.push(item.label);
        return true;
      }
    }
    return false;
  }
  find(sidebar);
  return breadCrumbs;
}

export default function DocVersionBadge({className}) {
  const breadCrumbs = useBreadCrumbs();
  if (!breadCrumbs.length) {
    return null;
  }
  return (
    <span
      className={clsx(
        className,
        ThemeClassNames.docs.docVersionBadge,
        'badge badge--secondary',
      )}>
      {breadCrumbs[0]}
    </span>
  );
}