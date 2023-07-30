
import {Search} from '@component-adaptor';

function SearchView(){
  return (<>
  <Search onSearch={() => {alert(1)}}>
  </Search>
  </>);
}

export default SearchView;