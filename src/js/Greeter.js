//module.exports = function() {
//    var greet = document.createElement('div');
//    greet.textContent = "Hi there and greetings! hello";
//    return greet;
//};

//var config = require('../../../config.json');
//
//module.exports = function() {
//    var greet = document.createElement('div');
//    greet.textContent = config.greetText;
//    return greet;
//};


import React, {Component} from 'react'
import config from '../../config.json';
import styles from '../css/Greeter.css';//导入

class Greeter extends Component{
    render() {
        return (
            <div className={styles.root}>
            {config.greetText}
    </div>
    );
    }
}

export default Greeter