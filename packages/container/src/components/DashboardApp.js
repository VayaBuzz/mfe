import { mount } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    // we call mount, and pass in a configuration object to mount:
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
