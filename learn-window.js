function WindowSizeTest() {
    //inner很精确
    console.log('window inner size: ' + window.innerWidth + ' x ' + window.innerHeight);
    //outer有误差
    console.log('window outer size: ' + window.outerWidth + ' x ' + window.outerHeight);

    //获取屏幕分辨率
    console.log('Screen size = ' + screen.width + ' x ' + screen.height);
}

function NavigatorTest() {
    /**
     * navigator对象表示浏览器的信息，最常用的属性包括
     */
    console.log('appName = ' + navigator.appName);
    console.log('appVersion = ' + navigator.appVersion);
    console.log('language = ' + navigator.language);
    console.log('platform = ' + navigator.platform);
    console.log('userAgent = ' + navigator.userAgent);
}

function LocationTest() {
    /**
     * location:当前页面的URL信息
     */
    console.log(location.protocol); // 'http'
    console.log(location.host); // 'www.example.com'
    console.log(location.port); // '8080'
    console.log(location.pathname); // '/path/index.html'
    console.log(location.search); // '?a=1&b=2'
    console.log(location.hash);
}

function DocumentTest() {
    /**
     * document对象表示当前页面。由于HTML在浏览器中以DOM形式表示为树形结构，document对象就是整个DOM树的根节点。
     */
    console.log(document.title);
    document.title = "New Title!";
    console.log(document.title);

    var learnBasic = document.getElementById("learn-basic");
    console.log(learnBasic);
    var lis = document.getElementsByTagName("li");
    var items;
    for (let index = 0; index < lis.length; index++) {
        console.log(lis[index].innerText);
    }
}

function CookieTest() {
    /**
     * 服务器在设置Cookie时可以使用httpOnly，设定了httpOnly的Cookie将不能被JavaScript读取。
     */
    //启用后才能获取到
    console.log(document.cookie);
}

function QuerySelectorTest() {
    /**
     * 选取id,用"#id"
     * 选取标签,用"标签"
     * 选取class,用".class"
     * 选取属性,用"[属性]"
     * 
     */
    console.log("--------选择器--------");

    console.log(document.querySelector("p#test-p"));
    console.log(document.querySelector(".c-red.c-green").children);
    console.log(document.querySelectorAll(".c-green")[1].lastElementChild);

    /**
     * 与上面等效的写法
     */
    console.log("--------普通写法--------");
    console.log(document.getElementById("test-p"));
    console.log(document.getElementsByClassName("c-red c-green")[0].children);
    console.log(document.getElementsByClassName("c-green")[1].lastElementChild);
}

function DOMUpdateTest() {
    var p = document.getElementById('p-id-1');
    p.innerHTML = 'ABC <span style="color:red">RED</span> XYZ';
}

function DOMInsertTest() {
    var ul = document.getElementById('p-id-2');

    var p1 = document.createElement("p");
    p1.innerText = "ZXC";
    p1.style.margin = "0px";
    p1.style.background = "#FFAAAA";
    var p2 = document.createElement("p");
    ul.appendChild(p1);
    p2.innerText = "ABC";
    p2.style.margin = "0px";
    p2.style.background = "#AAFFAA";

    var p_index_1 = document.getElementById("p-index-1");
    ul.insertBefore(p2, p_index_1);
}

function DOMDeleteTest() {
    var p_index_1 = document.getElementById('p-index-1');
    p_index_1.parentElement.removeChild(p_index_1);

    /**
     * 虽然已经删除了该DOM节点,但它依然存在于内存中,可以访问到
     */
    console.log(p_index_1);
}

function FormTest() {
    console.log("view checkForm()");
}
function checkForm() {
    var test_form = document.getElementById('test-form');
    test_form.removeAttribute("hidden");

    var input_pwd = document.getElementById('input-password');
    var md5_pwd = document.getElementById('md5-password');
    // 把用户输入的明文变为MD5:
    md5_pwd.value = md5(input_pwd.value);

    // 继续下一步:
    return true;
}

function FileTest() {
    console.log("html的body在onload时加载了此FilteTest()方法: view checkForm()");
    ImageFileTest();
}
function ImageFileTest() {
    var
        fileInput = document.getElementById('test-image-file'),
        info = document.getElementById('test-image-info'),
        preview = document.getElementById('test-image-preview');
    // 监听change事件:
    fileInput.addEventListener('change', function () {
        // 清除背景图片:
        preview.style.backgroundImage = '';
        // 检查文件是否选择:
        if (!fileInput.value) {
            info.innerHTML = '没有选择文件';
            return;
        }
        // 获取File引用:
        var file = fileInput.files[0];
        // 获取File信息:
        info.innerHTML = '文件: ' + file.name + '<br>' + '大小: ' + file.size + '<br>' + '修改: ' + file.lastModifiedDate;
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
            alert('不是有效的图片文件!');
            return;
        }
        // 读取文件:
        var reader = new FileReader();
        reader.onload = function (e) {
            var data = e.target.result; // 'data:image/jpeg;base64,/9j/4AAQSk...(base64编码)...'            
            preview.style.backgroundImage = 'url(' + data + ')';
        };
        // 以DataURL的形式读取文件:
        reader.readAsDataURL(file);
    });
}

function getPrice() {
    function success(text) {
        var textarea = document.getElementById('test-response-text');
        textarea.value = text;
    }

    function fail(code) {
        var textarea = document.getElementById('test-response-text');
        textarea.value = 'Error code: ' + code;
    }

    var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象

    request.onreadystatechange = function () { // 状态发生变化时，函数被回调
        if (request.readyState === 4) { // 成功完成
            // 判断响应结果:
            if (request.status === 200) {
                // 成功，通过responseText拿到响应的文本:
                alert("成功:" + request.responseText);
                return success(request.responseText);
            } else {
                // 失败，根据响应码判断失败原因:
                alert("失败:" + request.status);
                return fail(request.status);
            }
        } else {
            // HTTP请求还在继续...
        }
    }

    // 发送请求:(因为是跨域请求,所以AJAX获取不到)
    request.open('GET', 'http://api.money.126.net/data/feed/0000001,1399001');
    request.send();

    alert('请求已发送，请等待响应...');
}

function refreshPrice(data) {
    var p = document.getElementById('test-ajax-info');
    p.innerHTML = '当前价格：' +
        data['0000001'].name + ': ' +
        data['0000001'].price + '；' +
        data['1399001'].name + ': ' +
        data['1399001'].price;
}

function sleep(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    }
}
function getPrice2() {
    //模拟耗时
    sleep(3000);

    var
        js = document.createElement('script'),
        head = document.getElementsByTagName('head')[0];

    //callback=refreshPrice:回调函数指向了refreshPrice方法,获取到数据以后,refreshPrice方法执行
    // js.src = 'http://api.money.126.net/data/feed/0000001,1399001?callback=refreshPrice';
    js.src = 'https://www.sojson.com/open/api/weather/json.shtml?city=%E5%8C%97%E4%BA%AC';
    head.appendChild(js);
}

function CallbackTest() {
    function callback() {
        console.log('Done' + new Date());
    }
    console.log('before setTimeout()');
    setTimeout(callback, 1000); // 1秒钟后调用callback函数
    setTimeout(callback, 2000); // 2秒钟后调用callback函数
    setTimeout(callback, 3000); // 3秒钟后调用callback函数
    console.log('after setTimeout()');
}

function test(resolve, reject) {
    /**
     * test的两个参数都是函数,函数名不是固定的,第一函数配合.then,第二个函数配合.catch
     */

    //随机生成0~2秒的超时时间
    var timeOut = Math.random() * 2;
    console.log('set timeout to: ' + timeOut + ' seconds.');
    setTimeout(function () {
        if (timeOut < 1) {
            console.log('call resolve()...');
            resolve('200 OK');
        }
        else {
            console.log('call reject()...');
            reject('timeout in ' + timeOut + ' seconds.');
        }
    }, timeOut * 1000);
}
function PromiseTest() {
    var p1 = new Promise(test);
    var p2 = p1.then(function (result) {
        console.log('成功：' + result);
    });
    var p3 = p2.catch(function (reason) {
        console.log('失败：' + reason);
    });
}

function PromiseTest2() {
    /**
     * 针对上一个例子的改写
     */
    new Promise(function (resolve, reject) {
        console.log('start new Promise...');
        var timeOut = Math.random() * 2;
        console.log('set timeout to: ' + timeOut + ' seconds.');
        setTimeout(function () {
            if (timeOut < 1) {
                console.log('call resolve()...');
                resolve('200 OK');
            }
            else {
                console.log('call reject()...');
                reject('timeout in ' + timeOut + ' seconds.');
            }
        }, timeOut * 1000);
    }).then(function (r) {
        console.log('Done: ' + r);
    }).catch(function (reason) {
        console.log('Failed: ' + reason);
    });
}

function PromiseTest3() {
    // 0.5秒后返回input*input的计算结果(reject未用到):
    function multiply(input) {
        return new Promise(function (resolve, reject) {
            console.log('calculating ' + input + ' x ' + input + '...');
            setTimeout(resolve, 500, input * input);
        });
    }

    // 0.5秒后返回input+input的计算结果(reject未用到):
    function add(input) {
        return new Promise(function (resolve, reject) {
            console.log('calculating ' + input + ' + ' + input + '...');
            setTimeout(resolve, 500, input + input);
        });
    }

    var p = new Promise(function (resolve, reject) {
        console.log('start new Promise...');
        resolve(123);
    });

    /**
     * 串行执行一系列需要异步计算获得结果的任务
     * 该段注释代码不能与下面代码同时
     */
    p.then(multiply)
        .then(add)
        .then(multiply)
        .then(add)
        .then(multiply)
        .then(add)
        .then(multiply)
        .then(add)
        .then(function (result) {
            console.log('Got value: ' + result);
        });

}

function PromiseTest4() {
    // 0.5秒后返回input*input的计算结果(带判断的,用到了reject):
    function checkedMultiply(input) {
        return new Promise(function (resolve, reject) {
            if (input < 10000) {
                console.log('calculating ' + input + ' x ' + input + '...');
                setTimeout(resolve, 500, input * input);
            }
            else {
                console.log('overflow ' + input + ' x ' + input + '...');
                setTimeout(reject, 500, input * input);
            }
        });
    }

    // 0.5秒后返回input+input的计算结果(reject未用到):
    function add(input) {
        return new Promise(function (resolve, reject) {
            console.log('calculating ' + input + ' + ' + input + '...');
            setTimeout(resolve, 500, input + input);
        });
    }

    var p = new Promise(function (resolve, reject) {
        console.log('start new Promise...');
        resolve(123);
    });

    /**
     * 串行执行一系列需要异步计算获得结果的任务
     * 如果中途进入了reject(第二个方法,并非固定写法的关键字,可以任意起名)
     * 第三次运行乘法时,调用了reject,系列任务执行终止
     */
    p.then(checkedMultiply)
        .then(add)
        .then(checkedMultiply)
        .then(add)
        .then(checkedMultiply)
        .then(add)
        .then(function (result) {
            console.log('Got value: ' + result);
        });
}

function PromiseTest5() {
    /**
     * 试想一个页面聊天系统，我们需要从两个不同的URL分别获得用户的个人信息和好友列表，这两个任务是可以并行执行的
     */
    var p1 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 500, 'P1');
    });
    var p2 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 1000, 'P2');
    });
    var p3 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 2000, 'P3');
    });
    // all -> 全部执行
    Promise.all([p1, p2, p3]).then(function (results) {
        for (let index = 0; index < results.length; index++) {
            console.log(results[index]);
        }
    });
}

function PromiseTest6() {
    /**
     * 有些时候，多个异步任务是为了容错。比如，同时向两个URL读取用户的个人信息，只需要获得先返回的结果即可
     */
    var p1 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 500, 'P1');
    });
    var p2 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 1000, 'P2');
    });
    var p3 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 2000, 'P3');
    });
    // race -> 竞速执行
    Promise.race([p1, p2, p3]).then(function (results) {
        for (let index = 0; index < results.length; index++) {
            console.log(results[index]);
        }
    });
}

function CanvasTest() {
    var
        canvas = document.getElementById('test-canvas'),
        ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 200, 200); // 擦除(0,0)位置大小为200x200的矩形，擦除的意思是把该区域变为透明
    ctx.fillStyle = '#FFDDEE'; // 设置颜色
    ctx.fillRect(10, 10, 130, 130); // 把(10,10)位置大小为130x130的矩形涂色
    // 利用Path绘制复杂路径:
    var path = new Path2D();
    path.arc(75, 75, 50, 0, Math.PI * 2, true);
    path.moveTo(110, 75);
    path.arc(75, 75, 35, 0, Math.PI, false);
    path.moveTo(65, 65);
    path.arc(60, 65, 5, 0, Math.PI * 2, true);
    path.moveTo(95, 65);
    path.arc(90, 65, 5, 0, Math.PI * 2, true);
    ctx.strokeStyle = '#0000ff';
    ctx.stroke(path);
    ctx.clearRect(0, 0, 100, 10);
}

function CanvasTest2() {
    var
        canvas = document.getElementById('test-canvas'),
        ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    ctx.shadowColor = '#666666';
    ctx.font = '24px Arial';
    ctx.fillStyle = '#333333';
    ctx.fillText('带阴影的文字', 20, 40);
}