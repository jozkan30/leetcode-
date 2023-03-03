/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// Great explanation: https://www.youtube.com/watch?v=HAA8mgxlov8&ab_channel=NeetCode

var isMatch = function(s, p) {
    // BRUTE FORCE METHOD - not time efficient 
    const check = (i,j) => {
        // Take care of the edge cases first
        if(i >= s.length && j >= p.length) {
            return true;
        }
        
        if(j >= p.length) {
            return false;
        }
        
        let match = i < s.length && (s[i] === p[j] || p[j] === '.');

        if((j+1) < p.length && p[j+1] === '*') {
            
            return check(i, j+2) ||        
            (match && check(i+1, j));      
        }
        
        if(match) {
            return check(i+1, j+1);
        }
        
        return false;
    }
    return check(0,0);
};