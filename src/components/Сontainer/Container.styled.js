import styled from 'styled-components';

export const Container = styled.div`
  padding-left: ${({ basicStyles }) => basicStyles.spacing(2)};
  padding-right: ${({ basicStyles }) => basicStyles.spacing(2)};
  padding-top: ${({ basicStyles }) => basicStyles.spacing(10)};
  padding-bottom: ${({ basicStyles }) => basicStyles.spacing(10)};
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
