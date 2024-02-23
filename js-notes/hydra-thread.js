self.addEventListener("message", receiveMessage);
_this = window = self;
self.THREAD = true;
var Global = {};
function receiveMessage(e) {
    if (e.data.es6) {
        self[e.data.name] = eval(e.data.es6);
        return
    }
    if (e.data.es5) {
        if (e.data.sup) {
            self[e.data.name] = eval(`(function(){${e.data.sup} ${e.data.es5} return ${e.data.name};})()`)
        } else {
            self.eval(e.data.es5)
        }
        e.data.proto.forEach(obj=>{
            self.eval(obj.string);
            self[e.data.name].prototype[obj.key] = self[obj.key];
            delete self[obj.key]
        }
        );
        return
    }
    if (e.data.code) {
        self.eval(e.data.code);
        return
    }
    if (e.data.importScript) {
        importScripts(e.data.path);
        return
    }
    if (e.data.fn) {
        if (!self[e.data.fn])
            throw `Thread missing ${e.data.fn}`;
        self[e.data.fn](e.data, e.data.id);
        return
    }
    if (e.data.message.fn) {
        if (!self[e.data.message.fn])
            return;
        self[e.data.message.fn](e.data.message, e.data.id);
        return
    }
}
function resolve(data, id, buffer) {
    if (!(data && id)) {
        id = data;
        data = null
    }
    var message = {
        post: true,
        id: id,
        message: data
    };
    if (buffer) {
        for (var key in data) {
            message[key] = data[key];
            message.message[key] = message[key]
        }
        self.postMessage(message, buffer)
    } else {
        self.postMessage(message)
    }
}
function emit(evt, msg, buffer) {
    if (buffer) {
        self.postMessage(msg, buffer)
    } else {
        var data = {
            emit: true,
            evt: evt,
            msg: msg
        };
        self.postMessage(data)
    }
}
if (!self.console) {
    console = {
        log: function(message) {
            self.postMessage({
                console: true,
                message: message
            })
        }
    }
}
Class = function(_class, _type, _static) {
    const _this = this || window;
    const _name = _class.name || _class.toString().match(/function ([^\(]+)/)[1];
    if (typeof _type === "function") {
        _static = _type;
        _type = null
    }
    _type = (_type || "").toLowerCase();
    if (!_type) {
        _this[_name] = _class;
        _static && _static()
    } else {
        if (_type == "static") {
            _this[_name] = new _class
        } else if (_type == "singleton") {
            _this[_name] = _class;
            (function() {
                let _instance;
                _this[_name].instance = function(a, b, c) {
                    if (!_instance)
                        _instance = new _class(a,b,c);
                    return _instance
                }
            }());
            _static && _static()
        }
    }
    if (this !== window)
        this[_name]._namespace = this.__namespace
}
;
Inherit = function(child, parent, params) {
    parent.apply(child, params);
    const save = {};
    for (let method in child) {
        save[method] = child[method]
    }
    defer(()=>{
        for (let method in child) {
            if (save[method] && child[method] !== save[method]) {
                if (child["_" + method])
                    throw `Attempt to overwrite ${method} method twice in ${child.constructor.name}`;
                child["_" + method] = save[method]
            }
        }
    }
    )
}
;
Namespace = function(obj) {
    if (typeof obj === "string") {
        window[obj] = {
            Class,
            __namespace: obj
        }
    } else {
        obj.Class = Class;
        obj.__namespace = obj.constructor.name || obj.constructor.toString().match(/function ([^\(]+)/)[1]
    }
}
;
{
    window._modules = {};
    window.Module = function(module) {
        let m = new module;
        let name = module.toString().slice(0, 100).match(/function ([^\(]+)/)[1];
        window._modules[name] = m.exports
    }
    ;
    function req(name) {
        return window._modules[name]
    }
    if (!window._NODE_) {
        window.requireNative = window.require;
        window.require = req
    }
}
if (typeof console === "undefined") {
    window.console = {};
    console.log = console.error = console.info = console.debug = console.warn = console.trace = function() {}
}
window.performance = function() {
    if (window.performance && window.performance.now)
        return window.performance;
    else
        return Date
}();
Date.now = Date.now || function() {
    return +new Date
}
;
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function() {
        return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function() {
            const start = Date.now();
            return function(callback) {
                window.setTimeout(()=>callback(Date.now() - start), 1e3 / 60)
            }
        }()
    }()
}
window.defer = window.requestAnimationFrame;
window.clearTimeout = function() {
    const _clearTimeout = window.clearTimeout;
    return function(ref) {
        if (window.Timer)
            return Timer.__clearTimeout(ref) || _clearTimeout(ref);
        return _clearTimeout(ref)
    }
}();
window.requestIdleCallback = function() {
    const _requestIdleCallback = window.requestIdleCallback;
    return function(callback, max) {
        if (_requestIdleCallback) {
            return _requestIdleCallback(callback, max ? {
                timeout: max
            } : null)
        }
        return defer(()=>{
            callback({
                didTimeout: false
            })
        }
        , 0)
    }
}();
window.onIdle = window.requestIdleCallback;
if (typeof Float32Array == "undefined")
    Float32Array = Array;
Math.sign = function(x) {
    x = +x;
    if (x === 0 || isNaN(x))
        return Number(x);
    return x > 0 ? 1 : -1
}
;
Math._round = Math.round;
Math.round = function(value, precision=0) {
    let p = Math.pow(10, precision);
    return Math._round(value * p) / p
}
;
Math._random = Math.random;
Math.rand = Math.random = function(min, max, precision=0) {
    if (typeof min === "undefined")
        return Math._random();
    if (min === max)
        return min;
    min = min || 0;
    max = max || 1;
    if (precision == 0)
        return Math.floor(Math._random() * (max + 1 - min) + min);
    return Math.round(min + Math._random() * (max - min), precision)
}
;
Math.degrees = function(radians) {
    return radians * (180 / Math.PI)
}
;
Math.radians = function(degrees) {
    return degrees * (Math.PI / 180)
}
;
Math.clamp = function(value, min=0, max=1) {
    return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max))
}
;
Math.map = Math.range = function(value, oldMin=-1, oldMax=1, newMin=0, newMax=1, isClamp) {
    const newValue = (value - oldMin) * (newMax - newMin) / (oldMax - oldMin) + newMin;
    if (isClamp)
        return Math.clamp(newValue, Math.min(newMin, newMax), Math.max(newMin, newMax));
    return newValue
}
;
Math.mix = function(a, b, alpha) {
    return a * (1 - alpha) + b * alpha
}
;
Math.step = function(edge, value) {
    return value < edge ? 0 : 1
}
;
Math.smoothStep = function(min, max, value) {
    const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
    return x * x * (3 - 2 * x)
}
;
Math.fract = function(value) {
    return value - Math.floor(value)
}
;
Math.lerp = function(target, value, alpha, calcHz=true) {
    if (calcHz) {
        alpha = Math.framerateNormalizeLerpAlpha(alpha)
    } else {
        alpha = Math.clamp(alpha)
    }
    return value + (target - value) * alpha
}
;
{
    const mainThread = !!window.document;
    Math.framerateNormalizeLerpAlpha = function(t) {
        t = Math.clamp(t);
        if (!mainThread)
            return t;
        return 1 - Math.exp(Math.log(1 - t) * Render.FRAME_HZ_MULTIPLIER)
    }
}
Math.mod = function(value, n) {
    return (value % n + n) % n
}
;
Object.defineProperty(Array.prototype, "shuffle", {
    writable: true,
    value: function() {
        let currentIndex = this.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [this[currentIndex],this[randomIndex]] = [this[randomIndex], this[currentIndex]]
        }
        return this
    }
});
Array.storeRandom = function(arr) {
    arr.randomStore = []
}
;
Object.defineProperty(Array.prototype, "random", {
    writable: true,
    value: function(range) {
        let value = Math.random(0, this.length - 1);
        if (arguments.length && !this.randomStore)
            Array.storeRandom(this);
        if (!this.randomStore)
            return this[value];
        if (range > this.length - 1)
            range = this.length;
        if (range > 1) {
            while (!!~this.randomStore.indexOf(value))
                if ((value += 1) > this.length - 1)
                    value = 0;
            this.randomStore.push(value);
            if (this.randomStore.length >= range)
                this.randomStore.shift()
        }
        return this[value]
    }
});
Object.defineProperty(Array.prototype, "remove", {
    writable: true,
    value: function(element) {
        if (!this.indexOf)
            return;
        const index = this.indexOf(element);
        if (!!~index)
            return this.splice(index, 1)
    }
});
Object.defineProperty(Array.prototype, "last", {
    writable: true,
    value: function() {
        return this[this.length - 1]
    }
});
window.Promise = window.Promise || {};
if (!Array.prototype.flat) {
    Object.defineProperty(Array.prototype, "flat", {
        configurable: true,
        value: function flat() {
            var depth = isNaN(arguments[0]) ? 1 : Number(arguments[0]);
            return depth ? Array.prototype.reduce.call(this, function(acc, cur) {
                if (Array.isArray(cur)) {
                    acc.push.apply(acc, flat.call(cur, depth - 1))
                } else {
                    acc.push(cur)
                }
                return acc
            }, []) : Array.prototype.slice.call(this)
        },
        writable: true
    })
}
Promise.create = function() {
    const promise = new Promise((resolve,reject)=>{
        this.temp_resolve = resolve;
        this.temp_reject = reject
    }
    );
    promise.resolve = this.temp_resolve;
    promise.reject = this.temp_reject;
    delete this.temp_resolve;
    delete this.temp_reject;
    return promise
}
;
Promise.catchAll = function(array) {
    return Promise.all(array.map(promise=>promise && typeof promise.catch === "function" ? promise.catch(error=>{
        Promise.reject(error)
    }
    ) : promise))
}
;
Promise.timeout = function(promise, timeout) {
    if (Array.isArray(promise)) {
        promise = Promise.all(promise)
    }
    var timeoutPromise = Promise.create();
    var ref = Timer.create(timeoutPromise.resolve, timeout);
    return Promise.race([promise, timeoutPromise]).finally(function() {
        Timer.__clearTimeout(ref)
    })
}
;
(function() {
    function isRegExp(it) {
        var isObject = typeof it == "object" ? it !== null : typeof it == "function";
        if (!isObject)
            return false;
        var match = it[typeof Symbol !== "undefined" ? Symbol.match : "match"];
        if (match !== undefined)
            return !!match;
        return Object.prototype.toString.call(it).slice(8, -1) === "RegExp"
    }
    function notRegExp(it) {
        if (isRegExp(it))
            throw new Error("First argument to String.prototype.includes must not be a regular expression");
        return it
    }
    Object.defineProperty(String.prototype, "includes", {
        writable: true,
        value: function(str) {
            if (!Array.isArray(str))
                return !!~this.indexOf(notRegExp(str));
            for (let i = str.length - 1; i >= 0; i--) {
                if (!!~this.indexOf(notRegExp(str[i])))
                    return true
            }
            return false
        }
    })
}());
Object.defineProperty(String.prototype, "equals", {
    writable: true,
    value: function(str) {
        let compare = String(this);
        if (!Array.isArray(str))
            return str === compare;
        for (let i = str.length - 1; i >= 0; i--) {
            if (str[i] === compare)
                return true
        }
        return false
    }
});
Object.defineProperty(String.prototype, "strpos", {
    writable: true,
    value: function(str) {
        console.warn("strpos deprecated: use .includes()");
        return this.includes(str)
    }
});
Object.defineProperty(String.prototype, "clip", {
    writable: true,
    value: function(num, end="") {
        return this.length > num ? this.slice(0, Math.max(0, num - end.length)).trim() + end : this.slice()
    }
});
Object.defineProperty(String.prototype, "capitalize", {
    writable: true,
    value: function() {
        return this.charAt(0).toUpperCase() + this.slice(1)
    }
});
Object.defineProperty(String.prototype, "replaceAll", {
    writable: true,
    value: function(find, replace) {
        return this.split(find).join(replace)
    }
});
Object.defineProperty(String.prototype, "replaceAt", {
    writable: true,
    value: function(index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length)
    }
});
if (!window.fetch || !window.AURA && location.protocol.includes("file"))
    window.fetch = function(url, options) {
        options = options || {};
        const promise = Promise.create();
        const request = new XMLHttpRequest;
        request.open(options.method || "get", url);
        if (url.includes(".ktx"))
            request.responseType = "arraybuffer";
        for (let i in options.headers) {
            request.setRequestHeader(i, options.headers[i])
        }
        request.onload = ()=>{
            promise.resolve(response())
        }
        ;
        request.onerror = promise.reject;
        request.send(options.body);
        function response() {
            let keys = [], all = [], headers = {}, header;
            request.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm, (m,key,value)=>{
                keys.push(key = key.toLowerCase());
                all.push([key, value]);
                header = headers[key];
                headers[key] = header ? `${header},${value}` : value
            }
            );
            return {
                ok: (request.status / 200 | 0) == 1,
                status: request.status,
                statusText: request.statusText,
                url: request.responseURL,
                clone: response,
                text: ()=>Promise.resolve(request.responseText),
                json: ()=>Promise.resolve(request.responseText).then(JSON.parse),
                xml: ()=>Promise.resolve(request.responseXML),
                blob: ()=>Promise.resolve(new Blob([request.response])),
                arrayBuffer: ()=>Promise.resolve(request.response),
                headers: {
                    keys: ()=>keys,
                    entries: ()=>all,
                    get: n=>headers[n.toLowerCase()],
                    has: n=>n.toLowerCase()in headers
                }
            }
        }
        return promise
    }
    ;
window.get = function(url, options={
    credentials: "same-origin"
}) {
    let promise = Promise.create();
    options.method = "GET";
    fetch(url, options).then(handleResponse).catch(promise.reject);
    function handleResponse(e) {
        if (!e.ok)
            return promise.reject(e);
        e.text().then(text=>{
            if (text.charAt(0).includes(["[", "{"])) {
                try {
                    promise.resolve(JSON.parse(text))
                } catch (err) {
                    promise.resolve(text)
                }
            } else {
                promise.resolve(text)
            }
        }
        )
    }
    return promise
}
;
window.post = function(url, body={}, options={}) {
    let promise = Promise.create();
    options.method = "POST";
    if (body)
        options.body = typeof body === "object" || Array.isArray(body) ? JSON.stringify(body) : body;
    if (!options.headers)
        options.headers = {
            "content-type": "application/json"
        };
    fetch(url, options).then(handleResponse).catch(promise.reject);
    function handleResponse(e) {
        if (!e.ok)
            return promise.reject(e);
        e.text().then(text=>{
            if (text.charAt(0).includes("[") || text.charAt(0).includes("{")) {
                try {
                    promise.resolve(JSON.parse(text))
                } catch (err) {
                    promise.resolve(text)
                }
            } else {
                promise.resolve(text)
            }
        }
        )
    }
    return promise
}
;
window.put = function(url, body, options={}) {
    let promise = Promise.create();
    options.method = "PUT";
    if (body)
        options.body = typeof body === "object" || Array.isArray(body) ? JSON.stringify(body) : body;
    fetch(url, options).then(handleResponse).catch(promise.reject);
    function handleResponse(e) {
        if (!e.ok)
            return promise.reject(e);
        e.text().then(text=>{
            if (text.charAt(0).includes(["[", "{"])) {
                try {
                    promise.resolve(JSON.parse(text))
                } catch (err) {
                    promise.resolve(text)
                }
            } else {
                promise.resolve(text)
            }
        }
        )
    }
    return promise
}
;
if (typeof WeakRef === "undefined") {
    (function() {
        var targetProp = typeof Symbol !== "undefined" ? Symbol("WeakRefTarget") : "@@WeakRefTarget";
        function WeakRef(target) {
            this[targetProp] = target
        }
        WeakRef.prototype.deref = function() {
            return this[targetProp]
        }
        ;
        window.WeakRef = WeakRef
    }())
}
defer = function(callback) {
    if (callback) {
        return setTimeout(callback, 1)
    }
    return new Promise(resolve=>setTimeout(resolve, 1))
}
