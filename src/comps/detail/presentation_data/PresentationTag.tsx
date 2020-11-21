import * as React from "react";
import styled from "styled-components";

const TagRoot = styled.div`
  display: inline-block;
  margin-right: 0.25em;
  padding: 0.3em 0.6em;
  background: #4f4f69;
  color: #fff;
  font-size: 2.1em;
  line-height: 1em;
`;

export function PresentationTag(props: { tagName: string }) {
  return <TagRoot>{props.tagName}</TagRoot>;
}
