export interface ICard {
  pic: string,
  name: string,
  location: string,
  id: string
}

export interface IPagination {
  onChange: (page: number, pageSize: number) => void,
  current: number,
  totalData: number
}