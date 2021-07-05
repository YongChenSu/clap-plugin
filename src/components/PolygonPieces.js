import styled from 'styled-components';
import { ReactComponent as TriangleSvg } from '../svg/triangleSvg.svg';

export const PolygonPieces = () => {
  return (
    <PolygonPiecesContainer>
      <Box>
        <PinkTriangle500 />
        <PinkTriangle600 />
        <CircleGreen500 />
        <CircleGreen600 />
      </Box>
    </PolygonPiecesContainer>
  );
};

const PolygonPiecesContainer = styled.div`
  position: absolute;
`;

const Box = styled.div`
  position: relative;
  height: 15px;
  width: 15px;
`;

const PinkTriangle500 = styled(TriangleSvg)`
  position: absolute;
  fill: #f2c9cb;
  bottom: 0px;
  left: 7.5px;
  transform: translateX(-50%);
`;

const PinkTriangle600 = styled(TriangleSvg)`
  fill: #f2a9af;
  position: absolute;
  top: 3px;
  left: 2px;
  transform: scale(0.8) rotate(15deg);
`;

const CircleGreen500 = styled.div`
  position: absolute;
  top: 7.5px;
  left: 9.5px;
  width: 1.8px;
  height: 1.8px;
  border-radius: 50%;
  background-color: #afd3d7;
`;

const CircleGreen600 = styled.div`
  position: absolute;
  top: 4px;
  left: 6px;
  border-radius: 50%;
  width: 1.3px;
  height: 1.3px;
  background-color: #82b5b6;
`;
