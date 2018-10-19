import IconButton from '@material-ui/core/IconButton';
import { SwapHoriz } from '@material-ui/icons';
import React from 'react';
import './SwapButton.css';

const SwapButton = ({ onClick }) => {
    return (
        <div className='swapButton' id='language-swap-button br1 fl w-20 pa2 grow bw2 shadow-5 pa3'>
            <IconButton onClick={ onClick } aria-label='Swap languages'>
                <SwapHoriz fontSize='large'/>
            </IconButton>
        </div>
    )
};
export default SwapButton;