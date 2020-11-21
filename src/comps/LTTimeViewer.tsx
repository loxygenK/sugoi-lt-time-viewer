import { LTData } from "../types/LTData";
import React from "react";
import styled from "styled-components";
import { TitleBand } from "./TitleBand";

const LTTimeViewerRoot = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  padding-top: 3em;
  background-color: #cfcee0;
`;

export type LTTimeViewerProps = { ltData: LTData };
export class LTTimeViewer extends React.Component<LTTimeViewerProps> {
  render(): React.ReactNode {
    return (
      <LTTimeViewerRoot>
        <TitleBand title={this.props.ltData.title} subTitle={this.props.ltData.subTitle} />
      </LTTimeViewerRoot>
    );
  }
}
