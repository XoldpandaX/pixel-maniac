import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './tape-slider-widget.module.scss';

class TapeSliderWidget extends Component {
  state = {
    componentDomWidth: 0,
    slideWidth: 0,
    currentPosition: 0,
    currentSlide: 0
  };
  
  rootDiv = null;
  setRootDivRef = element => {
    this.rootDiv = element;
  };
  
  componentDidMount() {
    if (this.rootDiv) {
      const { imagesInRow } = this.props;
      
      const componentDomWidth = this.rootDiv.getBoundingClientRect().width;
      const slideWidth = componentDomWidth / imagesInRow;
      
      
      this.setState({
        slideWidth,
        componentDomWidth: slideWidth * this.props.images.length,
        currentSlide: imagesInRow
      });
    }
  }
  
  scrollSlide = () => {
    const isLastSlide = this.props.images.length === this.state.currentSlide;
    
    this.setState((state) => ({
      currentPosition: isLastSlide ? 0 : state.currentPosition + state.slideWidth,
      currentSlide: isLastSlide ? this.props.imagesInRow : state.currentSlide += 1
    }));
  };
  
  render() {
    const { images } = this.props;
    const { componentDomWidth, slideWidth, currentPosition } = this.state;
    const { innerWrapper, tapeSlider } = styles;
    
    const dynamicStyles = {
      width: `${componentDomWidth}px`,
      transform: `translate3d(${-currentPosition}px, 0px, 0px)`
    };
    
    const imagesElements = (sliderImages) => sliderImages.map(({ id, urlThumb }) => (
      <div
        key={ id }
        style={{ width: `${slideWidth}px` }}
      >
        <img
          className='image-for-widget widget-border'
          src={ urlThumb }
          alt='slider element'
        />
      </div>
    ));
    
    return (
      <div
        className={ tapeSlider }
        ref={ this.setRootDivRef }
      >
        <div
          style={ dynamicStyles }
          className={ innerWrapper }
        >
          { imagesElements(images) }
        </div>
      </div>
    );
  }
}

TapeSliderWidget.defaultProps = {
  imagesInRow: 4
};

TapeSliderWidget.propTypes = {
  imagesInRow: PropTypes.number,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      urlThumb: PropTypes.string.isRequired
    })
  )
};

export default TapeSliderWidget;
