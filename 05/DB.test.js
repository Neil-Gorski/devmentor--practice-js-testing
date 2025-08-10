import DB from "./DB";

describe("DB insert method", () => {
  test("insert a row without id", async () => {
    const db = new DB();
    const obj = { a: 4, b: 10 };
    const result = await db.insert(obj);
    const rows = await db.getRows();
    await expect(result).toBe(rows.find((obj) => obj.id === 1));
  });
  test("insert a row with id as type number", async () => {
    const db = new DB();
    const obj = { id: 1, a: 4, b: 10 };
    const result = await db.insert(obj);
    const rows = await db.getRows();
    await expect(result).toBe(rows[0]);
  });
  test("rejects when id is not a number", async () => {
    const db = new DB();
    const obj = { id: "1", a: 4, b: 10 };
    await expect(db.insert(obj)).rejects.toThrow("ID can be only number!");
  });
  test("rejects when id is already used", async () => {
    const db = new DB();
    const obj1 = { id: 1, a: 3, b: 9 };
    const obj2 = { id: 1, a: 4, b: 19 };
    await db.insert(obj1);
    await expect(db.insert(obj2)).rejects.toThrow("ID can't be duplicated!");
  });
});
describe("DB select method", () => {
  test("search item by id when its in DB", async () => {
    const db = new DB();
    const obj = { id: 44, a: 3, b: 9 };
    await db.insert(obj);
    const result = await db.select(44);
    expect(obj).toEqual(result);
  });
  test("search item by id when its not in DB", async () => {
    const db = new DB();

    await expect(db.select(45)).rejects.toThrow("ID not found");
  });
});
