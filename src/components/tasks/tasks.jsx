import React from "react";
// import Task from "../task/task.jsx";
import PropTypes from "prop-types";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

class Tasks extends React.PureComponent {
  constructor(props) {
    super(props);

    this._onDragEnd = this._onDragEnd.bind(this);
    this._renderTasks = this._renderTasks.bind(this);
  }

  _onDragEnd(result) {
    const {
      tasks,
      onDropUpdate
    } = this.props;

    const {destination, source, reason} = result;
    if (!destination || reason === `CANCEL`) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const updatedTasks = Object.assign([], tasks);
    const droppedUser = tasks[source.index];

    updatedTasks.splice(source.index, 1);
    updatedTasks.splice(destination.index, 0, droppedUser);
    onDropUpdate(updatedTasks);
  }

  _renderTasks(task, index) {
    const {
      onTaskClick,
      onDeleteButtonClick
    } = this.props;

    return (
      <Draggable key={task + index} draggableId={index + ``} index={index}>
        {(provided) => (
          <li
            className={`tasks__item ${task.isActive ? `` : `tasks__item--done`}`}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
            <button className="tasks__check" onClick={() => onTaskClick(task, index)}>
              {!task.isActive
                ? <img src="img/checkbox-checked.svg" alt="checked"/>
                : <img src="img/checkbox-unchecked.svg" alt="unchecked"/>}
            </button>
            <span className="tasks__title" >
              {task.task}
            </span>
            <button
              className="tasks__delete"
              onClick={() => onDeleteButtonClick(index)}
            >
              <img src="img/icons8-delete.svg" alt="delete" />
            </button>
          </li>
        )}
      </Draggable>
    );
  }

  render() {
    const {
      tasks
    } = this.props;

    return (
      <DragDropContext onDragEnd={this._onDragEnd}>
        <Droppable droppableId="dp1">
          {(provided) => (<ul className="tasks" ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map(this._renderTasks)}
            {provided.placeholder}
          </ul>)}

        </Droppable>
      </DragDropContext>
    );
  }
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
      PropTypes.shape({
        tasks: PropTypes.string,
        isActive: PropTypes.bool
      })
  ).isRequired,
  onTaskClick: PropTypes.func.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
  onDropUpdate: PropTypes.func.isRequired
};

export default Tasks;
