// @flow
import * as React from 'react';
import Search from './components/Search';

const App = (): React.Node => {
  const Styles = {
    container: {
      width: 'auto',
      height: 'auto',
      display: 'flex',
      itemAlign: 'center',
      justifyContent: 'center',
    },
  };

  return (
    <div style={Styles.container}>
      <Search />
    </div>

  );
};

export default App;
