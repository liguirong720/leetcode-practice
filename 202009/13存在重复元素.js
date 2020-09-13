/**
 * 217. 存在重复元素
* 给定一个整数数组，判断是否存在重复元素。
* 如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false
*/
var containsDuplicate = function(nums) {
   let mapping = {}
   for (let i = 0; i < nums.length; i++) {
       if (mapping[nums[i]]) {
           return true
       } else {
           mapping[nums[i]] = true
       }
   }
   return false
};

var containsDuplicate2 = function(nums) {
    let set = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true
        } else {
            set.add(nums[i])
        }
    }
    return false
 };
