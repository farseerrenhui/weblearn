function SelectorTest() {
    console.log("按ID查找 -> $('#learn-jquery')");
    console.log($('#learn-jquery'));

    console.log("按tag查找 -> 'ul'");
    console.log($('ul'));

    console.log('按class查找 -> .right');
    console.log($('.right'));

    console.log('按属性查找 -> [name=jquery]');
    console.log($('[name=jquery]'));
}

function MultiSelectorTest() {
    console.log('组合查找 -> ul[name=jquery]');
    console.log($('ul[name=jquery]'));

    console.log('多项选择器 -> ul,li');
    console.log($('ul,li'));
    console.log('多项选择器 -> ul#learn-basic,ul#learn-window,ul[name=jquery]');
    console.log($('ul#learn-basic,ul#learn-window,ul[name=jquery]'));
}

function DescendantSelectorTest() {
    /**
     * 如果两个DOM元素具有层级关系，就可以用$('ancestor descendant')来选择，层级之间用空格隔开
     */
    console.log('层级选择器 -> .right #learn-jquery li[name=DescendantSelectorTest]');
    console.log($('.right #learn-jquery li[name=DescendantSelectorTest]'));

    console.log('子选择器(箭头左右两端必须是直接父子元素) -> .right>#learn-jquery>li[name=DescendantSelectorTest]');
    console.log($('.right>#learn-jquery>li[name=DescendantSelectorTest]'));
}

function FilterSelectorTest() {
    /**
     * 过滤器一般不单独使用，它通常附加在选择器上，帮助我们更精确地定位元素。
     */
    console.log('.right #learn-jquery li');
    console.log($('.right #learn-jquery li'));

    console.log('第一个子元素 -> .right #learn-jquery li:first-child');
    console.log($('.right #learn-jquery li:first-child'));

    console.log('最后一个子元素 -> .right #learn-jquery li:last-child');
    console.log($('.right #learn-jquery li:last-child'));

    console.log('第3个元素(序号从1开始) -> .right #learn-jquery li:nth-child(2)');
    console.log($('.right #learn-jquery li:nth-child(3)'));

    console.log('偶数序号的元素 -> .right #learn-jquery li:nth-child(even)');
    console.log($('.right #learn-jquery li:nth-child(even)'));

    console.log('奇数序号的元素 -> .right #learn-jquery li:nth-child(odd)');
    console.log($('.right #learn-jquery li:nth-child(odd)'));
}

function FormSelectorTest() {
    console.log(':input：可以选择<input>，<textarea>，<select>和<button>');
    console.log(':file：可以选择<input type="file">，和input[type=file]一样');
    console.log(':checkbox：可以选择复选框，和input[type=checkbox]一样');
    console.log(':radio：可以选择单选框，和input[type=radio]一样');
    console.log(":focus：可以选择当前输入焦点的元素，例如把光标放到一个<input>上，用$('input:focus')就可以选出");
    console.log(":checked：选择当前勾上的单选框和复选框，用这个选择器可以立刻获得用户选择的项目，如$('input[type=radio]:checked')");
    console.log(':enabled：可以选择可以正常输入的<input>、<select>等，也就是没有灰掉的输入');
    console.log(':disabled：和:enabled正好相反，选择那些不能输入的');


    console.log($('#testform :input'));
    console.log($('#testform :checked'));
    console.log($('#testform :visible'));
    console.log($('#testform :hidden'));
}

function FindSelectorTest() {
    /**
     * 当我们拿到一个jQuery对象后，还可以以这个对象为基准，进行查找和过滤。
     */
    var ul = $('#learn-jquery');
    console.log(ul);

    console.log(ul.find('li'));
    console.log(ul.find('[name=DescendantSelectorTest]'));
}

function FilterSelecterTest() {
    var all_li = $('li');
    console.log(all_li);

    console.log("过滤出all_li中内容以class为c1的");
    console.log(all_li.filter('.c1'));

    console.log("过滤出all_li中内容以F开头的");
    console.log(all_li.filter(function () {
        //函数内部的this被绑定为DOM对象，不是jQuery对象
        return this.innerHTML.indexOf('F') == 0;
    }));

    console.log("map()方法把一个jQuery对象包含的若干DOM节点转化为其他对象");
    console.log(all_li.map(function () {
        return this.innerHTML;
    }).get());
}

function DOMTest() {
    console.log('修改DOM节点的HTML');
    console.log($('#test-dom .js').html('<li class="js" style="color:red">JavaScript</li>'));
    console.log('修改DOM节点的TEXT');
    console.log($('#test-dom .jee').text('Spring SpringMVC Mybatis'));
    console.log('获取CSS属性(获取到了原始的属性)');
    console.log($('#test-dom .js').css('color'));
    console.log('设置CSS属性');
    console.log($('#test-dom .cs').css('color', '#FF00FF'));
}

function HideDOM() {
    console.log('隐藏python的<li>');
    $('.lang.dynamic.py').hide();
}

function ShowDOM() {
    console.log('显示python的<li>');
    $('.lang.dynamic.py').show();
}

function GetDOM() {
    console.log('浏览器可视窗口大小');
    console.log($(window).width());
    console.log($(window).height());


    console.log('HTML文档大小');
    console.log($(document).width());
    console.log($(document).height());

    console.log('get某个div的大小');
    var div = $('#test-dom');
    console.log(div.width());
    console.log(div.height());

}

function SetDOM() {
    console.log('set某个div的大小');
    var div = $('#test-dom');
    console.log(div.width('100px'));//宽度设置无效,原因未知
    console.log(div.height('200px'));
}

function GetDOMAttr() {
    console.log('attr()和removeAttr()方法用于操作DOM节点的属性');
    var li = $('.lang.cs');
    console.log(li.attr('popular'));
}

function RemoveDOMAttr() {
    var li = $('.lang.cs');
    li.removeAttr('popular');
    console.log(li.attr('popular'));
    li.attr('popular', 'World');
    console.log(li.attr('popular'));
}

function AttrPropTest() {
    /**
     * prop()方法和attr()类似，但是HTML5规定有一种属性在DOM节点中可以没有值，只有出现与不出现两种，例如
     * <input id="test-radio1" type="radio" name="test" checked value="1">
     */
    console.log('三种属性获取方式');
    var radio = $('#test-radio1');
    console.log(radio.attr('checked'));
    console.log(radio.prop('checked'));
    console.log(radio.is(':checked'));
}

function GetValTest() {
    var
        input = $('#test-input'),
        select = $('#test-select'),
        textarea = $('#test-textarea');

    console.log(input.val());
    console.log(select.val());
    console.log(textarea.val());
}

function SetValTest() {
    var
        input = $('#test-input'),
        select = $('#test-select'),
        textarea = $('#test-textarea');

    input.val('Value From SetValTest');
    select.val('SH');
    textarea.val('Value From SetValTest')
}

function AddDOMTest() {
    var ul = $('#test-dom2>ul');
    //append在最后面添加元素
    ul.append('<li><span>Object-C</span></li>');

    //prepend在最前面添加元素
    var cpp = document.createElement('li');
    cpp.innerHTML = '<span>C++</span>'
    ul.prepend(cpp);

    //将现有元素取走之后添加到最后面
    ul.append($('#li-js'));

    //移除元素
    $('#li-py').remove();
}

function ClickEventButton() {
    var li = $('#li-event');
    li.on('click', function () {
        console.log("通过点击ClickEventButton绑定了一个点击事件,第一种写法");
    });
    li.click(function () {
        console.log("通过点击ClickEventButton又绑定了一个点击事件,第二种写法");
    });
}

function MouseEnterEventButton() {
    var li = $('#li-event');
    li.mouseenter(function () {
        console.log("通过点击MouseEnterEventButton绑定了鼠标进入事件");
    });
}

function OtherEventInfoButton() {
    console.log("鼠标事件");
    console.log("click: 鼠标单击时触发；");
    console.log("dblclick：鼠标双击时触发；");
    console.log("mouseenter：鼠标进入时触发；");
    console.log("mouseleave：鼠标移出时触发；");
    console.log("mousemove：鼠标在DOM内部移动时触发；");
    console.log("hover：鼠标进入和退出时触发两个函数，相当于mouseenter加上mouseleave。");
    console.log("键盘事件");
    console.log("键盘事件仅作用在当前焦点的DOM上，通常是<input>和<textarea>。");
    console.log("keydown：键盘按下时触发；");
    console.log("keyup：键盘松开时触发；");
    console.log("keypress：按一次键后触发。");
    console.log("其他事件");
    console.log("focus：当DOM获得焦点时触发；");
    console.log("blur：当DOM失去焦点时触发；");
    console.log("change：当<input>、<select>或<textarea>的内容改变时触发；");
    console.log("submit：当<form>提交时触发；");
    console.log("ready：当页面被载入并且DOM树完成初始化后触发，仅作用于document对象，适合用来写其他的初始化代码。");
}

//下面代码在页面加载时运行
$(document).ready(function () {
    console.log('init A...(document加载时调用了ready方法...)');
});
$(function () {
    //$(document).ready的简化写法
    console.log('init B...(document加载时调用了ready方法...)');
});

var TestMouseMove = function (e) {
    $('#testMouseMoveSpan').text('pageX = ' + e.pageX + ', pageY = ' + e.pageY);
};
var TestMouseMove2 = function (e) {
    $('#testMouseMoveSpan2').text('pageX = ' + e.pageX + ', pageY = ' + e.pageY);
};
function AddMouseMove() {
    $('#testMouseMoveDiv').mousemove(TestMouseMove);
    $('#testMouseMoveDiv').mousemove(TestMouseMove2);
}

function DelMouseMove() {
    //按照绑定的事件移除
    $('#testMouseMoveDiv').off('mousemove', TestMouseMove);
}

function DelMouseMoveALL() {
    //全部移除
    $('#testMouseMoveDiv').off('mousemove');
}

function SampleTextChange() {
    console.log($('#sample-text').val());
}

function EventConditionTest() {
    console.log("点击EventConditionTest后,使用js无法触发事件,需要显式调用事件.");
    $('#sample-text').val('使用JS代码设置的值');

    console.log("下面的输出是显示调用了change()来触发change事件,两种写法均有效");
    $('#sample-text').trigger('change');
    $('#sample-text').change();
}

function PopupTest() {
    window.open('/');
}

//这种直接弹出的代码,大多会被浏览器拦截
//window.open('/');

function AnimationTest() {
    $('#img-world').hide(3000);
}

function imgAnimate() {
    var img = $('#img-world');
    img.animate({
        opacity: 0.25,
        width: '120px',
        height: '60px'
    }, 2000); // 在2秒钟内CSS过渡到设定值
}

function imgAnimateWithFunction() {
    var img = $('#img-world');
    img.animate({
        opacity: 0.25,
        width: '120px',
        height: '60px'
    }, 2000, function () {
        alert('动画已结束,执行回调函数去恢复状态.');
        // 恢复至初始状态:
        $(this).css('opacity', '1.0').css('width', '100%').css('height', '100%');
    });
}

function SerialAnimate() {
    var img = $('#img-world');
    /**
     * 执行一串动画
     */
    img.hide(500)
        .slideDown(2000)
        .delay(1000)
        .animate({
            width: '50%',
            height: '50%'
        }, 1000)
        .delay(1500)
        .animate({
            width: '100%',
            height: '100%'
        }, 1000);
}

function AnimationTest2() {
    console.log('删除表格首行');
    var tr = $('#test-table>tbody>tr:visible').first();
    //首行变红后,逐渐消失
    // tr.css('color', 'red');
    // tr.fadeOut(1000, function () {
    //     tr.remove();
    // });

    //以下两种语法等效
    //1.
    //tr.css('color', 'red');
    //tr.fadeOut(1000, () => { tr.remove() });

    //2.
    let timeout = 1000;
    let p = new Promise((resolve, reject) => {
        tr.css('color', 'red');
        tr.fadeOut(timeout);
        setTimeout(() => {
            resolve(tr);
        }, timeout);
    });
    p.then((e) => {
        e.remove();
    });
}

function refreshPrice() {
    let jqxhr = $.ajax(
        'http://api.money.126.net/data/feed/0000001,1399001',
        {
            method: 'GET',
            dataType: 'jsonp',
            jsonp: 'callback',
            jsonpCallback: 'callbackFunction',
            crossDomain: true,
        })
        .done((data) => {
            let str = data['0000001'].name + ': ' +
                data['0000001'].price + '；' +
                data['1399001'].name + ': ' +
                data['1399001'].price;
            $('#current_price').slideUp('slow').text(str).slideDown('slow');
        }).fail((xhr, status) => {
            alert('失败: ' + xhr.status + ', 原因: ' + status);
        });
}

function AJAXTest() {
    var aj = $.ajax({
        url: 'http://api.money.126.net/data/feed/0000001,1399001',
        method: 'GET',
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'callbackFunction',
        crossDomain: true,
        success: function (data) {
            let str = data['0000001'].name + ': ' +
                data['0000001'].price + '；' +
                data['1399001'].name + ': ' +
                data['1399001'].price;

            console.log(str);
        },
    }).done(
        function () {
            console.log('done');
        }
    ).always(//相当于finally,总会执行. ()=>是一种简化写法
        () => { console.log('always') }
    );
}

function MulitiAJAXTest() {
    $.when(
        $.ajax(
            {
                url: 'http://api.money.126.net/data/feed/0000001,1399001',
                method: 'GET',
                dataType: 'jsonp',
                jsonp: 'callback',
                crossDomain: true,
            }
        ),
        $.ajax(
            {
                url: 'http://api.money.126.net/data/feed/1399001',
                method: 'GET',
                dataType: 'jsonp',
                jsonp: 'callback',
                crossDomain: true,
            }
        ),
    ).then(
        function (result1, result2) {
            console.log("results:");
            var str1 = result1[2].responseJSON;
            var str2 = result2[2].responseJSON;
            console.log(str1);
            console.log(str2);
        }
    );
}


/**
 * 以下是完整的JQuery的jqXHR对象
 */
var jqXHR = {
    abort: function (statusText) {
        // 取消请求，关闭连接                
    },
    always: function () {
        // 设置请求完成(无论成功或失败)时需要执行的一个或多个回调函数
    },
    complete: function () {
        // always()函数的别名，设置请求完成(无论成功或失败)时需要执行的一个或多个回调函数
    },
    done: function () {
        // 设置请求成功时需要执行的一个或多个回调函数
    },
    error: function () {
        // fail()函数的别名，设置请求失败时需要执行的一个或多个回调函数
    },
    fail: function () {
        // 设置请求失败时需要执行的一个或多个回调函数                
    },
    getAllResponseHeaders: function () {
        // 获取响应头信息的原始字符串        
    },
    getResponseHeader: function (key) {
        // 获取响应头中指定名称的值     
    },
    overrideMimeType: function (type) {
        // 重写 Content-Type 响应头       
    },
    pipe: function () {
        // then() 函数的别名，分别设置请求成功、失败、正在进行时需要执行的回调函数           
    },
    progress: function () {
        // 设置 Deferred 对象生成进度通知时需要执行的回调函数
    },
    promise: function (obj) {
        // 为指定对象追加 Promise 对象的成员，以充当 Promise 对象 
    },
    readyState: 4, // 请求的状态
    responseText: "<!DOCTYPE html><html>......</html>", // 响应的文本内容
    setRequestHeader: function (name, value) {
        // 设置请求头
    },
    state: function () {
        // 确定一个 Deferred 对象的当前状态，例如："pending"、"resolved"、"rejected"               
    },
    status: 200,
    statusCode: function (map) {
        // 设置响应指定状态码需要执行的回调函数
        // map形如：{ 301:function(){}, 404:function(){} }     
    },
    statusText: "OK", // 状态响应头中的描述文本
    success: function () {
        // done()函数的别名，设置请求成功时需要执行的一个或多个回调函数
    }
};

/**
 * 编写jQuery插件
 * 给jQuery对象绑定一个新方法是通过扩展$.fn对象实现的
 */
$.fn.HighLight = function () {
    // this已绑定为当前jQuery对象:
    this.css('backgroundColor', '#fffceb').css('color', '#d85030');
    /**
     * jQuery对象支持链式操作，我们自己写的扩展方法也要能继续链式下去：
     * 函数内部的this在调用时被绑定为jQuery对象，所以函数内部代码可以正常调用所有jQuery对象的方法。
     */
    return this;
}

function PluginTest() {
    $('#plugin-test').HighLight();
}

/**
 * jQuery插件的最终版
 * 1.支持链式操作 return this
 * 2.包含默认值设置 $.fn.HighLightFinal.defaults
 * 3.包含自定义设置 options
 * @param {个性化参数} options 
 */
$.fn.HighLightFinal = function (options) {
    // 合并默认值和用户设定值:
    var opts = $.extend({}, $.fn.HighLightFinal.defaults, options);
    this
        .css('backgroundColor', opts.backgroundColor)
        .css('color', opts.color)
        .css('font-size', opts.fontsize);
    return this;
}

// 设定默认值:
$.fn.HighLightFinal.defaults = {
    color: '#FF0000',
    backgroundColor: '#00FF00'
}

function PluginFinaTest() {
    $('#plugin-test').HighLightFinal();
    $('#plugin-final-test').HighLightFinal(
        {
            backgroundColor: '#0000FF',
            fontsize: '25px',
        }
    );
}