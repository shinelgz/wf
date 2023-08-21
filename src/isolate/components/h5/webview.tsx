import NavBar from "./navbar";
import { WebviewProps } from "../../../isolate/type";
import { Space } from "antd-mobile";
import { SearchOutline } from "antd-mobile-icons";

function RightButtons( props: WebviewProps['right']) {
    const btns =  props?.map(({id, onClick}) => {

        switch(id){
            case 'search':
                return <SearchOutline onClick={onClick} key={id} />
        }
    });

    return  (
        <div style={{ fontSize: 24 }}>
          <Space style={{ '--gap': '16px' }}>
           {btns}
          </Space>
        </div>
      );

}
export default ({ children, title, backArrow = false, right}: WebviewProps) => {
    const rightButtons = RightButtons(right);

    return (
    <>
        <NavBar navBarProps={{backArrow, right: rightButtons }}>{title}</NavBar>
        {children}
    </>
    );
}