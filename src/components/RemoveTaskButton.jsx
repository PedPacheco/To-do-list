import styles from "../styles/RemoveTaskButton.module.css"

export default function RemoveTaskButton(props) {
    function removeTask(id) {
        const newListTask = props.listTask.filter((_, index) => index !== id)
        
        console.log(newListTask)
        props.newListTask(newListTask)
    }

    return (
        <button className={styles.removeTask} onClick={() => removeTask(props.id)}>Remover</button>
    )
}