module.exports = (req, res, next) => {
  const { isAdmin } = req.users

  if (!isAdmin)
    return res
      .status(403)
      .json({ msg: "Acceso prohibido, no tienes privilegios." })

  next()
}
