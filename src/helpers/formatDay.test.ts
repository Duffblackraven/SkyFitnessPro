import { formatDay } from "./formatDay";

test("Правильное форматирование даты: 1 день", () => {
  expect(formatDay(1)).toBe("1 день");
});
test("Правильное форматирование даты: 0 дней", () => {
    expect(formatDay(0)).toBe("0 дней");
  });
  test("Правильное форматирование даты: 2 дня", () => {
    expect(formatDay(2)).toBe("2 дня");
  });
  test("Правильное форматирование даты: 1 день", () => {
    expect(formatDay(1)).toBe("1 день");
  });