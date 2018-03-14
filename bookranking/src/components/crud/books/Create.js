import React, { Component } from 'react';
class Create extends Component {

    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        event.preventDefault();
        this.props.onAdd(this.indexInput.value, this.seriesInput.value, this.titleInput.value);

        this.indexInput.value = '';
        this.seriesInput.value = '';
        this.titleInput.value = '';
        this.indexInput.focus();
    }

    render() {

        return (
            <form onSubmit = {this.onSubmit}>
                <input placeholder="Index" ref={indexInput => this.indexInput = indexInput}/>
                <input placeholder="Series" ref={seriesInput => this.seriesInput = seriesInput}/>
                <input placeholder="Title" ref={titleInput => this.titleInput = titleInput}/>
                <button onClick={this.onSubmit} className="btn-action">Register</button>
            </form>
        );
    }
}

export default Create;
