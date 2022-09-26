import React from 'react';
import './index.css';
class PizzaApp extends React.Component {
    state = {
        size: 'medium',
        glutenFree: false,
        topping: '',
        instructions: '',
        pizzaName: null,
        email: null,
        password: null,
        errors: {
            pizzaName: '',
            email: '',
            password: '',
        }
    };
    setSize = event => {
        this.setState({
            size: event.target.value
        });
    };
    setGlutenFree = event => {
        this.setState({
            glutenFree: event.target.checked
        });
    };
    setInstructions = event => {
        this.setState({
            instructions: event.target.value
        });
    };
    setTopping = event => {
        this.setState({
            topping: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        const {
            size,
            glutenFree,
            topping,
            instructions
        } = this.state;
        alert(`Your order:
        Size: ${size}
        Gluten free ? ${glutenFree ? 'yes' : 'no'}
        Topping: ${topping || 'none'}
        Special instructions: ${instructions || 'none'}`);
    };
    render() {
        const {
            size,
            glutenFree,
            instructions,
            topping
        } = this.state;
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Order Your Pizza</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="pizzaName">
                            <label>Pizza Name</label>
                            <input type="text"
                                name="pizzaName"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="email">
                            <label>Email</label>
                            <input type="email"
                                name="email"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="password">
                            <label>Password</label>
                            <input type="password"
                                name="password"
                                onChange={this.handleChange}
                            />
                        </div>
                        <label>
                            <input
                                type="radio"
                                value="small"
                                checked={size === 'small'}
                                onChange={this.setSize}
                            />
                            Small
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="medium"
                                checked={size === 'medium'}
                                onChange={this.setSize}
                            />
                            Medium
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="large"
                                checked={size === 'large'}
                                onChange={this.setSize}
                            />
                            Large
                        </label>
                        <br />
                        <br />
                        <div className="topping">
                            <label>
                                Topping
                                <br />
                                <select onChange={this.setTopping} value={topping}>
                                    <option value="">- Pick a topping -</option>
                                    <option value="pepperoni">Pepperoni</option>
                                    <option value="peppers+onions">Peppers and onions</option>
                                    <option value="pineapple">Pineapple</option>
                                </select>
                            </label>
                        </div>
                        <br />
                        <br />
                        <label>
                            <input type="checkbox"
                                checked={glutenFree}
                                onChange={this.setGlutenFree} />
                            GlutenFree
                        </label>
                        <br />
                        <br />
                        <div className="instructions">
                            <label>
                                Special instructions:
                                <br />
                                <textarea
                                    value={instructions}
                                    onChange={this.setInstructions}
                                />
                            </label>
                        </div>
                        <br />
                        <br />
                        <button type="submit"> Send Order </button>
                    </form>
                </div>
            </div>
        );
    }
}
export default PizzaApp;