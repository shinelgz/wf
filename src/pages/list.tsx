import { useOtherIndicatorTableFactory } from "../service/useOtherIndicatorTableFactory";
import NavBarView from "../applications/components/navbar-view";
import TableView from "../applications/components/table-view";

export default function List(){
    const { columns, dataSource } = useOtherIndicatorTableFactory();
    return (
    <>
     <NavBarView>View More</NavBarView>
     <TableView  {...{dataSource, columns}}></TableView>
    </>
    );
}