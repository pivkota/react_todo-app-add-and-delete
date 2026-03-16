import { Todo } from '../types/Todo';
import classNames from 'classnames';

type Props = {
  todo: Todo;
  isProcessed: boolean;
  onDelete: () => void;
  dataCy?: string;
};

export const TodoItem: React.FC<Props> = ({
  todo,
  isProcessed,
  onDelete,
  dataCy,
}) => {
  return (
    <div
      data-cy={dataCy ?? 'Todo'}
      className={classNames('todo', { completed: todo.completed })}
    >
      <label className="todo__status-label" aria-label="Toggle todo status">
        <input
          type="checkbox"
          className="todo__status"
          checked={todo.completed}
          readOnly
        />
      </label>

      <span className="todo__title">{todo.title}</span>

      {todo.id !== 0 && (
        <button
          type="button"
          className="todo__remove"
          data-cy="TodoDelete"
          onClick={onDelete}
        >
          ×
        </button>
      )}

      {isProcessed && (
        <div className="modal overlay is-active" data-cy="TodoLoader">
          <div className="modal-background has-background-white-ter" />
          <div className="loader" />
        </div>
      )}
    </div>
  );
};
