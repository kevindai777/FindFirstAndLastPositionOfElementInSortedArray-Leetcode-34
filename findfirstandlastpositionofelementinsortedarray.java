//Java Solution

class Solution {
    public int[] searchRange(int[] nums, int target) {
        if (nums.length == 0) {
            return new int[] {-1, -1};
        }
        
        int first, second;
        int low = 0;
        int high = nums.length - 1;
        
        while (low < high) {
            int mid = (low + high) / 2;
            
            if (nums[mid] >= target) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        
        if (nums[low] != target) {
            return new int[] {-1, -1};
        } else {
            first = low;
        }
        
        high = nums.length - 1;
        
        while (low < high) {
            int mid = (low + high) / 2;
            
            if (nums[mid] <= target) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        
        if (nums[low] == target) {
            second = low;
        } else {
            second = low - 1;
        }
        
        return new int[] {first, second};
    }
}