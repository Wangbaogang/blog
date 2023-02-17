# 完美立方

/**
 * 形如a^3=b^3+c^3+d^3的等式被称为完美立方等式，对任给的正整数N（N<=100），寻找所有的四元组（a,b,c,d），使得a^3=b^3+c^3+d^3，其中a,b,c,d大于1，小于等于N，且b<=c<=d；
 * 输入：一个正整数N
 * 输出：每行输出一个完美立方，格式为：
 * 注意输出时按照a值从小到大输出，当a相等按照b从小到大输出，以此类推
 */


```javascript
function fn(n) {
    for(let i = 2; i <= n; i++) {
        for(let a = 2; a < i; a++) {
            for(let b = a; b < i; b++) {
                for(let c = b; c < i; c++) {
                    if(i*i*i === a*a*a + b*b*b + c*c*c) {
                        console.log('Perfect cube:', i, a, b, c)
                    }
                }
            }
        }
    }   
}

// Perfect cube: 6 3 4 5
// Perfect cube: 12 6 8 10
// Perfect cube: 18 2 12 16
// Perfect cube: 18 9 12 15
// Perfect cube: 19 3 10 18
// Perfect cube: 20 7 14 17
// Perfect cube: 24 12 16 20

// 解题思路：枚举，枚举要讲究方式方法，尽量缩小范围
```