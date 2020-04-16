/**
 * 如果一个模块中的 model 体积很大时，可以考虑将其拆分成一个个文件（action-types、effects、reducers）
 */

import reducers from './reducers';
import effects from './effects';

export interface GlobalStateDeclaration {
    projectName?: string;
    baseImgUrl: string;
}

const state: GlobalStateDeclaration = {
    projectName: 'react-ts-app',
    baseImgUrl: 'http://10.100.2.146:5500/src/assets/images/',
};

export default {
    name: 'global',
    state,
    reducers,
    effects,
};
