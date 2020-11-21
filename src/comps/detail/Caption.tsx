import * as React from "react";
import styled from "styled-components";

const CaptionRoot = styled.div`
  display: inline-block;
  font-size: 2.5em;
  line-height: 1em;
  background: #4f4f69;
  color: #fff;
  padding: 0.5em 2em;
`;

export function Caption(props: { caption: string }): React.ReactElement {
  return <CaptionRoot>{props.caption}</CaptionRoot>;
}
