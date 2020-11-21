import { Presenter } from "./Presenter";

export interface Presentation {
  presenter: Presenter;
  presentTitle: string;
  presentDescription: string;
  tags: string[];
}
