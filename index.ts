
export type BeginEnd = {
    begin: number;
    end: number;
};
export type End = number;
export type Range = BeginEnd | End;

export function next(current: number[], ranges: Range[]) {
    if (ranges.some(x => typeof x === 'number' ? x === 0 : x.end - x.begin === 0)) {
        return -1;
    }

    let cu = current.length - 1;
    for (; cu >= 0; cu--) {
        const range = ranges[cu];
        let begin = 0, end = 0;
        if (typeof range === 'number') {
            end = range;
        } else {
            begin = range.begin;
            end = range.end;
        }

        if (++current[cu] >= end) {
            current[cu] = begin;
        } else {
            break;
        }
    }
    return cu;
}

export function seq(initial: number[], ranges: Range[]) {
    let prev = initial.concat();
    let cur = initial.concat();
    const res = [];
    while (next(cur, ranges) !== -1) {
        res.push(prev);
        prev = cur.concat();
    }
    return res;
}
