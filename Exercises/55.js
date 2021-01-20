// Write a JavaScript program to check whether a given string contains equal number of p's and t's. 

function checkBoth(str) {
    const p = str.match(/[p]/gi);
    const t = str.match(/[t]/gi);
    if (p === null || t === null){
        return `This doesn't contain equal number of 'p's and 't's.`;
    } else if (p.length == t.length) {
        return `This contain equal number of 'p's and 't's`;
    } return `This doesn't contain equal number of 'p's and 't's.`;

    console.log(p)
    console.log(t)
}

console.log(checkBoth("Pineapple Mint Pie"))

// 아래는 솔루션

function checkSolution(str) {
    const p = str.replace(/[^p]/gi, ""); // 단순 match()에서 한 발 더 나아가서, replace 메소드를 써, 찾고자 하는 패턴 문자를 제외하고 나머지를 빈 값으로 만듦. 
    const t = str.replace(/[^t]/gi, "");

    const num_p = p.length;
    const num_t = t.length;

    return num_p === num_t;
}

console.log(checkSolution("Pipatt Teta"))