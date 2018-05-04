/*
 * @Author: Nokey 
 * @Date: 2018-05-03 14:58:43 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-05-04 11:03:46
 */
'use strict'; 

;(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS之类的
        module.exports = factory();
    } else {
        // 浏览器全局变量(root 即 window)
        root._log_hire = factory();
    }
}(this, function() {
    function _log_hire(obj) {
        obj = obj || {};
        var desc = obj.desc || 'Ever thought about joining us?';
        var url = obj.url || 'https://news.cgtn.com/event/2018/advertise-for-engineers/index.html'
    
        console.log('%c'+"__        __                      _     _      _             \n\\ \\      / /__    __ _ _ __ ___  | |__ (_)_ __(_)_ __   __ _ \n \\ \\ /\\ / / _ \\  / _` | '__/ _ \\ | '_ \\| | '__| | '_ \\ / _` |\n  \\ V  V /  __/ | (_| | | |  __/ | | | | | |  | | | | | (_| |\n   \\_/\\_/ \\___|  \\__,_|_|  \\___| |_| |_|_|_|  |_|_| |_|\\__, |\n                                                       |___/ ", 'font-family: "courier new"; color:#fff; font-weight:bold;background-color:#173b81;padding:1em;');
        console.log('%c'+desc, 'font-family:"courier new";color:#b7a457;font-size:24px;font-weight:bold;line-height:22px;');
        console.log(url);
    }
    
    return _log_hire;
}));
