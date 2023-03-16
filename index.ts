
/**
 * put next index into 'current' and returns 'carry-up' position.
 * 
 * the next index are unspecified if;
 * - 'ranges.length' were smaller than 'current.length' or smaller than 0, 
 * - 'ranges' had 0
 * 
 * the 'current' should not be 'const'/'readonly' and mutable.
 * 
 * returned value of 'carry-up' represents position on 'current' nexts index.
 * 
 * if all ranges has gone, 'carry-up' is -1.
 */
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

/**
 * enumerates all indexes starts from 'initial' to 'ranges'.
 * 
 * all indexes is unspecified if 'initial' was on out of 'ranges'.
 * 
 * @see next
 */
export function seq(initial: number[], ranges: number[]) {
    if (!ranges.length || ranges.some(x => x === 0)) {
        return [];
    }
    const res = [];
    for (let current = initial.concat(), cu = 0; cu !== -1; cu = next(current, ranges)) {
        res.push(current.concat());
    }
    return res;
}
