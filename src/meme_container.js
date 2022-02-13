import React from 'react';

class MemeContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={ext:undefined};
    }

    async fetch_meme(url){
        var response = await fetch(url);
        var meme_json = await response.json();
        return meme_json;
     }

    async load_meme() {

        var meme_json = await this.fetch_meme('https://api.cybercube21.de/memes'); 
        var meme_fileExt = meme_json.url.split('.').pop();

        this.setState({ext:meme_fileExt,url:meme_json.url});
    }

    render() {

        const state = this.state;
        var element= <div></div>;

        if(state.ext === "webp") {
            element = <img alt="" className="container__pop-up-img" src={state.url} id="hiddenimage"/>
        } else if (state.ext === "webm") {
            element = <video alt="" className="container__pop-up-img" src={state.url} id="hiddenimage" controls autoPlay playsInline loop/>
        }

        return (
            <div>
                <p className='headline'>Welcome to Cubie's meme collection!</p> 
                <button className='load_button' id='modal_button' onClick={this.load_meme.bind(this)}><p className='panel_text'>Give me a meme!</p></button>
                <div className="container__pop-up" id="hiddencontainer">
                    {element}
                </div>
            </div>
        )

    }

}

export default MemeContainer;