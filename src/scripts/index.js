// https://lokeshdhakar.com/projects/color-thief/
import style from 'styles/main.scss';
import domready from 'domready';
import assetsLoader from 'assets-loader';
import React from 'react';

import ReactDOM from 'react-dom';
import App from './App'

// import {Query, SuperConfig} from 'dev';
// SuperConfig.init();


var getJSON = function(url, successHandler, errorHandler) {
	var xhr = typeof XMLHttpRequest != 'undefined'
		? new XMLHttpRequest()
		: new ActiveXObject('Microsoft.XMLHTTP');
	xhr.open('get', url, true);
	xhr.onreadystatechange = function() {
		var status;
		var data;
		// https://xhr.spec.whatwg.org/#dom-xmlhttprequest-readystate
		if (xhr.readyState == 4) { // `DONE`
			status = xhr.status;
			if (status == 200) {
				data = JSON.parse(xhr.responseText);
				successHandler && successHandler(data);
			} else {
				errorHandler && errorHandler(status);
			}
		}
	};
	xhr.send();
};


let experiments;
domready(()=> {


  getJSON('experiments.json', function(data) {
    experiments = data.experiments;
    init();


  }, function(status) {
    console.error('error fetching json',status);
  });




});

function init() {
  ReactDOM.render(
    <App experiments={experiments}/>,
    document.getElementById("root")
);
}
