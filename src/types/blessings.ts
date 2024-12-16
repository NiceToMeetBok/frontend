type LuckybagType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface Blessing {
  id: string;
  nickname: string;
  luckybagID: LuckybagType;
  message: string;
}
