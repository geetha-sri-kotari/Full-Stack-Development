function fun1 () {
    return new Promise (function(resolve) {
        setTimeout(function() {
            resolve(1);
        }, 1000);
    })
}
function fun2 (value) {
    return new Promise (function(resolve) {
        setTimeout(function() {
            resolve(value + 1);
        }, 1000);
    })
}
function fun3 (value) {
    return new Promise (function(resolve) {
        setTimeout(function() {
            resolve(value + 1);
        }, 1000);
    })
}
async function execute () {
    const res1 = await fun1();
    const res2 = await fun2(res1);
    const res3 = await fun3(res2);
    console.log(res3);
}
execute();