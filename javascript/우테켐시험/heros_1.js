function solution(arr) {
    let answer = 1;
    let count = 0;

    while (arr.length > 0) {
        [arr, count] = dupleCount(arr, count);
    }

    answer = count;
    console.log(answer);
    return answer;
}

function dupleCount(arr, count) {
    let newArr = [];
    let dC = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) dC++;
        else if (arr[i] !== arr[i - 1]) {
            newArr.push(dC);
            dC = 1;
        }
        if (i == arr.length - 1)
            newArr.push(dC);
    }
    count++;
    return [newArr, count];
}


const input = [[1, 1, 3, 3, 2, 2, 4, 5, 1, 1, 1, 3, 3, 3], [1, 2, 3], [2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 2, 1, 2], [2]];
input.forEach(i => solution(i));