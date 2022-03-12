import React from 'react';

class Popup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalState: true
        };

        this.handleShow = this.handleShow.bind(this);
    }

    handleShow() {
        this.setState({ modalState: !this.state.modalState });
    }

    render() {
        return (
            <div>
                <div className={"modal fade" + (this.state.modalState ? " show d-block" : " d-none")} tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Disclaimer</h5>
                            </div>
                            <div className="modal-body">
                                <p> This website is for entertainment purposes ONLY! </p>
                                <p> These memes do not necessarily reflect my opinion/attitude towards various topics or groups of people.</p>
                                <p> It is your right to find the memes offensive, distasteful, or just bad.</p>
                                <p> If you feel offended, pls remember that i probably dont care :)</p></div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={this.handleShow}>I understand</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;