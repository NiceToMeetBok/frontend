type LuckybagType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface BlessingType {
  nickname: string;
  luckyBagId: LuckybagType;
  body: string;
  identifier?: string; // post 에 사용
}
