import styles from './BaseTemplate.module.css';

export interface IBaseTemplate {
  sampleTextProp: string;
  children?: React.ReactNode;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default BaseTemplate;
