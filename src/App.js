// @flow
import * as React from 'react';

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
      React app
    </div>

  );
};

export default App;
