import { Blessing } from "@/types/blessings";
import { UserType } from "@/types/user";

export const userInfo: UserType = {
  identifier: "10",
  nickname: "test",
  createdAt: "2024-12-19T12:33:56.633697743",
};

export const blessings: Blessing[] = [
  {
    id: "1",
    nickname: "남기는자1",
    luckyBagId: 3,
    message: "새해 복 많이 받아!",
  },
  {
    id: "2",
    nickname: "남기는자2",
    luckyBagId: 5,
    message: "안농 ㅋㅋㅋㅋ 올해도 수고 많았고 내년에도 잘해보자",
  },
  {
    id: "3",
    nickname: "친구A",
    luckyBagId: 9,
    message: "2024년 정말 빨리 지나갔다.. 2025년도도 화이팅!",
  },
  {
    id: "4",
    nickname: "친구B",
    luckyBagId: 1,
    message: "2새해 복 많이 받으세요 :) ",
  },
  {
    id: "5",
    nickname: "로아",
    luckyBagId: 10,
    message: "올해도 고생 많았어. 내년에도 파이팅!!",
  },
  {
    id: "6",
    nickname: "로안",
    luckyBagId: 12,
    message: "벌써 2025년이네.. 내년에도 잘 부탁해 ",
  },
];
