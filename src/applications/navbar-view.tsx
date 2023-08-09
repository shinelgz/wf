import {NavBar} from '@adaption-adaptor';
import { NavBarProps } from 'ssc-mobile-ui-react';

function NavBarView({style, children, ...navBarProps}: { style?: Record<string,string>, children: React.ReactNode, navBarProps?: NavBarProps}){
    return (
        <NavBar style={style} {...navBarProps} >{children}</NavBar>
    )
}

export default NavBarView;