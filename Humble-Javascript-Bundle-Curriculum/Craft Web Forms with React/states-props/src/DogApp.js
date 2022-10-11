import React from 'react';


class DogApp extends React.Component {

    state = {
        nameOfNewDog: '',
        dogs: []
    }

    handleChange(e) {
        this.setState({
            nameOfNewDog: e.target.value
        });
    }

    handleAddDogClick() {
        if (!this.state.nameOfNewDog.length) {
            return;
        }

        this.setState({
            nameOfNewDog: '',
            dogs: [...this.state.dogs, this.state.nameOfNewDog]
        });
    }

    render() {
        return (
            <div>
                <h1>My Dogs</h1>
                <input type="text" value={this.state.nameOfNewDog} placeholder="Enter a dog name" onChange={this.handleChange.bind(this)} name="nameOfNewDog"/>
                <ul>
                    {this.state.dogs.map((dogs, i) => (
                        <Dog key={`${dogs}_${i}`} name={dogs}/>
                        // <li key={`${dogs}_${i}`}>
                        //     <b>{dogs}</b>
                        // </li>
                    ))}
                </ul>
                <button onClick={this.handleAddDogClick.bind(this)}>
                    Add a dog
                </button>
            </div>
        );
    }

}

class Dog extends React.Component {
    render() {
        return (
            <li>
                <b>{this.props.name}</b>
            </li>
        );
    }
}

export default DogApp;