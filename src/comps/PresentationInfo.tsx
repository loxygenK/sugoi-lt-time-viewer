import * as React from "react";
import { Presentation } from "../types/Presentation";
import styled from "styled-components";
import { Caption } from "./detail/Caption";
import { PresentationData } from "./detail/PresentationData";

const PresentationInfoRoot = styled.div`
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 900;
  padding: 5em 0;
  color: #4f4f69;
`;

export function PresentationInfo(props: { presentation: Presentation }): React.ReactElement {
  return (
    <PresentationInfoRoot>
      <Caption caption={"次の発表者"} />
    </PresentationInfoRoot>
  );
}
