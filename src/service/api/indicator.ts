
export interface IndicatorResponse {
    order: number;
    process: number;
    preOrder: number;
    todayOrder: number;
}

export interface OtherIndicatorResponse {
    data: {
        id: string;
        order_type: string;
        order_name: string;
        today_name: string;
        last_name: string;
    }[]
}
function generateRandomNumber() {
    return String(Math.floor(Math.random() * (90000000 - 10000000 + 1)) + 10000000);
}

function generateRandomCharacter() {
    const minCharCode = 48; // 可显示字符范围的最小编码（空格）
    const maxCharCode = 122; // 可显示字符范围的最大编码（~）
    let res = '';
    for (let i = 0; i < 10; i++) {
        const randomCharCode = Math.floor(Math.random() * (maxCharCode - minCharCode + 1)) + minCharCode;
        const randomCharacter = String.fromCharCode(randomCharCode);
        res = `${res}${randomCharacter}`;
    }
    return res;
}

export function getIndicatorData(): Promise<IndicatorResponse> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ order: 85, process: 93, preOrder: 56, todayOrder: 53 });
        }, Math.random() * 500);
    })
}


export function getOtherIndicatorData(): Promise<OtherIndicatorResponse> {
    const res = new Array(10).fill(0);
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = res.map(() => ({
                id: generateRandomNumber(),
                key: generateRandomNumber(),
                order_type: generateRandomCharacter(),
                order_name: generateRandomCharacter(),
                today_name: generateRandomCharacter(),
                last_name: generateRandomCharacter()
            }));
            resolve({ data });
        }, Math.random() * 500);
    })
}