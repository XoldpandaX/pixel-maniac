import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as topicActions from 'store/topics/actions';
import * as topicsSelectors from 'store/topics/selectors';

import ListView from 'components/list-view';

import './topics-screen.css';

class TopicsScreen extends Component {
  componentDidMount() {
    this.props.dispatch(topicActions.fetchTopics());
  }
  
  renderLoading = () => {
    return (
      <p>Loading...</p>
    );
  };
  
  renderRow = (row) => {
    const { title, description } = row;
    
    return (
      <div>
        <h3>{ title }</h3>
        <p>{ description }</p>
      </div>
    );
  };
  
  render () {
    const { rowsById, rowsIdArray } = this.props;
    
    return !rowsById
      ? this.renderLoading()
      :
      <div className='TopicsScreen'>
        <ListView
          rowsIdArray={ rowsIdArray }
          rowsById={ rowsById }
          renderRow={ this.renderRow }
        />
      </div>
  }
}

// which props do we wont to inject, given the global store state ?
const mapStateToProps = (state) => {
  return {
    rowsById: topicsSelectors.getTopicsByUrl(state),
    rowsIdArray: topicsSelectors.getTopicsUrlArray(state),
    selectedIdsMap: topicsSelectors.getSelectedTopicUrlsMap(state)
  };
};

export default connect(mapStateToProps)(TopicsScreen);
