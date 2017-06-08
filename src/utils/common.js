function getType(obj){
	return Object.prototype.toString.call(obj);
}

function isArray(obj){
	return getType(obj) === "[object Array]";
}

function isObject(obj){
	return getType(obj) === "[object Object]";
}

function isString(obj){
	return getType(obj) === "[object String]";
}

function isNumber(obj){
	return getType(obj) === "[object Number]";
}

function isDate(obj){
	return getType(obj) === "[object Date]";
}

function isReExp(obj){
	return getType(obj) === "[object RegExp]";
}

function isFunction(obj){
	return getType(obj) === "[object Function]";
}

function isBoolean(obj){
	return getType(obj) === "[object Boolean]";
}

function isUndefined(obj){
	return getType(obj) === "[object Undefined]";
}

function deepCopy(obj){
	var result = null;

	if(isArray(obj)){
		
		result = [];
	
	}else if(isObject(obj)){

		result = {};
	
	}else if(isDate(obj)){
		
		result = new Date(obj.toJSON());

	}else if(isReExp(obj)){

		result = new RegExp(obj.valueOf());

	}else{

		result = obj;

	}

	for(var key in obj){

		if(obj.hasOwnProperty(key)){
			
			var child = obj[key];
			
			if(isObject(child) || 
			isArray(child))
			{ 
				result[key] = deepCopy(child)
			}

			if(isFunction(child)   || 
				isDate(child)       ||
				isString(child)     ||
				isNumber(child)     ||
				isBoolean(child)    ||
				isReExp(child) )
			{

				result[key] = child;
			}

		}
	}

	return result;
}

function extend(dest, src){

	if( getType(dest) !== getType(src) ){

		return deepCopy(dest);

	}

	if( isFunction(dest) || 
		isDate(dest)     ||  
		isBoolean(dest)  ||
		isNumber(dest)   ||
		isString(dest)   ||
		isReExp(dest)    ||
		isUndefined(dest)
		){

		return deepCopy(dest);

	}

	var result = deepCopy(dest);

	for(var key in src){
		if(src.hasOwnProperty(key)){
			var child = src[key];

			if(isObject(child) || 
				isArray(child))
			{ 
				result[key] = extend(result[key] || {}, child);
			}else{

				result[key] = src[key];

			}
		}

	}

	return result;

}

function strArrayIndexOf(arr, item) {
	var index = -1;
	for(var i=0; i<arr.length; i++) {
		if(item === arr[i]) {
			index = i;
			break;
		}
	}
	return index;
}
/*
	去除src字符串数组中, omit包含的元素,
*/
function strArrayOmit(src, omit) {
	var arr = deepCopy(src);
	for(var i=0;i<omit.length; i++) {
		for(var j=0; j<arr.length; j++) {
			if(arr[j] == omit[i]) {
				arr.splice(j, 1);
				--j;
			}
		}
	}
}

export default {
	trim(str) {
		if(str === null){
			str = "null"
		}
		str = str.toString();
		str = str.replace(/^\s+|\s+$/g, '');
		return str;
	},

	/*
		比较字面量对象是否包含同样的信息，值一定是字符串
	*/
	isObjectEquals(a, b) {
		let flag = true;
		for(let i in a) {
			if(b[i] !== a[i]){
				flag == false;
				break;
			}
		}	

		return flag;
	},
	deepCopy,
	extend,
	strArrayIndexOf,
	strArrayOmit
}