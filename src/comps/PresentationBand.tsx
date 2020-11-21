import * as React from "react";
import styled from "styled-components";

const PresentationBandBox = styled.div`
  position: fixed;
  right: calc(-6em * 0.81 + (1em + 0.5em * 2));
  bottom: calc(6em * 0.71 - (1em + 0.5em * 2));
  box-sizing: border-box;
  width: 12em;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 2.5em;
  font-weight: 900;
`;

const PresentationBandRoot = styled.div`
  box-sizing: border-box;
  padding: 0.5em 0;
  line-height: 1em;
  color: #fff;
  text-align: center;
  background: #4f4f69;
  transform: rotate(-45deg);
`;

export function PresentationBand(props: { bandText: string }): React.ReactElement {
  return (
    <PresentationBandBox>
      <PresentationBandRoot>{props.bandText}</PresentationBandRoot>
    </PresentationBandBox>
  );
}
