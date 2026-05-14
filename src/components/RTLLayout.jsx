import PropTypes from 'prop-types';
import { useEffect } from 'react';

// material-ui
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

// third-party
import rtlPlugin from 'stylis-plugin-rtl';

// project-imports
import { ThemeDirection } from 'config';
import useConfig from 'hooks/useConfig';

const rtlCache = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin]
});

const ltrCache = createCache({
  key: 'mui'
});

export default function RTLLayout({ children }) {
  const {
    state: { themeDirection }
  } = useConfig();

  useEffect(() => {
    document.dir = themeDirection;
  }, [themeDirection]);

  return <CacheProvider value={themeDirection === ThemeDirection.RTL ? rtlCache : ltrCache}>{children}</CacheProvider>;
}

RTLLayout.propTypes = { children: PropTypes.node };
