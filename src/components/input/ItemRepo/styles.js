import styled from "styled-components";

export const ItemRepoContainer = styled.div`
  width: 80%;
  border: 1px solid #fff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #2c3038;

  h3 {
    font-size: 20px;
    color: #FAFAFA;
    margin-bottom: 4px;
  }

  p {
    font-size: 14px;
    color: #FAFAFA60;
    margin-bottom: 12px;
  }

  a.github-btn {
    display: inline-block;
    text-decoration: none;
    background-color: #1ea7fd;
    color: #fff;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 12px;
    margin-right: 10px;
    transition: all 0.3s ease;

    &:hover {
      background-color: #0d6efd;
      transform: translateY(-2px);
      box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
    }

    &:active {
      transform: translateY(0);
      box-shadow: none;
    }
  }

  button.remove-btn {
    margin-top: 12px;
    padding: 8px 16px;
    border-radius: 12px;
    border: none;
    background: linear-gradient(90deg, #fa5757, #ff3030);
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
    }

    &:active {
      transform: translateY(0);
      box-shadow: none;
    }
  }
`;
