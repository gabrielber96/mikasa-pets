const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const clientService = require("../services/client.service");
const Client = require("../models/client");
const bcrypt = require("bcryptjs");
/*sessionController.loginSession = async (req, res) => {
  const { email, password } = req.body;
  const client = await clientService.findClientEmail(email);
  if (!client) return res.redirect("/login");

  if (bcrypt.compareSync(password, client.password_client)) {
    req.session.usersession = client.name_client;
    req.session.userid = client.id;
    return res.redirect("/home-client");
  } else {
    return res.redirect("/login");
  }
};*/
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (username, password, done) => {
      const user = await clientService.getClientbyEmail(username);
      if (!user) return done(null, null, { message: "No existe el usuario" });

      if (!bcrypt.compareSync(password, user.password_client))
        return done(null, null, { message: "La contraseña es incorrecta" });

      done(null, user);
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await clientService.getClientbyId(id);
  console.log(user);
  done(null, user);
});
