const teacherModel = require('./schema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const registerTeacher = async (req, res) => {
  try {
    let { name, email, password } = req.body;
    if (!name) return res.status(400).send({ message: 'name is must' });

    let obj = {};
    obj.name = name;
    if (!email) return res.status(400).send({ message: 'Email is must' });
    let checkEmail = await teacherModel.findOne({ email });
    if (checkEmail)
      return res.status(400).send({ message: 'Email is already in use' });
    obj.email = email;
    if (!password) return res.status(400).send({ message: 'password is must' });
    let newPassword = await bcrypt.hash(password, 12);
    obj.password = newPassword;

    const data = await teacherModel.create(obj);
    return res.status(201).json({data});
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res
        .status(400)
        .send({ status: false, message: 'Please Provide Credentials' });

    const checkCredentials = await teacherModel.findOne({ email, password });
    if (!checkCredentials)
      return res
        .status(400)
        .send({ status: false, message: 'Credentials are Incorrect' });

    const token = jwt.sign(
      { teacherId: checkCredentials['_id'] },
      'secret key given by Vikas'
    );
    return res.status(200).send({ status: true, message: token });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { registerTeacher, login };
