
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const wordMap = new Map();
    wordMap.set("I", 1);
    wordMap.set("V", 5);
    wordMap.set("X", 10);
    wordMap.set("L", 50);
    wordMap.set("C", 100);
    wordMap.set("D", 500);
    wordMap.set("M", 1000);

    const arr = [];
    var num = 0;
    for (let i = 0; i < s.length; i++) {
        arr.push(wordMap.get(s.charAt(i)));
    }
    console.log(arr);
    for (let j = arr.length - 1; j >= 0; j--) {
        if (arr[j] > arr[j - 1]) {
            num += arr[j] - arr[j - 1];
            j--;
        } else {
            num += arr[j];
        }
    }

    console.log(num);
};
romanToInt("XIII");
