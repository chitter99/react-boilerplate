import { ThemeType, grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';
import { TextArea } from 'grommet';

export const Theme = deepMerge(grommet, <ThemeType>{
    global: {
        font: {
            family: 'Source Sans Pro'
        },
        colors: {
            brand: '#6cc2da',
            'accent-1': '#7AB0BF'
        }
    },
    textInput: {
        extend: `
            background: white
        `
    },
    textArea: {
        extend: `
            background: white
        `
    },
    button: {
        border: {
            color: 'dark-1',
            radius: '0px'
        }
    }
});
