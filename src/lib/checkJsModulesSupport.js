function checkJsModulesSupport() {
    // create an empty ES module
    const scriptAsBlob = new Blob([''], {
        type: 'application/javascript'
    });
    const srcObjectURL = URL.createObjectURL(scriptAsBlob);

    // insert the ES module and listen events on it
    const script = document.createElement('script');
    script.type = 'module';
    document.head.appendChild(script);

    // return the loading script Promise
    return new Promise((resolve, reject) => {
        // HELPERS
        let isFulfilled = false;

        function triggerResolve() {
            if (isFulfilled) return;
            isFulfilled = true;

            resolve();
            onFulfill();
        }

        function triggerReject() {
            if (isFulfilled) return;
            isFulfilled = true;

            reject();
            onFulfill();
        }

        function onFulfill() {
            // cleaning
            URL.revokeObjectURL(srcObjectURL);
            script.parentNode.removeChild(script)
        }

        // EVENTS
        script.onload = triggerResolve;
        script.onerror = triggerReject;
        setTimeout(triggerReject, 100); // reject on timeout

        // start loading the script
        script.src = srcObjectURL;
    });
};

checkJsModulesSupport().then(
    () => {
        console.log('ES modules ARE supported');
    },
    () => {
        console.log('ES modules are NOT supported');
    }
);