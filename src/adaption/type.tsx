import { MouseEventHandler } from "react";

export interface SearchProps {
    onSearch: () => void;
}

export interface moreProps {
        position: 'top' | 'bottom',
        onclick? : MouseEventHandler<HTMLElement>
        text?: string,
}