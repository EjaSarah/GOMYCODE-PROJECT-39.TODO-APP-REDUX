import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { RootState } from '../redux/store';
import { setFilter } from '../redux/taskSlice';

const ListTask: React.FC = () => {
  const { tasks, filter } = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone;
    if (filter === 'notDone') return !task.isDone;
    return true;
  });

  return (
    <div>
      <button onClick={() => dispatch(setFilter('all'))}>All</button>
      <button onClick={() => dispatch(setFilter('done'))}>Done</button>
      <button onClick={() => dispatch(setFilter('notDone'))}>Not Done</button>
      
      {filteredTasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

export default ListTask;
