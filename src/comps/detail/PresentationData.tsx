import * as React from "react";
import { Presentation } from "../../types/Presentation";
import styled from "styled-components";
import { PresenterInfo } from "./presentation_data/PresenterInfo";
import { PresentationTag } from "./presentation_data/PresentationTag";

const PresentationDataRoot = styled.div`
  margin: 2em 3em;
`;

const Title = styled.div`
  font-size: 5em;
  line-height: 1.1em;
`;

const Description = styled.div`
  margin-bottom: 0.5em;
  font-size: 2.5em;
  line-height: 1.1em;
`;

export function PresentationData(props: { presentation: Presentation }): React.ReactElement {
  return (
    <PresentationDataRoot>
      <PresenterInfo presenter={props.presentation.presenter} />
      <Title>{props.presentation.title}</Title>
      <Description>
        {props.presentation.description.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </Description>
      {props.presentation.tag.map((tagName, index) => (
        <PresentationTag tagName={tagName} key={index} />
      ))}
    </PresentationDataRoot>
  );
}
