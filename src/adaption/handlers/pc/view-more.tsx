import List from '../../../pages/list';
import {Modal} from 'ssc-ui-react';


export function viewMoreHandler( props? : any) {

    const inst = Modal.success({
        title: 'Info',
        width: 800,
        content: <List />,
        onOk : () => {
            inst.destroy();
        }
    });
}