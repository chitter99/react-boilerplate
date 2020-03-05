import * as React from 'react';
import { Grommet, Box, Heading, Paragraph } from 'grommet';

import { Theme } from '../theme';

export const App: React.StatelessComponent<{}> = (props) => {
    return <Grommet theme={ Theme } full>
        <Box>
            <Heading>Hello world</Heading>
            <Paragraph>This is react + grommet.</Paragraph>
        </Box>
    </Grommet>;
};
