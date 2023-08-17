import { getOtherIndicatorData, OtherIndicatorResponse } from "../service/api";
import { otherIndicatorDataRules, OtherIndicatorDataRules } from '../applications/rules'
import { transfromFactory } from '../utils/transfrom-factory';
import { useEffect, useState } from "react";

export function useOtherIndicatorTableOptions() {
    const [data, setData] = useState<OtherIndicatorResponse[]>([]);
    useEffect(() => {
        (async () => {
            const res = await getOtherIndicatorData()
            const { dataSource } = transfromFactory.table<OtherIndicatorResponse[], OtherIndicatorDataRules["columns"]>(res, otherIndicatorDataRules.columns);
            setData(dataSource)
        })();
    }, [])
    const { columns } = transfromFactory.table<OtherIndicatorResponse[], OtherIndicatorDataRules["columns"]>(data, otherIndicatorDataRules.columns);
    return {
        columns: columns,
        dataSource: data
    }
}