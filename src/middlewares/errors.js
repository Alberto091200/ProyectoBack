module.exports = function (err, req, res, next) {
  console.log(err)

  res
    .status(500)
    .send(
      "Estamos trabajando para que todo funcione correctamente, gracias y perdon por las molestias"
    )
}
