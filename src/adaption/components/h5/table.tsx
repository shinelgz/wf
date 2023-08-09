import { Card, Toast, Button } from 'antd-mobile'
import { AntOutline } from 'antd-mobile-icons'

 const Table =  ({dataSource, columns}: {dataSource : Record<string, unknown>[], columns: Record<string, string>[]}) => {
  const onClick = () => {
    Toast.show('点击了卡片')
  }

  const onHeaderClick = () => {
    Toast.show('点击了卡片Header区域')
  }

  const onBodyClick = () => {
    Toast.show('点击了卡片Body区域')
  }

  const labels:Record<string, string> = {} ;

  columns.forEach(({ title, dataIndex }) => {
    return labels[dataIndex] =  title;
  });
  
  const list: Record<string, string>[] = [];
  
  dataSource.map((item:Record<string, unknown>) => {
    
    const rs: Record<string, string> = {};

    Object.keys(labels).map(key => {
      rs[labels[key as string]] = item[key] as string;
    })

    list.push(rs);

  })

  return (
    <div style={{ textAlign : "left"}}>
     {
        list.map((item,index) => {
        const keys = Object.keys(item);

        return <Card 
          title={
            <div style={{ fontWeight: 'normal' }}>
              <AntOutline style={{ marginRight: '4px', color: '#1677ff' }} />
              {item[keys[0]]} 
            </div>
          }
          extra={ <Button onClick={() => {
            Toast.show('click a button')
          }}>detail {'>'}</Button>}
          key={index} onClick={onClick}  onHeaderClick={onHeaderClick} onBodyClick={onBodyClick}>
          {
            keys.slice(1).map(key => {
              return <p key={key}>{key} : {item[key]}</p>
            })
          }
        </Card>
        })
     }
    </div>
  )
}

export default Table;