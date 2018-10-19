import { Divider } from '@material-ui/core';
import React, { Component } from 'react';
import LanguageHolder from '../languageHolder/LanguageHolder';
import TranslationHolder from '../translationHolder/TranslationHolder';

class Translate extends Component {

    componentDidMount() {
        this.props.onRequestLanguages(
            (data) => {
                console.log('Supported languages are:' + data.map(language => "\n" + language.name))
            },
            () => {
                console.error('Server did not provide any languages (it might be done or you are experiencing connection issues)')
            }
        );
    };

    render() {
        const {
            // language
            languageIsPending,
            languages,

            // translate
            translationIsPending,
            onSourceLanguageChange,
            onTargetLanguageChange,
            onSearchFieldChange,
            onRequestTranslation,
            sourceLanguage,
            targetLanguage,
            searchText,
            translation
        } = this.props;

        return (languageIsPending ?
                <h1>Loading...</h1> :
                (<div className='tc'>
                    <LanguageHolder
                        onSourceChange={onSourceLanguageChange}
                        onTargetChange={onTargetLanguageChange}
                        sourceLanguage={sourceLanguage}
                        targetLanguage={targetLanguage}
                        languages={languages}
                    />
                    <Divider/>
                    <TranslationHolder
                        isPending={translationIsPending}
                        onSearchFieldChange={onSearchFieldChange}
                        onRequestTranslation={onRequestTranslation}
                        searchText={searchText}
                        sourceLanguage={sourceLanguage}
                        targetLanguage={targetLanguage}
                        translation={translation}
                    />
                </div>)
        )
    }
}

export default Translate;