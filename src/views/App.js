import React from 'react';
import '../css/App.css';

import 'rsuite/lib/styles/themes/dark/index.less';

/** import default css */
// import 'rsuite/dist/styles/rsuite-default.css';

/** import dark css */
// import 'rsuite/dist/styles/rsuite-dark.css';

import { Button } from 'rsuite';
import LargeTable from '../components/elements/LargeTable'

function App() {
  return (
    <div className="App">
      <Button appearance="primary"> Hello world </Button>
        <LargeTable/>
    </div>
  );
}

export default App;
