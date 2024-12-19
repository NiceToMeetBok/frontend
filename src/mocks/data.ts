import { Blessing } from "@/types/blessings";
import { UserType } from "@/types/user";

export const userInfo: UserType = {
  id: 1,
  identifier: "1abc",
  nickname: "보선",
  code: "1234 ",
};

export const blessings: Blessing[] = [
  {
    id: "1",
    nickname: "남기는자1",
    luckybagID: 3,
    message: "새해 복 많이 받아!",
  },
  {
    id: "2",
    nickname: "남기는자2",
    luckybagID: 5,
    message: "안농 ㅋㅋㅋㅋ 올해도 수고 많았고 내년에도 잘해보자",
  },
  {
    id: "3",
    nickname: "친구A",
    luckybagID: 9,
    message: "2024년 정말 빨리 지나갔다.. 2025년도도 화이팅!",
  },
  {
    id: "4",
    nickname: "친구B",
    luckybagID: 1,
    message: "2새해 복 많이 받으세요 :) ",
  },
  {
    id: "5",
    nickname: "로아",
    luckybagID: 10,
    message: "올해도 고생 많았어. 내년에도 파이팅!!",
  },
  {
    id: "6",
    nickname: "로안",
    luckybagID: 12,
    message: "벌써 2025년이네.. 내년에도 잘 부탁해 ",
  },
];
