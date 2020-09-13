/**
 * 56、合并区间
 * 给出一个区间的集合，请合并所有重叠的区间。
 * 
 * 示例：
 * 输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 */


var merge = function(intervals = []) {
    let result = []
    intervals.sort(function(a, b) {
        if (a[0] > b[0]) {
            return 1
        } else {
            return -1
        }
    })
    let index = -1
    for(let i = 0; i < intervals.length; i++) {
        // 第一项直接推入
        // 后面的项，如果第一个元素比result最后一项的第一个元素大，说明没有相同区间，直接推入
        if (i === 0 || intervals[i][0] > result[index][1]) {
            result.push(intervals[i])
            index++
        } else {
            // 区间合并
            result[index][1] = Math.max(result[index][1], intervals[i][1])
        }
    }
    return result
};

let intervals = [[1,3],[8,10],[2,6],[15,18]]
let intervals2 = [[1,4],[4,6]]
let intervals3 = [[1,4],[1, 5]]

console.log(merge(intervals))
console.log(merge(intervals2))
console.log(merge(intervals3))