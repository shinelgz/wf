import List from '../../../pages/list';
import {Modal} from 'ssc-ui-react';


export function viewMoreHandler( _props? : any) {

    const inst = Modal.success({
        title: false,
        icon: false,
        width: 800,
        content: <List />,
        onOk : () => {
            inst.destroy();
        }
    });
}