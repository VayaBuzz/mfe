import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    // when navigation occurs, call onParentNavigate
    const { onParentNavigate } = mount(ref.current, {
      // onNavigate: (location) => {
      // destructure pathname and rename it to nextPathname
      // represetning the path that marketing is trying to navigate
      // to, such as "/pricing"
      onNavigate: ({ pathname: nextPathname }) => {
        console.log('The container noticed navigation in marketing');
        console.log(location);
        console.log(nextPathname);
        const { pathname } = history.location; // our current path
        // only change our path if it's different htan current path
        // otherwise we risk triggering an infinite loop.
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });
    // mount will take this and try to create an instance of our Marketing app
    // and render it into the div
    history.listen(onParentNavigate);
  }, []); // empty array means just run this on first render of marketing app

  return <div ref={ref} />;
};
