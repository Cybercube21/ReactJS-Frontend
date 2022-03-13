import React from 'react';

class MemeContainer extends React.Component {

    constructor(props){
        super(props);
        this.state={ext:undefined};
        this.state={share_link:undefined}
        this.state={back_link:undefined}
    }

    // Function for fetching the meme via api.cybercube21.de
    async fetch_meme(url){
        var response = await fetch(url);
        var meme_json = await response.json();
        return meme_json;
     }

    // Function for share button / creating share link
    async load_meme(share_link) {

        // Checking if a meme is loaded
        if (share_link !== undefined){

            // Set reload link
            this.setState({back_link:"https://api.cybercube21.de/memes/" + share_link})
        } 

        // Fetch meme & split the URL 
        var meme_json = await this.fetch_meme('https://api.cybercube21.de/memes'); 
        var meme_fileExt = meme_json.url.split('.').pop();
        var meme_fileName = meme_json.url.split('/').pop();

        // Set States 
        this.setState({ext:meme_fileExt,url:meme_json.url,share_link:meme_fileName});
    }

    // Function for reload button 
    async reload_meme(back_link){

        // Get fileExt & Set states for reloading last meme
        var meme_fileExt = back_link.split('.').pop();
        var back_filename = back_link.split('/').pop();
        this.setState({ext:meme_fileExt,url:back_link,share_link:back_filename,back_link:undefined});
    }

    render() {

        // Set Vars
        const state = this.state;
        var element = <div></div>;
        var share_button =  <div></div>;
        var back_button = <div></div>;

        // Check what FileExt the file has
        if(state.ext === "webp") {

            // Set element for Images
            element = <img alt="" className="container__pop-up-img" src={state.url} id="hiddenimage"/>
        } 
        
        else if (state.ext === "webm") {

            // Set element for videos
            element = <video alt="" className="container__pop-up-img" src={state.url} id="hiddenimage" controls playsInline />
        }

        // Check if meme is loaded to show share button
        if (this.state.share_link !== undefined) {

            // Set share button 
            share_button = <button className='load_button' id="share_button" onClick={() => {navigator.clipboard.writeText("https://api.cybercube21.de/share/" + this.state.share_link)}}><p className='panel_text'>Share this meme!</p><p>(copy link to clipboard)</p></button>
        }

        // Check if last meme even exists to show back button
        if (this.state.back_link !== undefined) {

            // Set back button
            back_button = <button className='load_button' id="back_button" onClick={this.reload_meme.bind(this, state.back_link)}><p className='panel_text'>Reload the last meme!</p></button>
        }

        return (
            <div>
                <div>
                    <p className='headline'>Welcome to Cubie's meme collection!</p> 
                    <button className='load_button' id='modal_button' onClick={this.load_meme.bind(this, state.share_link)}><p className='panel_text'>Give me a meme!</p></button>
                    {share_button}
                    {back_button}
                </div>
                <div className="container__pop-up" id="hiddencontainer">
                    {element}
                </div>
            </div>
        )

    }

}

export default MemeContainer;