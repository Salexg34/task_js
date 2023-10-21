// Given a function fn, an array of arguments args, 
// and an interval time t, return a cancel function cancelFn.
// The function fn should be called with args immediately and 
// then called again every t milliseconds until cancelFn is called at cancelT ms.

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
    fn(...args)
    const interval = setInterval(() => {
        fn(...args)
    }, t)
    function cancelFn() {
        clearInterval(interval)
    }
    return cancelFn
};