import { authService } from "./auth.service.js";
import { ok, fail } from "../../utils/response.js";
import { verifyToken } from "../../utils/jwt.js";

export async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return fail(res, "Thiếu thông tin bắt buộc");

    const result = await authService.register(name, email, password);
    return ok(res, { user: result.user, token: result.token });
  } catch (err) {
    return fail(res, err.message);
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) return fail(res, "Email và mật khẩu là bắt buộc");

    const result = await authService.login(email, password);
    return ok(res, { user: result.user, token: result.token });
  } catch (err) {
    return fail(res, err.message);
  }
}

export async function getMe(req, res) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return fail(res, "Không có token");

    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);
    const user = await authService.getMe(decoded.id);
    return ok(res, user);
  } catch (err) {
    return fail(res, err.message);
  }
}
