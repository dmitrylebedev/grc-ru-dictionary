import React, {Component} from 'react';
import './App.css';
import {
  Word
} from './components';

import {
  convertCharToggle
} from './helpers'

import {WORDS} from './data/vocabilary'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      displayedWords: WORDS
    };
    
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onChange = this.onChange.bind(this);
    this.filter = this.filter.bind(this)
    
  }

  render() {
    return (
      <div className="App">
        <fieldset>
          <label>Поиск</label>
          <input 
            type="text" 
            className="search-field"
            onKeyPress={this.onKeyPress}
            onChange={this.onChange}
          />
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
  
  onChange(event){
  
    this.filter(event);
    
    if (event.target.value === ''){
      this.setState({
        displayedWords: WORDS
      });
    }
  }
  
  onKeyPress(event) {
    convertCharToggle(event);
    this.filter(event)
  }
  
  filter(event){
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
