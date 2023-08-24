import { OtherIndicatorResponse } from "src/service/api/indicator";

export const otherIndicatorDataRules = {
    columns: {
        'id': 'ID',
        'order_type': '订单类型',
        'order_name': '订单名字'
    },
    thousands(dataSource: OtherIndicatorResponse) {

        const fdata = dataSource.data.map(item => {
            item.id = (item.id).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return item;
        });
        dataSource.data = fdata;
        return dataSource;
    }
}

export type OtherIndicatorDataRules = typeof otherIndicatorDataRules;