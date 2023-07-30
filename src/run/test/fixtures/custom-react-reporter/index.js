import { Box, Text } from 'ink';
import React, { useState } from 'react';
const reporter = ({ test }) => {
    let [results, setResults] = useState();
    test.once('complete', results => setResults(results));
    return (React.createElement(Box, null,
        React.createElement(Text, null, test.name),
        React.createElement(Text, null, results && JSON.stringify(results))));
};
export default reporter;
//# sourceMappingURL=index.js.map