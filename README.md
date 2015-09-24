# browser-compatibility

By default the namespace is set on the 'window' object at the top of the source file:

```
  var CONFIG = {
    namespace : 'browserCompatibility'
  }
```

---
There are 2 methods exposed for checking browser compatibility:
```
window.browserCompatibility.cookie() // returns true or false
```
and...
```
window.browserCompatibility.localStorage() // returns true or false
```
