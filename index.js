"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seq = exports.next = void 0;
function next(current, ranges) {
    let cu = current.length - 1;
    for (; cu >= 0; cu--) {
        if (++current[cu] >= ranges[cu]) {
            current[cu] = 0;
        }
        else {
            break;
        }
    }
    return cu;
}
exports.next = next;
function seq(initial, ranges) {
    if (!ranges.length || ranges.some(x => x === 0)) {
        return [];
    }
    const res = [];
    for (let current = initial.concat(), cu = 0; cu !== -1; cu = next(current, ranges)) {
        res.push(current.concat());
    }
    return res;
}
exports.seq = seq;
