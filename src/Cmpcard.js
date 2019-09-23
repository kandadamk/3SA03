import React from 'react';
import './Cmpcard.css';
class Cmpcard extends React.Component{
    render(){
        let count_end = this.props.check_count > 2 ? 'test2' : '';
        let count_ends = this.props.check_count > 2 ? "Try again" : "Time : " + this.props.check_count;
        let test = `test ${count_end}`
        return(
            <div>
                <div className={test}>
                    <h2 className={test}>{this.count_end}{count_ends}</h2>
                </div>
            </div>
        )
    }
}
export default Cmpcard;