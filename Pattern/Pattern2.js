//       i (row) j (column) 
// 1       1      1 to 1 
// 12      2      1 to 2 
// 123     3      1 to 3 
// 1234    4      1 to 4 
// 12345   4      1 to 5

for (let i = 1; i <= 5; i++) {
    let num = '';
    for (let j = 1; j <= i; j++) {
        num += j;
    }
    console.log(num)
}

function pattern(n) {
    for (let i = 1; i <= n; i++) {
        let num = '';
        for (let j = 1; j <= i; j++) {
            num += j;
        }
        console.log(num);
    }
}
pattern(5);

//       i (row) j (column) 
// 1       1      1 to 1 
// 22      2      1 to 2 
// 333     3      1 to 3 
// 4444    4      1 to 4 
// 55555   5      1 to 5

for (let i = 1; i <= 5; i++) {
    let num = '';
    for (let j = 1; j <= i; j++) {
        num += i;
    }
    console.log(num)
}

function pattern(n) {
    for (let i = 1; i <= n; i++) {
        let num = '';
        for (let j = 1; j <= i; j++) {
            num += i;
        }
        console.log(num);
    }
}
pattern(5);
