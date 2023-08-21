import { getRegion } from "../../utils/const";

export const keyStateRenderRules = {

    showCardA() {
        const region = getRegion();
        return region === 'th';
    }
}

export type KeyStateRenderRules = typeof keyStateRenderRules;