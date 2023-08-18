import { getOtherIndicatorData as loader, OtherIndicatorResponse } from "./api/indicator";
import { otherIndicatorDataRules, OtherIndicatorDataRules } from '../applications/rules'
import { useDataFactory } from "../hooks/use-data-factory";

export function useOtherIndicatorTableFactory() {

    const { dataSource, table } = useDataFactory<OtherIndicatorResponse, OtherIndicatorDataRules>({ loader, rules: otherIndicatorDataRules });
    const { columns } = table();

    return {
        columns,
        dataSource
    }
}
