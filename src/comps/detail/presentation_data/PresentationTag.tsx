import * as React from "react";
import styled from "styled-components";

const TagRoot = styled.div`
  display: inline-block;
  padding: 0.3em 0.6em;
  margin-right: 0.25em;
  font-size: 2.1em;
  line-height: 1em;
  color: #fff;
  background: #4f4f69;
`;

export function PresentationTag(props: { tagName: string }): React.ReactElement {
  return <TagRoot>{props.tagName}</TagRoot>;
}
