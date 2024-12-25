
        function tosin(angle) {
            let ans = [];
            if (angle == 30) {
                ans = [1, 1, 2, 1]
            } else if (angle == 45) {
                ans = [1, 1, 1, 2]
            } else if (angle == 60) {
                ans = [1, 3, 2, 1]
            } else if (angle == 90) {
                ans = [1, 1, 1, 1]
            } else if (angle == 120) {
                ans = [1, 3, 2, 1]
            } else if (angle == 135) {
                ans = [1, 1, 1, 2]
            } else if (angle == 150) {
                ans = [1, 1, 2, 1]
            }
            return ans;
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