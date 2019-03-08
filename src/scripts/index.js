// https://lokeshdhakar.com/projects/color-thief/
import style from 'styles/main.scss';
import domready from 'domready';
import assetsLoader from 'assets-loader';
import React from 'react';

import ReactDOM from 'react-dom';
import App from './App'
import ExperimentsData from './experiments.json'
// import {Query, SuperConfig} from 'dev';
// SuperConfig.init();
const assets = []
const loader = assetsLoader({
  assets
});
window.getAsset = function(id) {
  return loader.get(id);
}

domready(()=> {


  if(assets.length > 0) {
    loader.on('error', function(error) {
      console.error(error);
    })
    .on('progress', function(progress) {
      // console.log((progress * 100).toFixed() + '%');
    })
    .on('complete', function(assets) {
      document.body.classList.remove('loading');
      window.assets = assets;
      console.table(assets);
      init();
    })
    .start();
  } else {
    init();
  }


});

function init() {
  ReactDOM.render(
    <App experiments={ExperimentsData.experiments}/>,
    document.getElementById("root")
);
}
