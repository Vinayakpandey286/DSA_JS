function frequency(str) {
    const hmap = {}

    for (let i = 0; i < str.length; i++) {
        if (hmap.hasOwnProperty(str[i])) {
            hmap[str[i]] = hmap[str[i]] + 1
        } else {
            hmap[str[i]] = 1
        }
    }

}

console.log(frequency("ggggoolaaanng"))

