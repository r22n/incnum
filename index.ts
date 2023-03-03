export function next(current: number[], ranges: number[]) {
    let cu = current.length - 1;
    for (; cu >= 0; cu--) {
        if (++current[cu] >= ranges[cu]) {
            current[cu] = 0;
        } else {
            break;
        }
    }
    return cu;
}

export function seq(initial: number[], ranges: number[]) {
    if (ranges.some(x => x === 0)) {
        return [];
    }
    const res = [];
    for (let current = initial.concat(), cu = 0; cu !== -1; cu = next(current, ranges)) {
        res.push(current.concat());
    }
    return res;
}
