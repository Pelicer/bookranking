import React, { Component } from 'react';
import NavHeader from '../../components/layout/NavHeader';
import NavFooter from '../../components/layout/NavFooter';
import SideNavBar from '../../components/layout/SideNavBar';
import DialogModal from '../../components/dialogs/DialogModal';
import '../../css/Home.css';

class Books extends Component {


    //Just like JavaScript functions, and they are accepted by components as parameters.
    constructor(props) {
        super(props);

        this.state = {
            messageSucess: false,
            openDialog: false
        };
    }

    //Closes or opens modal
    modalOpened = () => {
        this.setState({
            openDialog: !this.state.openDialog
        });
        this.input.focus();
    }

    render() {

        return (

            //Código do crud
            <div className="Books">

                <h1>TESTE</h1>

                {/* <NavHeader />
                <SideNavBar />


                <DialogModal
                    show={this.state.openDialog}
                    onClose={this.modalOpened}
                    messageSucess={this.state.messageSucess}
                    bestBook={this.state.bestBook}
                />

                <NavFooter /> */}

               
            </div>
        );
    }
}

export default Books;
