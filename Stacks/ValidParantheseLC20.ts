function isValid(s: string): boolean {
    let temp = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            temp.push(s[i])
        } else {
            if (temp.length === 0) return false
            if (s[i] === ')' && temp[temp.length - 1] !== '(') return false
            if (s[i] === ']' && temp[temp.length - 1] !== '[') return false
            if (s[i] === '}' && temp[temp.length - 1] !== '{') return false
            temp.pop()
        }
    }
    return temp.length === 0
};