//Objective is to find the first and last position of an element in a sorted array.

let nums = [5,7,7,8,8,10]
let target = 8


//O(logn) solution that uses binary search twice to find the two indices.
//https://rosettacode.org/wiki/Binary_search

let low = 0
let high = nums.length - 1
let start, end

//This binary search finds the leftmost place where the element can be inserted/found
while (low < high) {
    let mid = Math.floor((low + high) / 2)
    
    if (nums[mid] >= target) {
        high = mid
    } else {
        low = mid + 1
    }
}

if (nums[low] !== target) {
    return [-1,-1]
}

start = low 
high = nums.length - 1

//This binary search finds the rightmost place where the element can be inserted/found
while (low < high) {
    let mid = Math.floor((low + high) / 2)

    if (nums[mid] <= target) {
        low = mid + 1
    } else {
        high = mid
    }
}

if (nums[low] == target) {
    end = low 
} else {
    end = low - 1
}

return [start, end]
