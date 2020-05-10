function solution(weights) {
    let answer = 0;
    weights.sort
    let arr = [];
    weights.forEach(e => {
        const entity = {
            weight: e,
            number: 1
        }
        arr.push(entity);
    });
    console.log(arr);
    build(arr);

    return answer;
}

function build(arr) {

    let i = 0;
    let newArr = [];
    while (i < arr.length - 1) {
        if (arr[i].weight === arr[i + 1].weight) {
            const newE = {
                weight: arr[i].weight + arr[i + 1].weight,
                number: arr[i].number + arr[i + 1].number
            }
            newArr.push(newE);
            i += 2;
        } else {
            newArr.push(arr[i]);
            i++;
        }
    }
    console.log(newArr);
    return newArr;
}

function sortArr(arr) {

}
const weights = [2, 2, 2, 2, 3, 3, 5, 6];
solution(weights);