let arr = [1, 21, 5, 8, 38, 18, 9];

function pupple(arr) {
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        for (let j = 0; j < n - i + 1; j++) {
            if(arr[j] > arr[j+1]) {
                let t = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = t;
                
            }
        }
    }
    return arr;
}

console.log(pupple(arr));