import React, { Fragment } from 'react';

export default class About extends React.Component {
  processText() {

    return {__html:`
      <div>
      <p>
        I'm Jordan Machado <span>Freelance Creative Developer</span> based in <span>London</span>.<br><br>

        I created this website to archive and showcase my <span>WebGL</span> experiments.<br><br>

        These are experimental pieces and therefore may not be optimised or compatible with all platforms and devices (mainly tested on mac/chrome).
        <br><br>
        <span>Build with my WebGL framework:</span><br><br>

        <a target="_blank" href="https://github.com/JordanMachado/webgl-tools">webgl-tools</a>
      </p>
      </div>
      `

    }
  }
  render() {

    return (

      <div className='about' dangerouslySetInnerHTML={this.processText()} />

    )
  }
}
