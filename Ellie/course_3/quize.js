

// break, continue
// Q1 iterate from 0 to 10 and print only even numbers (use continue)

let i = 0
while (i < 10) {
    i++;

    if (i % 2 !== 0 ) {
        continue;
    }
    console.log(`only even i: ${i}`);
}

// ellie's solution
// 내 코드의 문제점은 0을 포함하지 못했다는 것. 
// 그리고 이게 연습이어서 그렇지 실제 코드에서는 i % 2 === 0 처럼 내가 원하는 조건을 바로 직접적으로 넣어주는 게 더 나음. 

for (let i = 0; i < 11; i++) {
    if(i % 2 !== 0) {
        continue;
    }
    console.log(`q1. ${i}`)
}

// Q2 iterate from 0 to 10 and print number until reaching 8 (use break)

let j = 0;
while (j < 10) {
    j++;
    if(j !== 8) {
        console.log(`J: ${j}`)
    } else {
        break
    }
    
}

// Elli's solution
for (let i = 0; i < 11; i++) {
    if(i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}

// 현업에서는 label을 잘 사용하지는 않는다고 함. 
// label을 피해서 코드를 깔끔하게 작성하는 게 낫다고 하네. 