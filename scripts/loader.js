requirejs.config({
    baseUrl: "",
    paths: {
        luxon: ".//scripts//luxon",
        three: ".//scripts//three",
    },
});
requirejs(["scripts/ClaimScripts.js"], function () {
    Window.notifyDone();
});
