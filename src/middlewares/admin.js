module.exports = (req, res, next) => {
  const { isAdmin } = req.user
  next()
  if (!isAdmin)
    return res
      .status(403)
      .json({ msg: "Acceso prohibido, no tienes privilegios." })

  
}
