class Solution {
    //Function to find the next greater element for each element of the array.
    nextLargerElement(arr, n) {
        let output = Array(n).fill(-1)
        let st = []
        st.push(0)
        for (let i = 1; i < n; i++) {
            while (st.length > 0 && arr[i] > arr[st[st.length - 1]]) {
                output[st[st.length - 1]] = arr[i]
                st.pop()
            }
            st.push(i)

        }
        return output
        // code here
    }
}