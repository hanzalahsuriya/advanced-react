import React from 'react';
import DataApi from '../DataApi';
import { data } from '../testData';
import ArticleList from './ArticleList';

const api = new DataApi(data);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: api.getAtricles(),
      authors: api.getAuthors()
    }
  }

  render() {
    const { articles, authors} = this.state;
    return (
      <ArticleList
        articles={articles}
        authors={authors}
      />
    );
  }
}

export default App;