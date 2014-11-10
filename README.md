# SessionVar
Tiny Package that stores session-variables with the syntax of ReactiveVar


Usage:
```js
var mySessionVar = new SessionVar('SessionVarKey', 'initial value');
mySessionVar.get(); // => 'initial value'
mySessionVar.set('bagger vance');
mySessionVar.get(); // => 'bagger vance'
Session.get('SessionVarKey') // => 'bagger vance'
```
