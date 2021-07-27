// @flow

import * as React from 'react';

const Search = (): React.Node => {
  const [searchInput, setSearchInput] = React.useState('');
  const [joke, setJoke] = React.useState('');
  const [fetchingJoke, setFetchingJoke] = React.useState(false);

  const fetchJoke = () => {
    setFetchingJoke(true);
    fetch('https://icanhazdadjoke.com/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setJoke(json.joke);
        setFetchingJoke(false);
      });
    setSearchInput('');
  };

  const onTellJoke = (event) => {
    event.preventDefault();
    fetchJoke();
  };
  const Styles = {
    container: {
      border: 'solid black',
      margin: '0 auto',
      width: '50%',
      height: 'auto',
      textAlign: 'center',
    },
    input: {
      margin: '0 auto',
    },
    divider: {
      width: '5px',
      height: 'auto',
      display: 'inline-block',
    },
  };
  return (
    <div style={Styles.container}>
      <input
        value={searchInput}
        onChange={(e) => { setSearchInput(e.target.value); }}
        style={Styles.input}
      />
      <div>
        <button type="button" style={{ margin: 'auto' }} onClick={onTellJoke} disabled={fetchingJoke}>Search</button>
        <div style={Styles.divider} />
        <button type="button" onClick={onTellJoke} style={{ margin: 'auto' }} disabled={fetchingJoke}>Tell Me A Joke </button>
      </div>
      {fetchingJoke === true ? null : <div>{joke}</div>}
    </div>
  );
};

export default Search;
