import React, {Component} from 'react';

let tableId;

export default class DeleteExerciseTable extends Component {
  render () {
    const handleDeleteExerciseTable = (e) => {
      e.preventDefault();
      const id = tableId.value;
      this.props.deleteExerciseTable({id})
      return false;
    };

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          Borrar tabla de ejercicios
        </div>
        <div className="panel-body">
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="tableId"
              placeholder="ID de la tabla..."
              ref={(i) => { tableId = i; }}
            />
          </div>
        </div>
        <div className="panel-footer">
          <form className="form-horizontal">
            <button type="submit" className="btn btn-default" onClick={handleDeleteExerciseTable}>
              Borrar tabla
            </button>
          </form>
        </div>
      </div>
    );
  }
}
