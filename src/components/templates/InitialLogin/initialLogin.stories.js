import React from 'react';
import InitialLogin from './InitialLogin';
// background
import background from '../../../Helpers/Images/backgorund.png';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Templates/Initial Login',
    component: InitialLogin,
    decorators: [
        (Story) => (
        <div style={{ background: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        margin: '0' }}>
            <Story />
        </div>
        ),
    ],
}

export const InitialLoginUser = () => <InitialLogin />;
