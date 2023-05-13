# incnum 
increment numbers in array. this can make multiple depth for-loop single.

after
```
for (const [a, b, c, d, e] of seq([0, 0, 0, 0, 0], [1, 2, 3, 4, 5])) {
    console.log(`${a} ${b} ${c} ${d} ${e}`);
}
```

before
```
for (let a = 0; a < 1; a++) {
    for (let b = 0; b < 2; b++) {
        for (let c = 0; c < 3; c++) {
            for (let d = 0; d < 4; d++) {
                for (let e = 0; e < 5; e++) {
                    console.log(`${a} ${b} ${c} ${d} ${e}`);
                }
            }
        }
    }
}
```
