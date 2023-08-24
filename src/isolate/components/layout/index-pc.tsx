import { LayoutProps } from "../../type";

export const Layout = ({ children }: LayoutProps) => {
    return <div style={{ minWidth: '1000px'}} className="delivery-dashboard-wrapper">{children}</div>;
};
