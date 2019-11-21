import React, {Fragment} from 'react';
import Experiment from './Experiment';

export default class Experiments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.experiments,
      currentFilter: "all"
    }
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    const filter = e.currentTarget.getAttribute('data-filter');
    console.log(filter);

    let items = [];
    if (filter !== 'all') {
      items = this.props.experiments.filter((item) => {
        return item.tech === filter;
      });
    } else {
      items = this.props.experiments;
    }

    this.setState({items: items, currentFilter: filter})

  }
  render() {
    this.experiments = this.state.items.map((exp) => <Experiment key={exp.id} data={exp}/>);

    this.filters = ['all', 'jojogl', 'three.js'].map((filter, key) => <button key={filter} data-filter={filter} onClick={this.onClick} className={this.state.currentFilter === filter
        ? "active"
        : ""}>{filter}</button>);
    return (<div className='page'>

      <div className="filters">
        {this.filters}
      </div>
      <div className='experiments'>
        {this.experiments}
      </div>
    </div>)
  }
}
