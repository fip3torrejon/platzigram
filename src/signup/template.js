var yo = require('yo-yo');
var landing = require('../landing');

var signupForm = yo`<div class="col s12 m7 ">
              <div class="row">
                <div class="signup-box">
                  <h1 class="platzigram">Platzigram</h1>
                  <form class="signup-form">
                    <h2>Inscríbete y ve a tus compañeros de Platzi</h2>
                    <div class="section">
                      <a class="btn btn-fb hide-on-small-only">Iniciar sesión con Facebook</a>
                      <a class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official"></i>Iniciar sesión</a>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                      <input type="email" name="email" placeholder="Correo electrónico">
                      <input type="text" name="name" placeholder="Nombre completo">
                      <input type="text" name="username" placeholder="Nombre de usuario">
                      <input type="password" name="password" placeholder="Contraseña">
                      <button class="btn waves-effect waves-light btn-signup" type="submit">Inscríbete</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="row">
                <div class="login-box">
                  ¿Ya eres de Platzigram? <a href="/signin">Ingresa</a>
                </div>
              </div>
            </div>`;

module.exports = landing(signupForm);