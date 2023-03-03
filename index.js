"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seq = exports.next = void 0;
function next(current, ranges) {
    if (ranges.some(x => typeof x === 'number' ? x === 0 : x.end - x.begin === 0)) {
        return -1;
    }
    let cu = current.length - 1;
    for (; cu >= 0; cu--) {
        const range = ranges[cu];
        let begin = 0, end = 0;
        if (typeof range === 'number') {
            end = range;
        }
        else {
            begin = range.begin;
            end = range.end;
        }
        if (++current[cu] >= end) {
            current[cu] = begin;
        }
        else {
            break;
        }
    }
    return cu;
}
exports.next = next;
function seq(initial, ranges) {
    let prev = initial.concat();
    let cur = initial.concat();
    const res = [];
    while (next(cur, ranges) !== -1) {
        res.push(prev);
        prev = cur.concat();
    }
    return res;
}
exports.seq = seq;
