import * as React from "react";
import styled from "styled-components";

const CaptionRoot = styled.div`
  display: inline-block;
  padding: 0.5em 2em;
  font-size: 2.5em;
  line-height: 1em;
  color: #fff;
  background: #4f4f69;
`;

export function Caption(props: { caption: string }): React.ReactElement {
  return <CaptionRoot>{props.caption}</CaptionRoot>;
}
