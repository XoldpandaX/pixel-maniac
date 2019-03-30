import React, { Component } from 'react';

import './items-list.css';

export class ItemsList extends Component {
  state = {
    items: [],
    hasError: false,
    isLoading: false
  };
  
  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      
      const data = await this.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
      this.setState({ items: data })
    } catch (e) {
      console.error('some err');
    } finally {
      this.setState({ isLoading: false });
    }
  }
  
  async fetchData(url) {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    
    return response.json();
  }
  
  render() {
    const { items, hasError, isLoading } = this.state;
    
    if (hasError) {
      return <p>Sorry! There was an error loading the items</p>
    }
    
    return (
      isLoading
        ?
        <p>...Loading</p>
        :
        <ul>
          {
            items.map(({ id, label }) => (
              <li key={ id + label }>
                { label }
              </li>
            ))
          }
        </ul>
    );
  }
}

export default ItemsList;
