import React from 'react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <div style={{ margin: 'auto', padding: '15px', width: '100vw', height: '100vh', position: 'relative' }}>
      <Story />
    </div>
  ),
];
