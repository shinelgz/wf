import { useOtherIndicatorTableFactory } from "../../../service/useOtherIndicatorTableFactory";
import TableView from "../../../applications/components/table-view";

const ThisIsATable:React.FC = () => {
    const { columns, dataSource } = useOtherIndicatorTableFactory();

    return <TableView {...{dataSource, columns}}></TableView>
}

export default ThisIsATable;