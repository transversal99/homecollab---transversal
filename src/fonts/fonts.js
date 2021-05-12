import { createGlobalStyle } from 'styled-components';

import Jost300Light from './Jost300Light.woff';
// import Jost500Medium from './Jost500Medium.woff';
// import Jost700Bold from './Jost700Bold.woff'

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${Jost300Light}) format('woff'),
        font-weight: 300;
        font-style: normal;
    }
`;
