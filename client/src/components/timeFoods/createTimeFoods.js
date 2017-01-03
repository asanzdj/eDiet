import React, { Component, PropTypes } from 'react';
import {drawPageTimeFood} from '../../util';

let createTimeFood;
let timeFoodId;

export default class CreateTimeFood extends Component {
  constructor(props){
      super(props);
      this.state = {desplegate: false};
  }

  render(){
    const handleCreateTimeFoods = (e) => {
      e.preventDefault();
      const timeFood = createTimeFood.value;
      const name = timeFoodId.value;
      this.props.doCreateTimeFood({name, timeFood});
      return false;
    };

    const handleDesplegate = (e) => {
      e.preventDefault();
      this.setState({desplegate: !this.state.desplegate});
    };

    return (
    <span>
    { this.state.desplegate ?
      <div className="panel panel-default">
        <div className="panel-heading">
          <a onClick={handleDesplegate} href="#" className=" glyphicon glyphicon-plus" role="button"/>
          Create Menu
        </div>
      </div> :
      <div className="panel panel-default">
        <div className="panel-heading">
          <a onClick={handleDesplegate} href="#" className=" glyphicon glyphicon-minus" role="button"/>
          Create Time Food
        </div>
        <div className="panel-body">
        <div className="col-sm-10">
          { this.props.createTimeFood ? drawPageTimeFood(this.props.createTimeFood) : null}
          <br/>

        </div>
        </div>
        <div className="panel-footer">
          <form className="form-horizontal">
            <input className="input-group-addon"
              type="text"
              className="form-control"
              id="timeFoodId"
              placeholder="Enter your Menu name"
              ref={(i) => { timeFoodId = i; }}
            />
            <br/>
            <div className="input-group">
              <input className="input-group-addon"
                type="text"
                className="form-control"
                id="createTimeFood"
                placeholder="Enter your new timeFood name"
                ref={(i) => { createTimeFood = i; }}
              />
              <span className="input-group-btn" >
                <button type="submit" className="btn btn-default" onClick={handleCreateTimeFoods}>New timeFood</button>
              </span>
            </div>
          </form>
        </div>
      </div>}
    </span>
    );
  }

}
