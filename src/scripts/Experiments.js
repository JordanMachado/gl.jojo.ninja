import React, { Fragment } from 'react';
import Experiment from './Experiment';

export default class Experiments extends React.Component {
  render() {
    this.experiments = this.props.experiments.map((exp) =>
      <Experiment key={exp.id} data={exp}/>
    );
    return (
      <Fragment>
      <div className='experiments'>
        {this.experiments}
      </div>
      </Fragment>
    )
  }
}
