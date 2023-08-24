import type { HandlerProps } from '../../type';
import { Modal } from 'ssc-ui-react';


export function viewMoreHandler( { Component }: HandlerProps) {

    const inst = Modal.success({
        title: false,
        icon: false,
        width: 800,
        content: Component ? <Component /> : null,
        onOk : () => {
            inst.destroy();
        }
    });
}