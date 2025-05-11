import './tabs.scss';

function Tabs({ selectedTab, setSelectedTab, tabs, todos }) {
  const openTodos = todos.filter((todo) => {
    return todo.isDone === false;
  });
  const completedTodos = todos.filter((todo) => {
    return todo.isDone === true;
  });
  return (
    <nav className="tabs">
      {tabs.map((tab, index) => {
        let count;
        if (index == 0) {
          count = todos.length;
        } else if (index == 1) {
          count = openTodos.length;
        } else if (index == 2) {
          count = completedTodos.length;
        }
        return (
          <button
            key={index}
            className={tab == selectedTab ? 'active' : ''}
            onClick={() => {
              setSelectedTab(tab);
            }}
          >
            {tab}
            <span> ({count})</span>
          </button>
        );
      })}
      <hr />
    </nav>
  );
}

export default Tabs;
