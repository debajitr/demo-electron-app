// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const si = require('systeminformation');

function init() {
    var cpuMeta = si.cpu();
    cpuMeta.then(data => {debugger;}, err => {debugger;});
}

init();
