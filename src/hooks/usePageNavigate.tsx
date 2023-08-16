import { useNavigate } from 'react-router-dom';

export function usePageNavigate(options: { route: string } | string) {
    const path = typeof options === 'object' ? options.route : options;
    const navigate = useNavigate();
    navigate(path)
}