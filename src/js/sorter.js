export default function orderByProps(obj, arr) {
    const sortedArr = []
    arr.forEach((item) => {
    sortedArr.push({ key: item, value: obj[item] });
    delete obj[item];
    });

    const sortedByAlphabet = [];
    for (const key in obj) {
    sortedByAlphabet.push({ key, value: obj[key] });
    }

    
    sortedByAlphabet.sort((a, b) =>{
        if (a.key < b.key) {
             return -1
         };
    });

    sortedByAlphabet.forEach((item) => {
        sortedArr.push(item)
    })
    
    return sortedArr;
    
}

