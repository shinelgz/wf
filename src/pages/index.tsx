import { useContext } from 'react';
import PlatFormContext from '../Context';
import { PlatForm } from '../const';

import SearchView  from '../applications/search-view';
import  TableView  from '../applications/table-view';

function Home() {

  const {platform} = useContext(PlatFormContext)

 
  console.info(platform);

  
  return (
  <div style={{ width: platform == PlatForm.PC ? "1000px" : 'auto'}}>
    <div>
      <SearchView />
    </div>
    <div >
      <TableView />
    </div>
  </div>
  )
}

export default Home;