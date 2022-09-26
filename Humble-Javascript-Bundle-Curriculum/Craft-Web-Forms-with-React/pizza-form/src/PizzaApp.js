import React from 'react';

class PizzaApp extends React.Component {
    render() {
        return (
            <>
            <h1>Order Your Pizza</h1>
            <form>
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
            </form>
            </>
        );
    }
}