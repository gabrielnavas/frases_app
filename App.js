import React from 'react';

import ShowOnePhrase from './src/components/ShowPhrase/screen';
import StatusBar from './src/components/common/StatusBar';

export default function App() {
  return (
    <>
      <Theme>
        <ShowOnePhrase />
        <StatusBar />
      </Theme>
    </>
  );
}
