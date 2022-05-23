import { useState } from "react";
import styles from "./styles/LetsDolt.module.css";

import Header from "./components/Header";
import CardsComponent from "./components/cardsComponent";
import RemoveTaskButton from "./components/RemoveTaskButton";
import CheckBox from "./components/CheckBox";

function App() {
  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState([]);

  function setNewTask({ target }) {
    setTask(target.value);
  }

  function addNewTask(event) {
    event.preventDefault();

    if (task && task.length > 2) {
      setListTask([
        ...listTask,
        {
          title: task,
          concluded: false,
        },
      ]);

      setTask("");
    }
  }

  return (
    <>
      <Header />

      <CardsComponent />

      <section className={styles.works}>
        <h2>Minhas Tarefas</h2>

        <form className={styles.form}>
          <input type="text" onChange={setNewTask} />
          <button type="submit" onClick={addNewTask}>
            Adicionar
          </button>
        </form>

        <ul className={styles.myWorks}>
          {listTask.length > 0 &&
            listTask.map((task, id) => (
              <li key={id}>
                <CheckBox
                  // checked={task.concluded}
                  listTask={listTask}
                  id={id}
                  newListTask={setListTask}
                />
                <span id={task.concluded ? "taskConcluded" : ""}>
                  {task.title}
                </span>
                <RemoveTaskButton
                  listTask={listTask}
                  id={id}
                  newListTask={setListTask}
                />
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}

export default App;
