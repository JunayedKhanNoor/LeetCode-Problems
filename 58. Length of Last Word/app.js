/**
 * @param {string} s
 * @return {number}
 */

 var lengthOfLastWord = function(s) {
	let c="";
	let p="";
	 for (let i = s.length-1; i>=0; i--){
		 if(p!=="" && c===""){
			 break;
		 }else if(s[i]!==" "){
			 c+=s[i];
		 } else{
			 p=c;
			 c="";
		 }
	 }
	 if(p!==""){
		 console.log(p.length);
	 }else{
		 console.log(c.length);
	 }

    
};
let s = "Hello world  ";
lengthOfLastWord(s);
