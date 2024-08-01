const bcrypt = require('bcrypt');

module.exports = async (password) => {
  try {
    if(!password) throw new Error("password ar maq")
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword
  } catch (error) {
    console.error('Error hashing password:', error);
  }
}

