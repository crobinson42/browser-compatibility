
(function(){
  // namespace is used to name the var this will be available from on 'window'
  var CONFIG = {
    namespace : 'browserCompatibility'
  }
  // cache vars
  var cookie = null,
      localStorage = null;

  var checkCookie = function () {
    if (cookie !== null) {
      return cookie;
    }
    var test = 'test';
    try {
      document.cookie = "test=test;";
      var x = (document.cookie.match('test=test;')) ? true : false;
      cookie = x;
      return x;
    } catch (e) {
      console.log(e);
      cookie = false;
      return false;
    }
  };

  var checkLocalStorage = function () {
    if (localStorage !== null) {
      return localStorage;
    }
    var test = 'test';
    try {
      window.localStorage.setItem('browserCompatibilityTest', test);
      var x = (window.localStorage.getItem('browserCompatibilityTest') == test) ? true : false;
      localStorage = x;
      return x;
    } catch (e) {
      console.log(e);
      localStorage = false;
      return false;
    }
  };

  return window[CONFIG.namespace] = {
    cookie : checkCookie,
    localStorage : checkLocalStorage
  };

}());
