import { useEffect, useState } from "react"
interface FactoryPropsBase<dataType> {
    loader: () => Promise<dataType>,
}

interface FactoryProps<dataType, ruleType> extends FactoryPropsBase<dataType> {
    rules: ruleType & Record<string, any>;
}
interface DataFactory<dataType extends Record<'data' | string, any>> {
    reload: () => void;
    dataSource: dataType['data'];
    [p: string]: any;
}

function dataFactoryBase<dataType extends Record<string, any>, ruleType>(props: FactoryProps<dataType, ruleType>) {
    const { loader, rules } = props;
    const [dataSource, setDataSource] = useState<any>([]);
    async function fireLoader() {
        const { data } = await loader();
        Object.values(rules).forEach(rule => {
            if (typeof rule === 'function') {
                rule(data);
            }
        })

        setDataSource(data);
    }
    useEffect(() => {
        fireLoader();
    }, [])

    return {
        dataSource,
        reload: fireLoader
    }
}

export function useDataFactory<dataType extends Record<string, any>, ruleType extends Record<string, any>>(props: FactoryProps<dataType, ruleType>): DataFactory<dataType> {
    const { rules } = props;

    const base = dataFactoryBase<dataType, ruleType>(props);

    return {
        ...base,
        table() {
            if (!rules.columns) {
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
