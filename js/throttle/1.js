function throttle(func, wait) {
    var previous = 0;
    var time = null;
    return function () {
        var now = new Date().getTime();
        const remainTime = wait - (now - previous);// 0.2 - 0
        if(now - previous > wait) {
            func();
            previous = now;
        } else if(!time) {
            time = setTimeout(() => {
                func();
                time = null;
                // 时间戳，只运用于头事件
                // 之后中间的事件触发 （时间戳和timeout是互竞的）
                // 为了不让时间戳触发事件，更新previous
                previous = new Date().getTime()
            }, remainTime)
        }
    }
}