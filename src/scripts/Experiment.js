import React, { Fragment } from 'react';
import LazyLoad from 'react-lazy-load';
import FadeIn from "react-lazyload-fadein";

export default class Experiment extends React.Component {
  render() {
    const style = {
      backgroundColor:this.props.data.bgColor
    }
    return (
      <Fragment>
      <a href={this.props.data.url} target='_blank' className='experiment' style={style}>
        <FadeIn height={600} once>
                {onload => (
                  <Fragment>
                  <div
                      className='cover'
                      style={{ backgroundImage: `url(${this.props.data.bg})` }}

                  />
                    <img
                        src={this.props.data.bg}
                        onLoad={onload}
                        style={{ height: 600 }}
                    />
                  </Fragment>
                )}
            </FadeIn>
          </a>
    </Fragment>
    );

  }
}
