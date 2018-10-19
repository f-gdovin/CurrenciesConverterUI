import { Button, Paper } from '@material-ui/core';
import React, { Component } from 'react';
import CheckboxList from '../checkBoxList/CheckboxList';
import SearchBox from '../searchBox/SearchBox';

class TranslationHolder extends Component {
    constructor(props) {
        super(props);
        const { searchText } = props;
        this.state = {
            searchText,
        }
    }

    render() {
        const { translation, onSearchFieldChange } = this.props;
        const { searchText } = this.state;
        const handleSearchValueChange = (newValue) => {
            this.setState({
                searchText: newValue,
            });
            onSearchFieldChange(newValue);
        };
        const options = [
            'Also include synonyms in the result (if possible for given languages)',
            'Also include antonyms in the result (if possible for given languages)',
            'Also include examples in the result (if possible for given languages)',
        ];

        return (
            <div className='center flex flex-wrap flex-wrap-ns inline-flex-l inline-flex-m flex-row-m flex-row-l justify-center w-80 pa2-m pa2-l'>
                <div className='search-term bw1 br--left fl-ns w-100 w-100-ns w-100-m w-40-l pv2 pv2-ns pv2-m pa2-l mh4-l'>
                    <Paper className=''>
                        <SearchBox value={ searchText } onChange={ handleSearchValueChange }/>
                        <CheckboxList values={ options } useCheckboxes={true} />
                        <div className='pb3'>
                            <Button
                                color='primary'
                                variant='contained'
                                onClick={ this.handleTranslationClick }
                            >
                                TRANSLATE
                            </Button>
                        </div>
                    </Paper>
                </div>
                <div className='result-list bw1 br--right fl-ns w-100 w-100-ns w-100-m w-40-l pv2 pv2-ns pv2-m pa2-l mh4-l'>
                    <Paper className=''>
                        <CheckboxList values={ translation.translations } useCheckboxes={false} />
                    </Paper>
                </div>
            </div>
        )
    }

    handleTranslationClick = () => {
        const { sourceLanguage, targetLanguage, onRequestTranslation } = this.props;
        const translationRequest = {
            source: sourceLanguage,
            target: targetLanguage,
            text: this.state.searchText || '',
            // TODO: un-hardcode this
            includeSynonyms: false,
            includeAntonyms: false,
            includeExamples: false,
        };

        onRequestTranslation(translationRequest);
    }
}

export default TranslationHolder;