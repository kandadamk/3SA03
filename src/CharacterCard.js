import React from 'react';
import './App.css';
class CharacterCard extends React.Component {

    state = {
        active: false
    }

    activate = () => {
        this.setState({
            active: true
        });
        if (this.props.number > 2) {
            this.setState({
                active: true
            });
        }
        else if (this.state.active === false)
            this.props.click(this.props.value);
    }
    componentDidUpdate = (prevProps) => {
        if (prevProps.number !==this.props.number || prevProps.check !== this.props.check) {
            this.setState({active: false})
            console.log('...');
        }
    }

    render() {
        let activeClass = this.state.active ? 'activeCard' : '';
        let className = `card ${activeClass}`
        return (
            <div className={className} onClick={this.activate}>
                <h2>{this.props.value}</h2>
            </div>
        )
    }
}
export default CharacterCard;