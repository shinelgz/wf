import { OtherIndicatorResponse } from "src/service/api/indicator";

export const otherIndicatorDataRules = {
    columns: {
        'id': 'ID',
        'order_type': '订单类型',
        'order_name': '订单名字',
        today_name: '当天订单名字',
        last_name: '最新订单名字'
    },
    thousands(dataSource: OtherIndicatorResponse['data']) {
        return dataSource.map(item => {
            item.id = (item.id).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '、');
            return item;
        });
    }
}

export type OtherIndicatorDataRules = typeof otherIndicatorDataRules;