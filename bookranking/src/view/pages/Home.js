import React, { Component } from 'react';
import DialogModal from '../../components/dialogs/DialogModal';
import '../../css/Home.css';

//Vector that will be then used to create the database.
const asoiaf = [
    {
        index: 1,
        series: 'A Song of Ice and Fire',
        title: 'Game of Thrones'
    },
    {
        index: 2,
        series: 'A Song of Ice and Fire',
        title: 'Clash of Kings'
    },
    {
        index: 3,
        series: 'A Song of Ice and Fire',
        title: 'Storm of Swords'
    },
    {
        index: 4,
        series: 'A Song of Ice and Fire',
        title: 'A Feast of Crows'
    },{
        index: 5,
        series: 'A Song of Ice and Fire',
        title: 'A Dance With Dragons'
    }
];

localStorage.setItem('asoiaf', JSON.stringify(asoiaf));

class Home extends Component {    

    //GETTER
    getBooks() {
        const asoiaf = JSON.parse(localStorage.getItem('asoiaf'));
        this.setState({ asoiaf });
    }

    //It runs before HTML render.
    componentWillMount(){
        this.getBooks();
    }

    //Runs after HTML render.
    componentDidMount() {
        this.input.focus();
        console.log('=====LET THE BOOKS BE RANKED=====');
        console.log('===========Version 1.0===========');
    }

    //Just like JavaScript functions, and they are accepted by components as parameters.
   constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            bestBook: 'Tell us which',
            rank: ' is the best!',
            messageSucess: false,
            openDialog: false,
            asoiaf: []
        };
    }

    //When the input is submitted...
    onSubmit(event) {
        event.preventDefault();
        if(this.input.value===''){
            console.log('========ENTRADA INVÁLIDA=========')
            this.setState({
                messageSucess: false,
                openDialog: true
            });
            this.input.focus();
        }        
        else{
            console.log('The user voted:')
            console.log(this.input.value)
            this.setState({
                bestBook: this.input.value,
                messageSucess: true,                                
                openDialog: true
            });
            this.input.value = '';
            this.input.focus();
        }
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

            //Código da home
            <div className = "Home">

                <div className = "body-wrapper">

                    <h2>{this.state.bestBook + this.state.rank}</h2>

                    <h3>
                        {
                            this.state.asoiaf.map(asoiaf => {
                                return (
                                    <div key={asoiaf.title}>{asoiaf.title}</div>
                                )
                            })
                        }
                    </h3>

                    <form onSubmit={this.onSubmit}>
                        <input placeholder='Which one?' ref={input => this.input = input} /><br />
                        <button type="submit">Tell us</button>
                    </form>

                    <DialogModal
                        show={this.state.openDialog}
                        onClose={this.modalOpened}
                        messageSucess={this.state.messageSucess}
                        bestBook={this.state.bestBook}
                    />

                </div>               

            </div>
        );
    }
}

export default Home;
