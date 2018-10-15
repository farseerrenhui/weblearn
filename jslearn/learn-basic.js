function AlartTest() {
	alert("Alert".toUpperCase());
}

function ChineseTest() {
	var abc = '\u4e2d\u6587';
	console.log(abc);
}

function ArrayTest() {
	var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
	// 从索引2开始删除3个元素,然后再添加两个元素:
	arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
	console.log(arr); // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
	// 只删除,不添加:
	arr.splice(2, 2); // ['Google', 'Facebook']
	console.log(arr); // ['Microsoft', 'Apple', 'Oracle']
	// 只添加,不删除:
	arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
	console.log(arr); // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
	var arr = ['A', 'B', 'C', 1, 2, 3];
	console.log(arr.join(','));
}

function ClassTest() {
	var xiaoming = {
		name: '小明',
		birth: 1990,
		school: 'No.1 Middle School',
		height: 1.70,
		weight: 65,
		score: null
	};
}

function ForEachTest() {
	console.log("foreach 语法 1:");
	var a = ['A', 'B', 'C'];
	for (var x of a) {
		console.log(x);
	}
	console.log("foreach 语法 2:");
	var arr = ['A', 'B', 'C'];
	arr.forEach(
		function (element, index, array) {
			console.log("元素:" + element + ",当前序号:" + index + ",共有元素:" + array.length);
		}
	);
	console.log("foreach 语法 3:");
	arr.forEach((element, index, array) => {
		console.log("元素:" + element + ",当前序号:" + index + ",共有元素:" + array.length);
	});
}

function abs(x) {
	if (x >= 0) {
		return x;
	} else {
		return -x;
	}
}
function abs2() {
	//利用arguments对象,即使不定义参数也可以获取到传入的参数
	if (arguments[0] >= 0) {
		return arguments[0];
	} else {
		return -arguments[0];
	}
}
function abs3(x) {
	//arguments对象指向传入的参数
	if (arguments.length != 1)
		throw 'arguments count error!';
	if (x >= 0) {
		return x;
	} else {
		return -x;
	}
}
function ArgumentsTest() {
	//多传几个参数不耽误事儿
	console.log(abs(-99, 12, 12, 12, 12, 121, 2));
	//少传参数也不报错
	console.log(abs());

	console.log(abs2(-999));

	//可以对函数参数进行判断
	console.log(abs3(123));
	console.log(abs3());
}

//可变参数的定义域发
function fun(x, ...rest) {
	console.log(x);
	console.log(rest);
}
function RestTest() {
	fun("ABC", 1, 2, 3, 4, 5);
}

function LetTest() {
	var sum = 0;
	for (let index = 0; index < 10; index++) {
		sum += index;
	}
	console.log(sum);
	//index是块级作用域的变量,访问不到
	console.log(index);
}

function ConstTest() {
	const pi = 3.14;
	pi = 100;
	console.log(pi);
}

function DeconstructionTest() {
	//从ES6开始，JavaScript引入了解构赋值，可以同时对一组变量进行赋值。
	var [x, y, z] = [100, 'ABC', [10, 20, 30]];
	console.log(x);
	console.log(y);
	console.log(z);
	let [a, [b, c]] = ['hello', ['JavaScript', 'ES6']];
	console.log(a);
	console.log(b);
	console.log(c);
	//按照对象属性赋值
	var person = {
		name: '小明',
		age: 20,
		gender: 'male',
		passport: 'XiaoMing\'s PASSPORT',
		school: 'No.4 middle school',
		address: {
			city: 'Beijing',
			street: 'No.1 Road',
			zipcode: '100001'
		}
	};
	var { name, age, passport, address: { city, zipcode } } = person;
	console.log(name);
	console.log(age);
	console.log(passport);
	console.log(city);
	console.log(zipcode);
	//address不是变量，而是为了让city和zip获得嵌套的address对象的属性
	console.log(address);
}

function getAge() {
	var y = new Date().getFullYear();
	//js里的this指向谁视情况而定
	return y - this.birth;
}
function ApplyTest() {
	var xiaoming = {
		name: '小明',
		birth: 1990,
		age: getAge
	};
	console.log(xiaoming.age());
	console.log(getAge());//getAge()方法的this指向window
	//apply()把参数打包成Array再传入
	console.log(getAge.apply(xiaoming, [])); //getAge()方法的this指向xiaoming, 参数为空
	//call()把参数按顺序传入
	console.log(getAge.call(xiaoming));
}

function DynamicTest() {
	/**
	 * 统计一下代码一共调用了多少次parseInt()
	 */
	var count = 0;
	var oldParseInt = parseInt; // 保存原函数
	window.parseInt = function () {
		count += 1;
		return oldParseInt.apply(null, arguments); // 调用原函数
	};

	parseInt('10');
	parseInt('20');
	parseInt('30');
	console.log('parseInt()的调用次数:' + count);
}

function MapTest() {
	function pow(x) {
		return x * x;
	}
	var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	var results = arr.map(pow);
	console.log(results);

	var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	console.log(arr.map(String));
}

function ReduceTest() {
	/**
	 * [x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
	 */
	//利用reduce求和
	var arr = [1, 3, 5, 7, 9];
	var result = arr.reduce(function (x, y) {
		return x + y;
	});
	console.log(result);
	//将数字按位连接成一个数值
	var arr = [1, 3, 5, 7, 9];
	result = arr.reduce(function (x, y) {
		return x * 10 + y;
	});
	console.log(result);
}

function MapReduceTest() {
	/**
	 * 利用map/reduce实现string2int()函数
	 */
	function string2int(s) {
		return s.split("")
			.map(
				function (x) { return x - '0' }
			)
			.reduce(
				function (x, y) { return x * 10 + y }
			)
	}
	console.log(string2int("99999") / 3);

	/**
	 * 把字符串变成整数
	 */
	var arr = ['1', '2', '3'];
	console.log(arr.map(x => parseInt(x, 0)));

	/**
	 * 换为英文名的首字母大写格式
	 */
	function toName(name) {
		return name[0].toUpperCase() + name.substring(1).toLowerCase();
	}
	var names = ['adam', 'LISA', 'barT'];
	console.log(names.map(toName));
}

function FilterTest() {
	/**
	 * filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素
	 */

	/**
	 * filter接收的回调函数内置岑数element,index,self
	 */
	var arr = ['A', 'B', 'C'];
	var r = arr.filter(function (element, index, self) {
		console.log(index + " - " + element + " - " + self);
	});

	/**
	 * 利用filter给数组去重
	 */
	var r, arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
	r = arr.filter(function (element, index, self) {
		//当元素的位置与第一次找到该元素的位置相同时,说明该元素是第一次出现,此时验证过过
		return self.indexOf(element) === index;
	});

	console.log(r.toString());
}

function SortTest() {
	/**
	 * sort()默认按照ASCII排序
	 */
	console.log(["Google", "Apple", "Microsoft"].sort());
	console.log([10, 20, 30, 1, 2, 3, 100, 200, 300].sort());

	/**
	 * sort()方法也是一个高阶函数，它还可以接收一个比较函数来实现自定义的排序
	 */
	var arr = [10, 20, 30, 1, 2, 3, 100, 200, 300];
	arr.sort(function (x, y) {
		if (x < y)
			return -1;
		else if (x > y)
			return 1;
		else
			return 0;
	});
	console.log(arr);

	/**
	 * sort()方法会直接对Array进行修改，它返回的结果仍是当前Array
	 */
	var a1 = ['B', 'A', 'C'];
	var a2 = a1.sort();
	a1; // ['A', 'B', 'C']
	a2; // ['A', 'B', 'C']
	console.log(a1 === a2); // true, a1和a2是同一对象
}

function ClosureTest() {
	/**
	 * 高阶函数除了可以接受函数作为参数外，还可以把函数作为结果值返回。
	 */

	/**
	 * 可以不返回求和的结果，而是返回求和的函数！
	 */
	function lazy_sum(arr) {
		var sum = function () {
			return arr.reduce(function (x, y) {
				return x + y;
			});
		}
		return sum;
	}
	var f = lazy_sum([1, 2, 3, 4, 5]);
	console.log(f);//f是一个函数
	console.log(f());//f()执行了函数

	/**
	 * 要计算x的y次幂可以用Math.pow(x, y)函数，不过考虑到经常计算x平方或x立方，我们可以利用闭包创建新的函数pow2和pow3
	 */
	function make_pow(n) {
		return function (x) {
			return Math.pow(x, n);
		}
	}
	var pow2 = make_pow(2);
	var pow3 = make_pow(3);

	console.log(pow2(5));
	console.log(pow3(7));
}

function ArrowTest() {
	var fn = x => x * x;
	console.log(fn(3));
}

function* fib(max) {
	/**
	 * generator和函数不同的是，generator由function*定义（注意多出的*号），并且，除了return语句，还可以用yield返回多次。
	 */
	var
		t,
		a = 0,
		b = 1,
		n = 0;
	while (n < max) {
		yield a;
		[a, b] = [b, a + b];
		n++;
	}
	return;
}
function GeneratorTest() {
	var f = fib(5);
	console.log(f.next()); // {value: 0, done: false}
	console.log(f.next()); // {value: 1, done: false}
	console.log(f.next()); // {value: 1, done: false}
	console.log(f.next()); // {value: 2, done: false}
	console.log(f.next()); // {value: 3, done: false}
	console.log(f.next()); // {value: undefined, done: true}

	for (var x of fib(10)) {
		console.log(x); // 依次输出0, 1, 1, 2, 3, ...
	}
}

function StandardObjectTest() {
	console.log(typeof 123);// 'number'
	console.log(typeof NaN); // 'number'
	console.log(typeof 'str'); // 'string'
	console.log(typeof true); // 'boolean'
	console.log(typeof undefined); // 'undefined'
	console.log(typeof Math.abs); // 'function'
	console.log(typeof null); // 'object'
	console.log(typeof []); // 'object'
	console.log(typeof {}); // 'object'
	/**
	 *  不要使用new Number()、new Boolean()、new String()创建包装对象；
		用parseInt()或parseFloat()来转换任意类型到number；
		用String()来转换任意类型到string，或者直接调用某个对象的toString()方法；
		通常不必把任意类型转换为boolean再判断，因为可以直接写if (myVar) {...}；
		typeof操作符可以判断出number、boolean、string、function和undefined；
		判断Array要使用Array.isArray(arr)；
		判断null请使用myVar === null；
		判断某个全局变量是否存在用typeof window.myVar === 'undefined'；
		函数内部判断某个变量是否存在用typeof myVar === 'undefined'。
	 */
}

function DateTest() {
	/**
	 * JavaScript的月份范围用整数表示是0~11，0表示一月，1表示二月…
	 */

	var d = new Date(2015, 6, 9, 8, 20, 0, 0);
	console.log(d);// Sun Jul 09 2015 08:20:00 GMT+0800 (CST)

	var stamp = Date.parse("Sun Jul 09 2015 08:20:00 GMT+0800 (中国标准时间)");
	console.log(stamp);
	var date = new Date(stamp);
	console.log(date);
	console.log(date.toLocaleString());
	console.log(date.toLocaleDateString());
	console.log(date.toUTCString());
}

function RegExpTest() {
	/**
	 * 验证邮箱
	 */
	var re = /^(\w.[^%]+)\@\w+.(com|org)$/;

	// 测试:
	var
		success = true,
		should_pass = ['someone@gmail.com', 'bill.gates@microsoft.com', 'tom@voyager.org', 'bob2015@163.com'],
		should_fail = ['test#gmail.com', 'bill@microsoft', 'bill%gates@ms.com', '@voyager.org'];
	for (var i = 0; i < should_pass.length; i++) {
		if (!re.test(should_pass[i])) {
			console.log('测试失败: ' + should_pass[i]);
			success = false;
			break;
		}
	}
	for (var i = 0; i < should_fail.length; i++) {
		if (re.test(should_fail[i])) {
			console.log('测试失败: ' + should_fail[i]);
			success = false;
			break;
		}
	}
	if (success) {
		console.log('测试通过!');
	}
}

function JSONTest() {
	/**
	 * 序列化
	 */
	var xiaoming = {
		name: '小明',
		age: 14,
		gender: true,
		height: 1.65,
		grade: null,
		'middle-school': '\"W3C\" Middle School',
		skills: ['JavaScript', 'Java', 'Python', 'Lisp']
	};
	console.log("--------------序列化--------------");
	console.log("直接输出");
	var s = JSON.stringify(xiaoming);
	console.log(s);
	s = JSON.stringify(xiaoming, null, '  ');
	console.log(s);
	s = JSON.stringify(xiaoming, ["name", "skills"], '--');
	console.log(s);

	/**
	 * 反序列化
	 */
	console.log("--------------反序列化--------------");
	console.log(JSON.parse('{"name":"小明","age":14}'));
	//第二个参数接收一个函数,用来转换解析出的属性
	var obj = JSON.parse(
		'{"name":"小明","age":14}',
		function (key, value) {
			if (key === "name") {
				return value + "同学";
			}
			return value;
		});
	console.log(JSON.stringify(obj));

	/**
	 * 从远程地址获取JSON--获取雅虎天气
	 */
	console.log("--------------远程获取--------------");
	var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20%3D%202151330&format=json';
	// 从远程地址获取JSON:
	var fullJson;
	$.getJSON(url, function (data) {
		// 获取结果:
		var city = data.query.results.channel.location.city;
		console.log(data);
		var forecast = data.query.results.channel.item.forecast;
		var result = {
			city: city,
			forecast: forecast
		};

		console.log(JSON.stringify(result, null, '  '));
	});
}

function ObjectCreateTest() {
	/**
	 * JavaScript不区分类和实例的概念，而是通过原型（prototype）来实现面向对象编程。
	 */
	// 原型对象:
	var Student = {
		name: 'Robot',
		height: 1.2,
		run: function () {
			console.log(this.name + ' is running...');
		}
	};

	function createStudent(name) {
		// 基于Student原型创建一个新对象:
		var s = Object.create(Student);
		// 初始化新对象:
		s.name = name;
		return s;
	}

	var xiaoming = createStudent('小明');
	xiaoming.run(); // 小明 is running...
	console.log(xiaoming.__proto__ === Student);
	; // true
}