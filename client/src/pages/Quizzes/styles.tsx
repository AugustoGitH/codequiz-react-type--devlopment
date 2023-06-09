import styled from "styled-components";
import animationsPresence from "../../animations/presence";

const Container = styled.div`
  .line-horizontal{
    width: 100%;
    height: 1.5px;
    background-color: #0000002e;
  }
`;

const FilterQuiz = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  .checkboxes-selected {
    width: 100%;
    p {
      display: inline-flex;
      padding: .2rem 1rem;
      border: 1.3px solid #00000020;
      border-radius: .3rem;
      font-size: var(--font-size-small);
      margin-bottom: 1rem;
      font-family: var(--font-Consolas);
      background: var(--color-gray-light);
      text-transform: uppercase;
    }
  }
`;

const ListQuizzes = styled.ul`
  padding: calc(2rem + 3rem) 0;
  width: 100%;
  .message-not-quizzes {
    width: 100%;
    text-align: center;
    p {
      display: inline;
      background: var(--color-gray-light);
      padding: 0.7rem 2rem;
      text-transform: uppercase;
      border-radius: 0.4rem;
      border: 1.3px solid #0000004f;
      ${animationsPresence.scale};
    }
  }
  ul {
    width: 100%;
    display: grid;
    gap: 3.1rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 0.5fr));
    @media (max-width: 760px) {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    } 
  }
`;


export const CardQuiz = styled.li`
    height: 320px;
      cursor: pointer;
      .cover {
        height: 55%;
        background: #f0f0f0;
        border-radius: 0.4rem;
        border: 1.5px solid #282a363b;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        .image-creator{
          position: absolute;
          width: 40px;
          top: 0;
          left: 0;
        }
        .icon-tech {
          font-size: 4rem;
          color: #282a36;
          ${animationsPresence.scale};
        }
        .button-play-quiz {
          all: unset;
          display: flex;
          flex-direction: column;
          align-items: center;
          ${animationsPresence.scale};
          transition: 0.2s;
          &:hover {
            transform: scale(0.8);
          }
          i {
            font-size: 4rem;
            color: #282a36;
          }
          span {
            display: inline-block;
            margin-top: 0.4rem;
            background: #282a36;
            color: #fff;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
          }
        }
      }
      .description {
        height: 50%;
        padding-top: 0.5rem;
        position: relative;
        .quiz-tags {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          li {
            background: #212329;
            color: #fff;
            padding: 0.3rem 1rem;
            text-transform: uppercase;
            border-radius: 0.3rem;
            font-size: var(--font-size-super-small);
            letter-spacing: 0.1rem;
            &:nth-child(2){
              background-color: var(--color-info);
            }
          }
        }
        .display-time,
        .display-data {
          display: block;
          font-family: var(--font-Consolas);
          font-size: var(--font-size-small);
        }
        .profile-creator{
          display: flex;
          align-items: center;
          justify-content: flex-start;
          position: absolute;
          width: 100%;
          bottom: 0;
          img{
            width: 30px;
            height:30px;
            object-fit: cover;
            background-color: var(--color-gray-light);
            border: 1.2px solid #00000027;
            border-radius: 50%;
          }
          span{
            font-size: .8rem;
            color: #000000c5;
            margin-left: 1rem;
            text-transform: uppercase;
          }
        }
      }
    
  
`

export { Container, FilterQuiz, ListQuizzes };
