import { NavBar as BaseNavBar } from "ssc-mobile-ui-react";

function NavBar({style,children}:{style?: Record<string,string>, children: React.ReactNode}){
    return (
        <BaseNavBar
            style={{
                '--height': '80px',
                '--border-bottom': '1px #eee solid',
                'backgroundColor': '#1B2B46',
                'color': '#fff',
                ...style
            }}
        >{children}</BaseNavBar>
    )
}

export default NavBar;