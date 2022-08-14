import { createGlobalStyle } from 'styled-components'
import { ThemeTypes } from './context/ThemeContext/types'

export default createGlobalStyle < { theme: ThemeTypes } > `
    body {
        padding: 0;
        margin: 0 !important;
        font-family: 'Poppins';
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${({ theme }) => theme.color};
        transition: all .4s;
    }
    html {
        scroll-behavior: smooth;
    }
`
