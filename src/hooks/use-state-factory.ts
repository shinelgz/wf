import { useEffect, useState } from "react"
interface FactoryPropsBase<dataType> {
    loader?: () => Promise<dataType>;
    data?: dataType;
}

interface FactoryProps<dataType, ruleType> extends FactoryPropsBase<dataType> {
    rules?: ruleType & Record<string, any>;
}
interface DataFactory<dataType> {
    refresh: () => void;
    result: dataType | undefined;
    [p: string]: any;
}

function stateFactoryBase<dataType, ruleType>(props: FactoryProps<dataType, ruleType>) {
    const { loader, rules, data } = props;
    const [dataSource, setDataSource] = useState<dataType>();
    async function fireLoader() {
        let odata = loader ? await loader() : data;
        const rulers = rules ? Object.values(rules).filter(ruler => (ruler)?.constructor === Function) : [];
        odata = rulers.reduce((odata, rule) => rule(odata), odata)
        setDataSource(odata);
    }
    useEffect(() => {
        fireLoader();
    }, [])

    return {
        result: dataSource,
        refresh: fireLoader
    }
}

//export function useStateFactory<dataType extends Record<string, any>, ruleType extends Record<string, any>>(props: FactoryProps<dataType, ruleType>): DataFactory<dataType> {
export function useStateFactory<dataType, ruleType extends Record<string, any> = any>(props: FactoryProps<dataType, ruleType>): DataFactory<dataType> {
    const { rules } = props;

    const base = stateFactoryBase<dataType, ruleType>(props);

    return {
        ...base,
        table() {
            if (!rules?.columns) {
                throw new Error('no columns config in rule');
            }
            const columns = Object.keys(rules.columns).map((key) => {
                return {
                    key,
                    title: rules.columns[key],
                    dataIndex: key,
                }
            })
            return {
                columns
            }
        }
    }
}
