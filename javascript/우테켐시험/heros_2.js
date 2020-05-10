function solution(arr) {
    let answer = 0;
    let digitArrays = toDigit(arr);
    answer = Array.from(new Set(digitArrays)).length
    return answer;
}

function toDigit(arr) {
    let digitArrays = [];
    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];
        let digitArray = [];
        while (number > 0) {
            digitArray.push(number % 10);
            number = parseInt(number / 10);
        }
        let string = ""
        digitArray.sort();
        digitArray.forEach(d => string += d)
        digitArrays.push(string);
    }
    return digitArrays;
}

const input = [[112, 1814, 121, 1481, 1184], [123, 456, 789, 321, 654, 987], [1, 2, 3, 1, 2, 3, 4], [123, 234, 213, 432, 234, 1234, 2341, 12345, 324]];

input.forEach(i => console.log(solution(i)));