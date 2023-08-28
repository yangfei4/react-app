import React from 'react';

class SearchInput extends React.Component {
    state = { entry: '' }
    constructor(props) {
        super(props)

        // first way to solve issue with 'undefined this'
        this.onFormSubmit = this.onFormSubmit.bind(this) 
    }
    
    // second way to solve issue with 'undefined this'
    // onFormSubmit = (event) => {
    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry);
    }

    render() {
        return(
            <div className='ui-segment'>
                <form onSubmit={this.onFormSubmit} className='ui form' action=''>
                    <div className='field'>
                        <div className='ui massive icon input'>
                            <input 
                                type = 'text' 
                                placeholder='search...' 
                                onChange={(event) => {this.setState({entry: event.target.value})}}
                                value={this.state.entry}
                            />
                            <i className = 'search icon'></i>
                        </div>
                    </div>
                </form> 
            </div>
        )
    }
}

export default SearchInput;