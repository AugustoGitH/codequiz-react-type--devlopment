import styled from "styled-components";

export const Loader = styled.div`
  --square: 26px;
  --offset: 30px;
  --duration: 2.4s;
  --delay: 0.2s;
  --timing-function: ease-in-out;
  --in-duration: 0.4s;
  --in-delay: 0.1s;
  --in-timing-function: ease-out;
  width: calc(3 * var(--offset) + var(--square));
  height: calc(2 * var(--offset) + var(--square));
  padding: 0px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 30px;
  position: relative;
  transform: scale(.7);

  div {
    display: inline-block;
    background: var(--color-dark);
    /*background: var(--text-color);*/
    /*box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);*/
    border: none;
    border-radius: 2px;
    width: var(--square);
    height: var(--square);
    position: absolute;
    padding: 0px;
    margin: 0px;
    font-size: 6pt;
    color: black;
  }

  #square1 {
    left: calc(0 * var(--offset));
    top: calc(0 * var(--offset));
    animation: square1 var(--duration) var(--delay) var(--timing-function)
        infinite,
      squarefadein var(--in-duration) calc(1 * var(--in-delay))
        var(--in-timing-function) both;
  }

  #square2 {
    left: calc(0 * var(--offset));
    top: calc(1 * var(--offset));
    animation: square2 var(--duration) var(--delay) var(--timing-function)
        infinite,
      squarefadein var(--in-duration) calc(1 * var(--in-delay))
        var(--in-timing-function) both;
  }

  #square3 {
    left: calc(1 * var(--offset));
    top: calc(1 * var(--offset));
    animation: square3 var(--duration) var(--delay) var(--timing-function)
        infinite,
      squarefadein var(--in-duration) calc(2 * var(--in-delay))
        var(--in-timing-function) both;
  }

  #square4 {
    left: calc(2 * var(--offset));
    top: calc(1 * var(--offset));
    animation: square4 var(--duration) var(--delay) var(--timing-function)
        infinite,
      squarefadein var(--in-duration) calc(3 * var(--in-delay))
        var(--in-timing-function) both;
  }

  #square5 {
    left: calc(3 * var(--offset));
    top: calc(1 * var(--offset));
    animation: square5 var(--duration) var(--delay) var(--timing-function)
        infinite,
      squarefadein var(--in-duration) calc(4 * var(--in-delay))
        var(--in-timing-function) both;
  }

  @keyframes square1 {
    0% {
      left: calc(0 * var(--offset));
      top: calc(0 * var(--offset));
    }

    8.333% {
      left: calc(0 * var(--offset));
      top: calc(1 * var(--offset));
    }

    100% {
      left: calc(0 * var(--offset));
      top: calc(1 * var(--offset));
    }
  }

  @keyframes square2 {
    0% {
      left: calc(0 * var(--offset));
      top: calc(1 * var(--offset));
    }

    8.333% {
      left: calc(0 * var(--offset));
      top: calc(2 * var(--offset));
    }

    16.67% {
      left: calc(1 * var(--offset));
      top: calc(2 * var(--offset));
    }

    25.00% {
      left: calc(1 * var(--offset));
      top: calc(1 * var(--offset));
    }

    83.33% {
      left: calc(1 * var(--offset));
      top: calc(1 * var(--offset));
    }

    91.67% {
      left: calc(1 * var(--offset));
      top: calc(0 * var(--offset));
    }

    100% {
      left: calc(0 * var(--offset));
      top: calc(0 * var(--offset));
    }
  }

  @keyframes square3 {
    0%,
    100% {
      left: calc(1 * var(--offset));
      top: calc(1 * var(--offset));
    }

    16.67% {
      left: calc(1 * var(--offset));
      top: calc(1 * var(--offset));
    }

    25.00% {
      left: calc(1 * var(--offset));
      top: calc(0 * var(--offset));
    }

    33.33% {
      left: calc(2 * var(--offset));
      top: calc(0 * var(--offset));
    }

    41.67% {
      left: calc(2 * var(--offset));
      top: calc(1 * var(--offset));
    }

    66.67% {
      left: calc(2 * var(--offset));
      top: calc(1 * var(--offset));
    }

    75.00% {
      left: calc(2 * var(--offset));
      top: calc(2 * var(--offset));
    }

    83.33% {
      left: calc(1 * var(--offset));
      top: calc(2 * var(--offset));
    }

    91.67% {
      left: calc(1 * var(--offset));
      top: calc(1 * var(--offset));
    }
  }

  @keyframes square4 {
    0% {
      left: calc(2 * var(--offset));
      top: calc(1 * var(--offset));
    }

    33.33% {
      left: calc(2 * var(--offset));
      top: calc(1 * var(--offset));
    }

    41.67% {
      left: calc(2 * var(--offset));
      top: calc(2 * var(--offset));
    }

    50.00% {
      left: calc(3 * var(--offset));
      top: calc(2 * var(--offset));
    }

    58.33% {
      left: calc(3 * var(--offset));
      top: calc(1 * var(--offset));
    }

    100% {
      left: calc(3 * var(--offset));
      top: calc(1 * var(--offset));
    }
  }

  @keyframes square5 {
    0% {
      left: calc(3 * var(--offset));
      top: calc(1 * var(--offset));
    }

    50.00% {
      left: calc(3 * var(--offset));
      top: calc(1 * var(--offset));
    }

    58.33% {
      left: calc(3 * var(--offset));
      top: calc(0 * var(--offset));
    }

    66.67% {
      left: calc(2 * var(--offset));
      top: calc(0 * var(--offset));
    }

    75.00% {
      left: calc(2 * var(--offset));
      top: calc(1 * var(--offset));
    }

    100% {
      left: calc(2 * var(--offset));
      top: calc(1 * var(--offset));
    }
  }

  @keyframes squarefadein {
    0% {
      transform: scale(0.75);
      opacity: 0;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
