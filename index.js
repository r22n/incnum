"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seq = exports.next = void 0;
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
/**
 * enumerates all indexes starts from 'initial' to 'ranges'.
 *
 * all indexes is unspecified if 'initial' was on out of 'ranges'.
 *
 * @see next
 */
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
