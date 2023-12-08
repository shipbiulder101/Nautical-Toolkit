(function () {

  const ipc = require('electron').ipcRenderer;
  var winState = { maximized: true };

  function init() {
    document.getElementById("minimize-btn").addEventListener("click", function (e) {
      console.log("minimize pressed");
      ipc.send('minimizeWindow');
    });

    document.getElementById("maximize-btn").addEventListener("click", function (e){
        ipc.send('maximizeWindow')
    });

    document.getElementById("close-btn").addEventListener("click", function (e) {
      console.log("close pressed");
      ipc.send('closeWindow');
    });
  };

  document.onreadystatechange = (event) => {
    console.log("Document loaded");
    if (document.readyState == "complete") {
      console.log(document.readyState);
      init();
    }
  };
})();