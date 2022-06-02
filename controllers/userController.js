const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  //Send Response
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users
    }
  });
});
exports.createUser = (res, req) => {
  req.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
exports.getUser = (res, req) => {
  req.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
exports.updateUser = (res, req) => {
  req.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
exports.deleteUser = (res, req) => {
  req.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
