import * as React from "react";
import styled from "styled-components";

const PresentationBandBox = styled.div`
  position: fixed;
  bottom: calc(6em * 0.71 - (1em + 0.5em * 2));
  right: calc(-6em * 0.81 + (1em + 0.5em * 2));
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 900;
  font-size: 2.5em;
  width: 12em;
  box-sizing: border-box;
`;

const PresentationBandRoot = styled.div`
  background: #4f4f69;
  color: #fff;
  line-height: 1em;
  box-sizing: border-box;
  text-align: center;
  transform: rotate(-45deg);
  padding: 0.5em 0;
`;

export function PresentationBand(props: { bandText: string }) {
  return (
    <PresentationBandBox>
      <PresentationBandRoot>{props.bandText}</PresentationBandRoot>
    </PresentationBandBox>
  );
}
