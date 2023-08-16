import styled from 'styled-components';

export const List = styled.ul`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin: auto;
  font-weight: 500;
  font-style: oblique;

  li {
    display: flex;
    color: midnightblue;

    span:first-child {
      font-size: 18px;
      font-weight: 700;
      font-style: normal;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;
      margin-right: auto;
      color: black;
    }

    button {
      font-size: 13px;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;
      margin-left: 40px;
      padding: 2px 8px;
      color: white;
      background-color: black;
      border-radius: 13px;
    }
  }
`;
