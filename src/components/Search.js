// @flow

import * as React from 'react';

const Search = (): React.Node => {
  const [searchInput, setSearchInput] = React.useState('');

  const onClickSearch = (event) => {
    event.preventDefault();
    console.log('button press');
    setSearchInput('');
  };

  const Styles = {
    container: {
      border: 'solid black',
    },
  };
  return (
    <div style={Styles.container}>
      <input value={searchInput} onChange={(e) => { setSearchInput(e.target.value); }} />
      <button type="button">Search</button>
      <button type="button" onClick={onClickSearch}>I am Feeling Lucky</button>
    </div>
  );
};

export default Search;
