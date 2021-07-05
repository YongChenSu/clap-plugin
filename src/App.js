import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as ClapSvg } from './svg/clapSvg.svg';
import { PolygonPieces } from './components/PolygonPieces';

function App() {
  let timer;
  const [clapNum, setClapNum] = useState(0);
  const [rotateDeg, setRotateDeg] = useState(0);
  const [mouseStillDown, setMouseStillDown] = useState(false);

  const handleClap = () => {
    console.log('down');

    timer = setTimeout(() => {
      setClapNum(clapNum + 1);
      setRotateDeg(rotateDeg + 36);
    }, 100);
  };

  const handleStopClap = () => {
    console.log('up');
    clearTimeout(timer);
  };

  return (
    <div>
      <ClapContainer>
        <ClapIconContainer>
          <ClapNumBall>{clapNum}</ClapNumBall>
          <PolygonAssembly rotateDeg={rotateDeg}>
            <PolygonPieces />
            <PolygonPieces />
            <PolygonPieces />
            <PolygonPieces />
            <PolygonPieces />
          </PolygonAssembly>
          <ClapIcon onMouseDown={handleClap} onMouseUp={handleStopClap} />
        </ClapIconContainer>
        <ClapNum>{clapNum}</ClapNum>
      </ClapContainer>
    </div>
  );
}

export default App;

const ClapContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 20px 20px 15px 20px;
  height: 75px;
  width: 100px;
  margin: 100px auto;
`;

const ClapIconContainer = styled.div`
  position: relative;
`;

const ClapIcon = styled(ClapSvg)`
  fill: black;
  cursor: pointer;
  position: absolute;
  bottom: 0px;
  left: 0px;

  :hover {
    fill: #666;
  }
`;

const ClapNum = styled.div`
  user-select: none;
  -moz-user-select: none;
  margin-left: 24px;
`;

const PolygonAssembly = styled.div`
  position: relative;
  height: 24px;
  width: 24px;
  transform: ${({ rotateDeg }) => (rotateDeg ? `rotate(${rotateDeg}deg)` : '')};

  & > div:nth-child(1) {
    transform: rotate(72deg);
    bottom: -4px;
    left: -16px;
  }
  & > div:nth-child(2) {
    transform: rotate(144deg);
    bottom: 18px;
    left: -11px;
  }
  & > div:nth-child(3) {
    transform: rotate(216deg);
    bottom: 21px;
    left: 14px;
  }
  & > div:nth-child(4) {
    transform: rotate(288deg);
    bottom: 0px;
    left: 24px;
  }
  & > div:nth-child(5) {
    transform: rotate(360deg);
    bottom: -17px;
    left: 4px;
  }
`;

const ClapNumBall = styled.div`
  position: absolute;
  width: 35px;
  height: 35px;
  background-color: #292929;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -45px;
  left: -3px;
`;
