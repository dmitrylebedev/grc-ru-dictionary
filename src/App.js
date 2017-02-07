import React, {Component} from 'react';
import './App.css';
import {
  Word,
} from './components';

import {WORDS} from './data/vocabilary'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      displayedWords: WORDS
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  render() {
    return (
      <div className="App">
        <fieldset>
          <label>Поиск</label>
          <input type="text" className="search-field" onChange={this.handleSearch} />
        </fieldset>
        <ul className="contacts-list">
          {
            this.state.displayedWords.map(function(el) {
              return <Word
                key={el.id}
                name={el.name}
              />;
            })
          }
        </ul>
      </div>
    );
  }

  handleSearch(event) {
    let searchQuery = event.target.value.toLowerCase();
    let displayedWords = WORDS.filter(function(el) {
      let searchValue = el.name.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });
  
    this.setState({
      displayedWords: displayedWords
    });
  }
}

export default App;
