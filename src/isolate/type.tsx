/**
 * 保持各端接口的 Props 一致性
 */
import { MouseEventHandler } from "react";
import { NavigateFunction } from "react-router-dom";

export interface SearchProps {
    onSearch: () => void;
}

export interface moreProps {
        position: 'top' | 'bottom',
        onclick? : MouseEventHandler<HTMLElement>
        text?: string,
}

export interface LayoutProps {
    children: React.ReactNode;
}

export interface HandlerProps {
    navigate? : NavigateFunction;
    componentPath? : string,
    Component? : () => JSX.Element;
}

export interface WebviewProps {
    title?: string;
    children?: React.ReactNode | React.ReactNode[];
    backArrow?: boolean;
    right?: {
        id: 'search'| 'more';
        onClick: () => void;
    }[];
}