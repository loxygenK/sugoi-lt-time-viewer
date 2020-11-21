import * as React from "react";
import { Presentation } from "../../types/Presentation";
import styled from "styled-components";
import { PresenterInfo } from "./presentation_data/PresenterInfo";

const PresentationDataRoot = styled.div`
  margin: 2em 3em;
`;

const Title = styled.div`
  font-size: 5em;
  line-height: 1.1em;
`;

const Description = styled.div`
  font-size: 2.5em;
  line-height: 1.1em;
`;

export function PresentationData(props: { presentation: Presentation }) {
  return (
    <PresentationDataRoot>
      <PresenterInfo presenter={props.presentation.presenter} />
      <Title>{props.presentation.presentTitle}</Title>
      <Description>
        {props.presentation.presentDescription.split("\n").map((line) => (
          <>
            {line}
            <br />
          </>
        ))}
      </Description>
    </PresentationDataRoot>
  );
}
