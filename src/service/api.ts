
export interface IndicatorResponse {
    order: number;
    process: number;
    preOrder: number;
    todayOrder: number;
}

export function getIndicatorData(): Promise<IndicatorResponse> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ order: 85, process: 93, preOrder: 56, todayOrder: 53 });
        }, Math.random() * 5000);
    })
}