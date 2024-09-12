// import "./comp1.scss" //全局引用
import { Button as AButton } from "antd";
import styles from "./comp1.model.scss?inline";
const Comp = () => {
  return (
    <div className={styles.box}>
      <a-button type="primary">Primary Button</a-button>
      <h1 >Hello, World!</h1>
    </div>
  );
}
export default Comp
