

export const transfromFactory = {

    table<T1 extends any[], T2 extends Record<string, string>>(res: T1, rule: T2) {

        const columns = Object.keys(rule).map((key) => {
            return {
                key,
                title: rule[key],
                dataIndex: key,
            }
        })

        return {
            dataSource: res,
            columns
        }


    }

}