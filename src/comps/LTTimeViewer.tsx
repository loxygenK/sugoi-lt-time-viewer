import { LTData } from "../types/LTData";
import React from "react";
import styled from "styled-components";
import { TitleBand } from "./TitleBand";
import { PresentationInfo } from "./PresentationInfo";
import { PresentationBand } from "./PresentationBand";
import { WebSocketListener } from "../back/WebsocketListener";
import { Info, Success } from "../utils/Logger";

const LTTimeViewerRoot = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background-color: #cfcee0;
`;

const FallbackBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 5em;
  font-weight: 900;
`;

type LTTimeViewerProps = {
  portNumber: number | undefined;
};

type LTTimeViewerState = {
  ltData: LTData | undefined;
};

export class LTTimeViewer extends React.Component<LTTimeViewerProps, LTTimeViewerState> {
  private wsClient: WebSocketListener;

  constructor(props: LTTimeViewerProps) {
    super(props);
    this.state = {
      ltData: undefined,
    };
    this.wsClient = new WebSocketListener(props.portNumber ?? 12333);
    this.wsClient.addCommandListener("SLT", (argument, wsClient) => this.handleLTInfo(argument));
  }

  componentDidMount(): void {
    this.wsClient.connect();
  }

  handleLTInfo(argument: string): void {
    Success("FRT-LTV", "New LTInfo arrived in the front-end side!");
    Info("FRT-LTV", argument);
    const parsed: LTData = JSON.parse(argument);

    this.setState({ ltData: parsed });
  }

  render(): React.ReactNode {
    if (this.state.ltData == null) {
      return this.renderFallBack();
    }
    return (
      <LTTimeViewerRoot>
        <TitleBand title={this.state.ltData.title} subTitle={this.state.ltData.subTitle} />
        <PresentationInfo presentation={this.state.ltData.detail} />
        <PresentationBand bandText={this.state.ltData.title} />
      </LTTimeViewerRoot>
    );
  }

  renderFallBack(): React.ReactNode {
    return (
      <LTTimeViewerRoot>
        <FallbackBox>発表情報を取得しています。</FallbackBox>
      </LTTimeViewerRoot>
    );
  }
}
