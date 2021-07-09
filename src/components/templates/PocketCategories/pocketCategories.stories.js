import React from 'react';
import PocketCategories from './PocketCategories';
// background
import background from '../../../Helpers/Images/backgorund.png';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Templates/Pocket Categories',
    component: PocketCategories,
    decorators: [
        (Story) => (
        <div style={{ background: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        margin: '0',
        padding: '20px' }}>
            <Story />
        </div>
        ),
    ],
}

export const PocketCategoriesUser = () => <PocketCategories />;
