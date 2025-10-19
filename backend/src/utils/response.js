export function ok(res, data) {
  return res.status(200).json({ success: true, data });
}

export function fail(res, message, code = 400) {
  return res.status(code).json({ success: false, message });
}
