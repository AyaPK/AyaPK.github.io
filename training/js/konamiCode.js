
function konamiCode(cb) {
    var secret = "38384040373937396665"; //Konami Code
    var input = '';

    document.addEventListener('keydown', function (e) {
      input += ("" + e);

      if (input === secret) {
        return cb();
      }

      if (!secret.indexOf(input)) return;
      input = ("" + e);
      console.log(input)
      
    });

  }
  
  konamiCode(function () {alert('done')})