
export async function getIndicatorData(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve({order:85, process: 93, preOrder: 56,todayOrder: 53});
        }, Math.random() * 5000);
    })
}