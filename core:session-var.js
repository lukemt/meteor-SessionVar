
SessionVar = function(key, initialValue){
    if (! (this instanceof SessionVar))
    // called without `new`
        return new SessionVar(key, initialValue);

    this.key = key;
    // check if already defined
    if( SessionVar.keys.indexOf(key) !== -1 )
        console.warn('SessionVar(' + key + ') defined twice!');
    SessionVar.keys.push(key);

    // set initial value
    if( typeof initialValue !== 'undefined' && typeof this.get() === 'undefined' )
        this.set(initialValue);
}
SessionVar.prototype.get = function (){
    return Session.get(this.key);
}
SessionVar.prototype.set = function (value){
    return Session.set(this.key, value);
}
SessionVar.prototype.toString = function () {
    return 'SessionVar{' + this.get() + '}';
};
SessionVar.keys = [];
