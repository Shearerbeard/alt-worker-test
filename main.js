/**
 * Created by shearerbeard on 11/14/15.
 */

import workerScript from "./main.worker";

console.info(workerScript);
let worker = new workerScript;
console.info(worker);

var timestamp;

window.onload = () => {
    let button = document.getElementById("button");
    let output = document.getElementById("output");

    button.addEventListener("click",
        () => {
            timestamp = window.performance.now();
            worker.postMessage({key: "test"})
        });

    worker.onmessage = (val) => {
        console.info(window.performance.now() - timestamp);
        output.textContent = val.data.count.toString();
    };
};

