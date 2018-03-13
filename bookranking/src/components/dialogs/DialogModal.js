import React from 'react';
import PropTypes from 'prop-types';
import '../../css/DialogModal.css';

class DialogModal extends React.Component {
    render() {

        //Return's nothing if it's show property is false.
        if (!this.props.show) {
            return null;
        }

        //Return message of sucess or error.
        return (
            <div>
                {this.props.messageSucess ? (
                    <div className="Modal">
                        <div className="Modal-Body sucess-message">
                        <br/>
                            Thanks vor voting on <b>{this.props.bestBook}</b>!
                        </div>
                    </div>
                ) : (
                        <div className="Modal">
                            <div className="Modal-Body error-message">
                                <br />
                                Please, enter the book you want to vote for.
                            </div>
                        </div>
                    )}
            </div>
        );
    }
}

DialogModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    messageSucess: PropTypes.bool,
    bestBook: PropTypes.any
};

export default DialogModal;