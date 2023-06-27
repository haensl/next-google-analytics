import { useMemo } from 'react';
import Script from 'next/script';

const GoogleAnalytics = ({
  measurementId,
  onLoad,
  src = 'https://www.googletagmanager.com/gtag/js',
  strategy = 'afterInteractive'
} = {}) => {
  const _src = useMemo(() => `${src}?id=${measurementId}`, [measurementId, src]);

  if (!measurementId) {
    return null;
  }

  return (
    <>
      <Script
        async={ true }
        onLoad={ onLoad }
        src={ _src }
        strategy={ strategy }
      />
    </>
  );
};

export default GoogleAnalytics;
