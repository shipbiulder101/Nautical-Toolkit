(function () {

  const{remote} = require('electron');
  var winState = { maximized: true }

  function init() {
    document.getElementById("minimize-btn")
    document.getElementById("minimize-btn").addEventListener("click", function (e) {
      console.log("minimize pressed");
      var window = remote.getFocusedWindow();
      window.minimize();
    });

    document.getElementById("maximize-btn").addEventListener("click", function (e){
      var window = remote.getFocusedWindow();
      if(winState.maximized == true){
        winState.maximized = false;
        window.setSize(1000, 800, false);
        console.log("Window un maximized");
      } else{
        winState.maximized = true;
        window.maximize();
        console.log("window maximized")
      }
    });

    document.getElementById("close-btn").addEventListener("click", function (e) {
      console.log("close pressed");
      var window = remote.getFocusedWindow();
      window.close();
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