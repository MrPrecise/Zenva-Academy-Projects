import React from "react";

class DogApp  extends React.Component {
    state = {
        newDog: '',
        dogs: []
    }
    handleChange(e) {
        this.setState({
            newDog: e.target.value
        });
    }

    handleAddDogClick() {
        if (!this.state.newDog) {
            return;
        }
        this.setState({
            newDog: '',
            dogs: [...this.state.dogs, this.state.newDog]
        });
    }

    render() {
        return (
            <div>
                <h1>My Dogs</h1>
                <input 
                type="text"
                placeholder="Enter Dog Name"
                onChange={this.handleChange.bind(this)} 
                name="newDog"
                value={this.state.newDog} />
                <ul> 
                    {this.state.dogs.map((dogs, i) => (
                       <Dog key={`${dogs}_${i}`} name={dogs}/> 
                        // Old code before making Dog into an own class
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
            </li>)
    }
}

export default DogApp;