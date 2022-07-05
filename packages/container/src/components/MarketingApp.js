import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
    // mount will take this and try to create an instance of our Marketing app
    // and render it into the div
  });

  return <div ref={ref} />;
};
