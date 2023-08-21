import { useOtherIndicatorTableFactory } from "../service/useOtherIndicatorTableFactory";
import TableView from "../applications/components/table-view";
import Webview from "../applications/components/webview";
import { WebviewProps } from "../applications";
import {onListSearchHandler} from '../applications/handlers';
import SearchView from "../applications/components/search-view";
import { useStateFactory } from "../hooks/use-state-factory";
import { showSearchOnListRules,ShowSearchOnListRules } from "../applications/rules";
import { useContext } from "react";
import context from '../utils/Context'

export default function List(){

    const { columns, dataSource } = useOtherIndicatorTableFactory();
    const { navigate } = useContext(context);
    const { result } = useStateFactory<boolean, ShowSearchOnListRules>({data: false, rules: showSearchOnListRules})

    const right: WebviewProps['right'] = [{
        id: 'search',
        onClick: () => onListSearchHandler({navigate})
    }];

    return (
        <>
            <Webview title="View More" backArrow={true} right={right}>
                { result ? <div className="container-wrapper"><SearchView /></div> : null }
                <TableView  {...{dataSource, columns}}></TableView>
            </Webview>
        </>
    );
}