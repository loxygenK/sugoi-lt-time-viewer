import * as React from "react";
import styled from "styled-components";

const TitleBandRoot = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 1.5em;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 900;
  color: #fff;
  text-align: center;
  background: #4f4f69;
`;

const TitleText = styled.div`
  font-size: 4em;
  line-height: 1em;
`;

const SubtitleText = styled.div`
  margin-top: 0.2em;
  font-size: 2em;
`;

export function TitleBand(props: { title: string; subTitle: string }): React.ReactElement {
  return (
    <TitleBandRoot>
      <TitleText>{props.title}</TitleText>
      <SubtitleText>{props.subTitle}</SubtitleText>
    </TitleBandRoot>
  );
}
