const urlString = "http://127.0.0.1:5502/interview/node/url/index.html?query=php&a=1#sss"

function getQueryString(urlStr) {
    var obj = new Object();
    var reg = new RegExp("(^|&)" + urlStr + "=([^&]*)(&|$)", "i");
    console.log(reg)

}

console.log(getQueryString(urlString))

function getUrlParamsByName(name) {
    // \b 边界   
    // ?<= 向后匹配 
    // 字符串转成正则表达式，其中的'\b'类型的特殊字符要多加一个'\'
	let reg = new RegExp(`(?<=\\b${name}=)[^&]*`),
	str = location.search || '',
	target = str.match(reg);
	
	if(target) {
		return target[0]
	}

	return;
}
console.log(getUrlParamsByName)