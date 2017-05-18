export default {
	trim(str) {
		if(str === null){
			str = "null"
		}
		str = str.toString();
		str = str.replace(/^\s+|\s+$/g, '');
		return str;
	}
}