# 生理周期

/**
问题描述
	人生来就有三个生理周期，分别为体力、感情和智力周期，它们的周期长度为23天,28天和33天。每一个周
	期中有一天是高峰。在高峰这天，人会在相应的方面表现出色。例如，智力周期的高峰，人会思维敏捷，精
	力容易高度集中。因为三个周期的周长不同，所以通常三个周期的高峰不会落在同一天。对于每个人，我们
	想知道何时三个高峰落在同一天对于每个周期，我们会给出从当前年份的第一天开始，到出现高峰的天数（
	不一定是第一次高峰出现的时间）。你的任务是给定一个从当年第一天开始数的天数，输出从给定时间开始
	（不包括给定时间）下一次三个高峰落在同一天的时间（距给定时间的天数）。例如：给定时间为 10，下次
	出现三个高峰同天的时间是 12，则输出 2（注意这里不是 3）。
输入数据
	输入四个整数：p, e, i 和 d。 p, e, i 分别表示体力、情感和智力高峰出现的时间（时间从当年的第一天
	开始计算）。d 是给定的时间，可能小于 p, e, 或 i。 所有给定时间是非负的并且小于 365, 所求的时间小
	于等于 21252。
输出要求
	从给定时间起，下一次三个高峰同天的时间（距离给定时间的天数）。
输入样例
	0 0 0 0
	0 0 0 100
	5 20 34 325
	4 5 6 7
	283 102 23 320
	203 301 203 40
	-1 -1 -1 -1
输出样例
	Case 1: the next triple peak occurs in 21252 days.
	Case 2: the next triple peak occurs in 21152 days.
	Case 3: the next triple peak occurs in 19575 days.
	Case 4: the next triple peak occurs in 16994 days.
	Case 5: the next triple peak occurs in 8910 days.
	Case 6: the next triple peak occurs in 10789 days.
 */


```javascript
function fn(p, e, i, d) {
    for(let x = d; x < 21252; x++) {
        if((x - p) % 23 === 0 && (x - e) % 28 === 0 && (x - i) % 33 === 0) {
            console.log(x);
            break
        }
    }
}

function fn(p, e, i, d) {
    let x = d + 23;
    let t = 0;
    for(; (x - e) % 28; x += 23) {
        t++;
    }
    for(; (x - i) % 33; x += 23 * 28) {
        t++;
    }

    console.log(x);
    console.log('循环次数%s', t);
}
```
