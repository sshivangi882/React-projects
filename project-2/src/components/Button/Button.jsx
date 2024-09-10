import styles from './Button.module.css'

const Button =(props) => {
  const {isOutline,icon, text} = props;

  return (
    <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
        
        {icon}
        {text}
        {/* {props.isOutline}  */}
    </button>
  )
}

export default Button