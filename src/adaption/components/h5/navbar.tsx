import { useNavigate } from "react-router-dom";
import { NavBar as BaseNavBar, NavBarProps } from "ssc-mobile-ui-react";

function NavBar({style,children, navBarProps}:{style?: Record<string,string>, children: React.ReactNode, navBarProps:NavBarProps}){
    const navigate = useNavigate();
    return (
        <BaseNavBar
            style={{
                '--height': '80px',
                '--border-bottom': '1px #eee solid',
                'backgroundColor': '#1B2B46',
                'color': '#fff',
                ...style
            }}
            {...navBarProps}
            onBack={() => navigate(-1)}
        >{children}</BaseNavBar>
    )
}

export default NavBar;