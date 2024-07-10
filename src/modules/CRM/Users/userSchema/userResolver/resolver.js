const pool = require("../../../../../../config/db");

const resolveUser = async (book) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [
      book.userId,
    ]);
    return rows[0];
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
};

const getAllUser = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM books");
    console.log(" s u c c e s s ");
    return rows;
  } catch (error) {
    throw new Error("Failed to fetch books");
  }
};

module.exports = {
  resolveUser,
  getAllUser,
};
