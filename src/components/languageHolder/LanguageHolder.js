import React, { Component } from 'react';
import LanguagePicker from '../languagePicker/LanguagePicker';
import SwapButton from '../swapButton/SwapButton';

class LanguageHolder extends Component {
    constructor(props) {
        super(props);
        const { onSourceChange, onTargetChange, sourceLanguage, targetLanguage } = props;
        this.state = {
            onSourceChange,
            onTargetChange,
            sourceLanguage,
            targetLanguage,
        }
    }

    render() {
        const { languages } = this.props;
        const { onSourceChange, onTargetChange, sourceLanguage, targetLanguage } = this.state;
        const onSourceLanguageChange = (newValue) => {
            this.setState({
                sourceLanguage: newValue,
            });
            onSourceChange(newValue);
        };
        const onTargetLanguageChange = (newValue) => {
            this.setState({
                targetLanguage: newValue,
            });
            onTargetChange(newValue);
        };

        const sourceLanguagePicker = <LanguagePicker onChange={ onSourceLanguageChange } languages={ languages } value={ sourceLanguage } label='From' />;
        const targetLanguagePicker = <LanguagePicker onChange={ onTargetLanguageChange } languages={ languages } value={ targetLanguage } label='To' />;

        return (
            <div className=''>
                <div className='inline-flex flex-row justify-center w-80 pa2'>
                    <div className='source-language bw1 br--left fl w-40 pa2'>
                        { sourceLanguagePicker }
                    </div>
                    <SwapButton onClick={ this.onLanguageSwap }/>
                    <div className='target-language bw1 br--right fl w-40 pa2'>
                        { targetLanguagePicker }
                    </div>
                </div>
            </div>
        )
    }

    onLanguageSwap = () => {
        const { sourceLanguage, targetLanguage, onSourceChange, onTargetChange } = this.state;
        this.setState({
            onSourceChange: onTargetChange,
            onTargetChange: onSourceChange,
            sourceLanguage: targetLanguage,
            targetLanguage: sourceLanguage,
        });
    }
}

export default LanguageHolder;