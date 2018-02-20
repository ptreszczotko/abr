// styled div will return a div that has been styled like that.
import styled from 'styled-components';

const Image = styled.img`
  width: 4%,
  float: left;
  margin-right: 10px;
`;

const Wrapper = styled.div`
  width: 32%;
  border: 1px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;


export  {Wrapper, Image}

