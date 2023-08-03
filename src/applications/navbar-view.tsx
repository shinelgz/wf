import {NavBar} from '@adaption-adaptor';

function NavBarView({style, children}: { style?: Record<string,string>, children: React.ReactNode}){
    return (
        <NavBar style={style}>{children}</NavBar>
    )
}

export default NavBarView;