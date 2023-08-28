import React from 'react';
import SearchInput from './SearchInput';
import axios from 'axios';
import ImageList from './imageList';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = { images: [] }

        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }
    
    async onSearchSubmit(entry){
        const response = await axios.get(`https://pixabay.com/api/?key=39112461-6d146b7c76c348e7bd2f620c3&q=${entry}&image_type=photo`)
        console.log(response.data.hits)

        this.setState( { images: response.data.hits })
    }

    render(){
        return (
            <div className='ui container' style={{marginTop: '30px'}}>
                <SearchInput onSearchSubmit={this.onSearchSubmit}/>
                <ImageList images={ this.state.images }/>
            </div>
        )
    }
}

export default App;