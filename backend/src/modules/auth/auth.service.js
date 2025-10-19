import { User } from "./auth.model.js";
import { generateToken } from "../../utils/jwt.js";

export const authService = {
  register: async (name, email, password) => {
    const exist = await User.findOne({ email });
    if (exist) throw new Error("Email đã tồn tại!");

    const user = new User({ name, email, password });
    await user.save();

    const token = generateToken({ id: user._id, email: user.email });
    return { token, user };
  },

  login: async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Email không tồn tại!");

    const isMatch = await user.matchPassword(password);
    if (!isMatch) throw new Error("Sai mật khẩu!");

    const token = generateToken({ id: user._id, email: user.email });
    return { token, user };
  },

  getMe: async (userId) => {
    const user = await User.findById(userId).select("-password");
    if (!user) throw new Error("Không tìm thấy user");
    return user;
  },
};
