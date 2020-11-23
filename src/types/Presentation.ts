import { Presenter } from "./Presenter";

export interface Presentation {
  presenter: Presenter;
  title: string;
  description: string;
  tag: string[];
}
