import { Component } from 'react';
import styles from './Loader.module.css';

interface IProps {}
interface IState {}

class Loader extends Component<IProps, IState> {
  render() {
    return <div className={styles.loader}></div>;
  }
}

export default Loader;
