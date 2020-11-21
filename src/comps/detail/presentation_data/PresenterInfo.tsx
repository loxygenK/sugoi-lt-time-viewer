import * as React from "react";
import { Presenter } from "../../../types/Presenter";
import styled from "styled-components";

const Name = styled.span`
  font-size: 3em;
  line-height: 1em;
`;

const TwitterId = styled.span`
  font-family: "Roboto Mono", monospace;
  margin-left: 0.5em;
  font-size: 1.5em;
  line-height: 1em;
`;

export function PresenterInfo(props: { presenter: Presenter }) {
  return (
    <div>
      <Name>{props.presenter.name}</Name>
      <TwitterId>@{props.presenter.twitterId}</TwitterId>
    </div>
  );
}
