import React from 'react';

import ShowOnePhrase from './src/components/ShowPhrase/screen';
import StatusBar from './src/components/common/StatusBar';

import Theme from './src/components/common/Theme'

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
