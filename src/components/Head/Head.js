import styled from 'styled-components';
import styles from './Head.css';

export default () => (
  <div className={styles.normal}>
    <Title data-testid="head-title">head</Title>
  </div>
);

const Title = styled.h1`
  color: #ffffff;
`;
