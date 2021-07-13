import React from 'react'
//components
import Home from './Home';
// background
import background from '../../../Helpers/Images/backgorund.png';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    component: Home,
    title: 'Templates/Home page',
    decorators: [
        (Story) => (
        <div style={{ background: `url(${background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '1000px',
            position: 'relative',
            padding: '20px',
        }}>
            <Story />
        </div>
        ),
    ],
}

export const HomePage = () => <Home />
