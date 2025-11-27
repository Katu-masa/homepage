
function tosin(angle) {
    let ans = [];
    if (angle == 0) {
        ans = [0, 1, 1, 1];
    } else if (angle == 30) {
        ans = [1, 1, 2, 1];
    } else if (angle == 45) {
        ans = [1, 1, 1, 2];
    } else if (angle == 60) {
        ans = [1, 3, 2, 1];
    } else if (angle == 90) {
        ans = [1, 1, 1, 1];
    } else if (angle == 120) {
        ans = [1, 3, 2, 1];
    } else if (angle == 135) {
        ans = [1, 1, 1, 2];
    } else if (angle == 150) {
        ans = [1, 1, 2, 1];
    } else if (angle == 180) {
        ans = [0, 1, 1, 1];
    }
    return ans;
}
function tocos(angle) {
    let ans = [];
    if (angle == 0) {
        ans = [1, 1, 1, 1];
    } else if (angle == 30) {
        ans = [1, 3, 2, 1];
    } else if (angle == 45) {
        ans = [1, 1, 1, 2];
    } else if (angle == 60) {
        ans = [1, 1, 2, 1];
    } else if (angle == 90) {
        ans = [0, 1, 1, 1];
    } else if (angle == 120) {
        ans = [-1, 1, 2, 1];
    } else if (angle == 135) {
        ans = [-1, 1, 1, 2];
    } else if (angle == 150) {
        ans = [-1, 3, 2, 1];
    } else if (angle == 180) {
        ans = [-1, 1, 1, 1];
    }
    return ans;
}
function sintoangle(sin) {
    let ans;
    if (JSON.stringify(sin) === JSON.stringify([1, 1, 2, 1])) {
        ans = '30^\\circ , 150^\\circ';
    } else if (JSON.stringify(sin) === JSON.stringify([1, 1, 1, 2])) {
        ans = '45^\\circ,135^\\circ';
    } else if (JSON.stringify(sin) === JSON.stringify([1, 3, 2, 1])) {
        ans = '60^\\circ,120^\\circ';
    } else if (JSON.stringify(sin) === JSON.stringify([1, 1, 1, 1])) {
        ans = '90^\\circ';
    }
    else {
        ans = 'NG';
    }
    return ans;
}

function sqrt(number) {
    let answer = [];
    answer[0] = 1;
    answer[1] = number[0];
    answer[2] = 1;
    answer[3] = number[2];
    answer = simplsqrt(answer);
    answer = simplfrac(answer);
    return answer;
}


function times(timea, timeb) {
    let timesans = [];
    for (let i = 0; i < 4; i++) {
        timesans[i] = timea[i] * timeb[i];
    }
    timesans = simplsqrt(timesans);
    timesans = simplfrac(timesans);
    return timesans; // 計算結果を返す
}
function add(adda, addb) {
    let addans = [];
    addans[0] = adda[0] * addb[2] + addb[0] * adda[2];
    addans[2] = adda[2] * addb[2];
    addans[1] = adda[1];
    addans[3] = adda[3];

    addans = simplsqrt(addans);
    addans = simplfrac(addans);
    return addans; // 計算結果を返す
}


function gcd(a, b) {
    // 絶対値を取ることで負の数を防ぐ
    a = Math.abs(a);
    b = Math.abs(b);

    // どちらかが0の場合は、a + b（非ゼロ側）を返す
    if (a === 0) return b;
    if (b === 0) return a;

    // ユークリッドの互除法
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}
function simplfrac(frac) {
    const gcdOut = gcd(frac[0], frac[2]);
    frac[0] /= gcdOut;
    frac[2] /= gcdOut;

    const gcdIn = gcd(frac[1], frac[3]);
    frac[1] /= gcdIn;
    frac[3] /= gcdIn;

    return frac;
}
function rationalize(frac) {
    let answerfrac = [];
    answerfrac[0] = frac[0];
    answerfrac[1] = frac[1] * frac[3];
    answerfrac[2] = frac[2];
    answerfrac[3] = frac[3] * frac[3];
    answerfrac = simplsqrt(answerfrac);
    answerfrac = simplfrac(answerfrac);
    return answerfrac;
}

function arc(frac) {
    let answerfrac = [];
    answerfrac[0] = frac[2];
    answerfrac[1] = frac[3];
    answerfrac[2] = frac[0];
    answerfrac[3] = frac[1];
    return answerfrac;
}
function simplsqrt(sqrt) {
    let ans = [];
    for (let i = 0; i < 4; i++) {
        ans[i] = sqrt[i];
    }
    for (let i = 2; i <= ans[1]; i++) {
        while (ans[1] % (i * i) === 0) {
            ans[0] *= i; // 平方数の根をルート外に出す
            ans[1] /= i * i; // 割り切れる平方数でルート内を簡略化
        }
    }
    for (let i = 2; i <= ans[3]; i++) {
        while (ans[3] % (i * i) === 0) {
            ans[2] *= i; // 平方数の根をルート外に出す
            ans[3] /= i * i; // 割り切れる平方数でルート内を簡略化
        }
    }
    return ans;
}
function getRandomIntBetween(min, max) {
    // minとmaxが逆の場合に対応
    if (min > max) [min, max] = [max, min];

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function polynomialToString(coefficients) {
    let terms = [];

    for (let i = coefficients.length - 1; i >= 0; i--) {
        let coef = coefficients[i];
        if (coef === 0) continue;

        let term = '';
        if (i === 0) {
            term = `${coef}`;
        } else if (i === 1) {
            term = coef === 1 ? 'x' : coef === -1 ? '-x' : `${coef}x`;
        } else {
            term = coef === 1 ? `x^${i}` : coef === -1 ? `-x^${i}` : `${coef}x^${i}`;
        }

        terms.push(term);
    }

    return terms.length > 0 ? terms.join(' + ').replace(/\+ -/g, '- ') : '0';
}


function printfrac(fracc) {
    let frac = [];
    for (let i = 0; i < 4; i++) {
        frac[i] = fracc[i];
    }
    frac = simplfrac(frac);
    let pfrac = [];
    let pfrag = '';
    if (frac[0] < 0) {
        pfrag = '-';
        frac[0] = frac[0] * (-1);
    }

    if (frac[0] == 0) {

        pfrac[0] = `0`;

    }
    else if (frac[0] == 1) {
        if (frac[1] == 1) {
            pfrac[0] = `1`;
        }
        else {
            pfrac[0] = `\\sqrt{${frac[1]} } `;
        }
    }
    else if (frac[1] == 1) {
        pfrac[0] = `${frac[0]} `;
    }
    else {
        pfrac[0] = `${frac[0]} \\sqrt\{ ${frac[1]} \ } `
    }
    if (frac[2] == 1) {
        if (frac[3] == 1) {
            pfrac[1] = `1`;
        }
        else {
            pfrac[1] = `\\sqrt\{ ${frac[3]} \ } `;
        }
    }
    else if (frac[3] == 1) {
        pfrac[1] = `${frac[2]} `;
    }
    else {
        pfrac[1] = `${frac[2]} \\sqrt\{ ${frac[3]} \ } `
    }

    if (pfrac[1] == 1 || frac[0] == 0) {
        return `${pfrag}${pfrac[0]} `;
    }
    else {
        return `${pfrag} \\frac\{ ${pfrac[0]} \ } \{ ${pfrac[1]} \ } `;
    }
}

