import { LayoutProps } from '../../type';

export const Layout = ({ children }: LayoutProps) => {
;
    return (
        <div style={{ minWidth: 'auto'}} className="delivery-dashboard-wrapper">
            {/* <NavBar navBarProps={{backArrow:false}}>Operation</NavBar> */}
            {children}
        </div>
    );
};
