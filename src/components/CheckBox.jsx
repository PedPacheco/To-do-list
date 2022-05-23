import styles from "../styles/CheckBox.module.css"

export default function CheckBox(props) {
    function ChangeStateTask(id) {
        const listTask = props.listTask;
        const taskChecked = listTask.map((task, index) => {
            if(id === index) {
                return {
                    title: task.title,
                    concluded: !task.concluded,
                }
            };
            return task
        });
        props.newListTask(taskChecked)
    };

    return (
        <input className={styles.checkBox} onClick={() => ChangeStateTask(props.id)} type="checkbox"/>
    )
}