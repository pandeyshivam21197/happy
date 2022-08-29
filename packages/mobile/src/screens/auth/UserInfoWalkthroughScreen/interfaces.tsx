export interface IUserInterestData {
  id: number;
  interest: string;
  icon: string;
}

export interface IUserIntrestSection {
  id: number;
  title: string;
  data: IUserInterestData[];
}
