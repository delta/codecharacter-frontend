import { RefObject } from 'react';

interface PageType {
  Dashboard: 'Dashboard';
  DailyChallenge: 'DailyChallenge';
  Tutorials: 'Tutorials';
}

export type Props = {
  language: string;
  page: PageType[keyof PageType];
  SaveRef: RefObject<HTMLButtonElement>;
  SubmitRef: RefObject<HTMLButtonElement>;
  tutorialNumber: number;
};

export type Workspace = {
  filepath: string;
  folderpath: string;
};
