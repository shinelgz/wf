
import {Table as TableAntd} from 'antd';

function Table ({dataSource, columns}: {dataSource : Record<string, unknown>[], columns: Record<string, unknown>[]}) {

  return <TableAntd dataSource={dataSource} columns={columns} style={{flex: 'auto'}}/>;
}

export default Table