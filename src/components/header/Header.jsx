import './header.scss';

function Header({ todos }) {
  const amountsOfTodos = todos.length;
  const isSingular = todos.length === 1;
  return (
    <h2 className="header">
      {isSingular
        ? `You have ${amountsOfTodos} open task. `
        : `You have ${amountsOfTodos} open tasks.`}
    </h2>
  );
}

export default Header;
