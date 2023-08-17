import type { HandlerProps } from '../../type';

export function viewMoreHandler({ navigate, componentPath }: HandlerProps) {
    navigate!(componentPath!);
}