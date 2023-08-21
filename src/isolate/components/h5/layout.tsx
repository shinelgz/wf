import { useContext } from 'react';
import { LayoutProps } from '../../type';
import NavBar from './navbar';
import context from  '../../../utils/Context';

export const Layout = ({ children }: LayoutProps) => {
    const { region } = useContext(context);
    console.info(region);
    return (
        <div style={{ minWidth: 'auto'}} className="delivery-dashboard-wrapper">
            {/* <NavBar navBarProps={{backArrow:false}}>Operation</NavBar> */}
            {children}
        </div>
    );
};
