import { getOtherIndicatorData as loader, OtherIndicatorResponse } from "./api/indicator";
import { otherIndicatorDataRules, OtherIndicatorDataRules } from '../applications/rules'
import { useStateFactory } from "../hooks/use-state-factory";

export function useOtherIndicatorTableFactory() {

    const { result, table } = useStateFactory<OtherIndicatorResponse, OtherIndicatorDataRules>({ loader, rules: otherIndicatorDataRules });
    const { columns } = table();

    return {
        columns,
        dataSource: result?.data ?? []
    }
}
