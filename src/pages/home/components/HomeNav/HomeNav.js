import Link from 'umi/link';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  padding: 0 15px;
  height: 40px;
  background: #cccccc;
`;

export default () => (
  <Wrapper data-testid="home-nav">
    <Link data-testid="home-login-button" to="/body">
      入门
    </Link>
  </Wrapper>
);
