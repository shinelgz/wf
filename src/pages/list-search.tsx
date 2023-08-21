
import Webview from "../applications/components/webview";
import SearchView from "../applications/components/search-view";

export default function ListSearch(){
    
    return (
        <>
            <Webview title="Search" backArrow={true}>
            <div className="container-wrapper">
                <SearchView />
            </div>
            </Webview>
        </>
    );
}