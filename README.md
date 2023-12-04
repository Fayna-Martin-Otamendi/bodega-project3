# bodega-project3

User Signup/Login


| METHOD | ENDPOINT       | TOKEN | ROLE  | DESCRIPTION  | POST PARAMS                                     | RETURNS              |
|--------|----------------|-------|-------|--------------|-------------------------------------------------|----------------------|
| POST   | /auth/signup   | -     | usuario  | User Signup  | userName, email, password, country, birthDate, phone_number | { token: token }     |
| POST   | /auth/login    | -     | usuario  | User Login   | email, password                                 | { token: token }     |



User Endpoints

| METHOD | ENDPOINT          | TOKEN | ROLE   | DESCRIPTION           | POST PARAMS                                     | RETURNS                      |
|--------|-------------------|-------|--------|-----------------------|-------------------------------------------------|------------------------------|
| GET    | /user             | YES   | admin  | Get All Users         | query params                                    | [{user}]                     |
| GET    | /user/profile     | YES   | usuario | Get Own Profile       |                                                 | {user}                       |
| GET    | /user/:userId     | YES   | usuario  | Get One User          |                                                 | {user}                       |
| POST   | /user             | YES   | admin  | Create One User       | userName, email, password, country, birthDate, phone_number | {user}               |
| PUT    | /user/profile     | YES   | usuario | Update Own Profile    | userName, email, password, country, birthDate, phone_number | {message: 'Profile updated'} |
| PUT    | /user/password    | YES   |usuario  | Reset Password        | oldPassword, newPassword, repeatPassword       | {message: 'Password updated'}|
| PUT    | /user/:userId     | YES   | admin  | Update One User       | userName, email, password, country, birthDate, phone_number | {message: 'User updated'}    |
| DELETE | /user/:userId     | YES   | admin  | Delete One User       | userId                                          | {message: 'User deleted'}    |
| DELETE | /user/profile     | YES   | usuario   | Delete Own Profile    |                                                 | {message: 'Profile deleted'} |


Wine Endpoints


| METHOD | ENDPOINT        | TOKEN | ROLE   | DESCRIPTION                  | POST PARAMS                                   | RETURNS                       |
|--------|-----------------|-------|--------|------------------------------|-----------------------------------------------|-------------------------------|
| GET    | /wines          | YES   | usuario  | List All Wines               |                                               | [{wine}]                      |
| GET    | /wines/:id      | YES   | usuario | Get Wine Details             |                                               | {wine}                        |
| POST   | /wines          | YES   | Admin  | Add New Wine                 | name, year, type, description, price, stock   | {message: 'Wine added'}       |
| PUT    | /wines/:id      | YES   | Admin  | Update Wine                  | name, year, type, description, price, stock   | {message: 'Wine updated'}     |
| DELETE | /wines/:id      | YES   | Admin  | Delete Wine                  |                                               | {message: 'Wine deleted'}     |


Reservation Endpoints


| METHOD | ENDPOINT           | TOKEN | ROLE    | DESCRIPTION                | POST PARAMS                  | RETURNS                            |
|--------|--------------------|-------|---------|----------------------------|------------------------------|------------------------------------|
| GET    | /reservations      | YES   | Admin   | List All Reservations      |                              | [{reservation}]                    |
| POST   | /reservations      | YES   | Usuario | Make a Reservation         | dateTime, numberOfPeople     | {reservation}                      |
| GET    | /reservations/:id  | YES   | Usuario | Get Reservation Details    |                              | {reservation}                      |
| PUT    | /reservations/:id  | YES   | Usuario | Update a Reservation       | dateTime, numberOfPeople     | {message: 'Reservation updated'}   |
| DELETE | /reservations/:id  | YES   | Usuario | Cancel a Reservation       |                              | {message: 'Reservation cancelled'} |


Shopping Cart Endpoints


| METHOD | ENDPOINT                             | TOKEN | ROLE   | DESCRIPTION                  | POST PARAMS              | RETURNS                           |
|--------|--------------------------------------|-------|--------|------------------------------|--------------------------|-----------------------------------|
| GET    | /cart/:userId                        | YES   | usuario   | Show User's Cart             |                          | {cart}                            |
| POST   | /cart/:userId/items                  | YES   | usuario   | Add Item to Cart             | wineId, quantity         | {cartItem}                        |
| DELETE | /cart/:userId/items/:itemId          | YES   | usuario   | Remove Item from Cart        |                          | {message: 'Item removed'}         |


Order Endpoints


| METHOD | ENDPOINT         | TOKEN | ROLE   | DESCRIPTION                   | POST PARAMS              | RETURNS                         |
|--------|------------------|-------|--------|-------------------------------|--------------------------|---------------------------------|
| POST   | /orders          | YES   | usuario   | Create Order from Cart        |                          | {order}                         |
| GET    | /orders/:id      | YES   | usuario   | Get Order Details             |                          | {order}                         |
| PUT    | /orders/:id      | YES   | Admin  | Update Order Status           | orderStatus              | {message: 'Order updated'}      |
| DELETE | /orders/:id      | YES   | Admin  | Cancel Order                  |                          | {message: 'Order cancelled'}    |



Comments Endpoints


| METHOD | ENDPOINT                           | TOKEN | ROLE   | DESCRIPTION                   | POST PARAMS          | RETURNS                         |
|--------|------------------------------------|-------|--------|-------------------------------|----------------------|---------------------------------|
| POST   | /wines/:wineId/comments            | YES   | usuario   | Post Comment on Wine          | commentText          | {comment}        |              
| GET    | /wines/:wineId/comments            | YES   | usuario  | List Comments on Wine         |                      | [{comment}]                     |
| POST   | /wines/:wineId/ratings             | YES   | usuario  | Rate a Wine                   | rating               | {rating}                        |
| GET    | /wines/:wineId/ratings             | YES   | usuario  | Show Ratings of a Wine        |                      | [{rating}]                      |





Español:


Registro/Inicio de Sesión de Usuario


| MÉTODO  | ENDPOINT       | TOKEN | ROL   | DESCRIPCIÓN          | PARÁMETROS POST                               | DEVUELVE             |
|——————|————————|———|———|———————————|———————————————————————|———————————|
| POST        | /auth/registro | -     | user  | Registro de Usuario  | userName, email, contraseña, país, fechaNacimiento, teléfono | { token: token } |
 | POST       | /auth/inicio   | -     | user  | Inicio de Sesión     | email, contraseña                             | { token: token }     |


Usuarios


| MÉTODO | ENDPOINT          | TOKEN | ROL    | DESCRIPCIÓN            | PARÁMETROS POST                               | DEVUELVE                          |
|--------|-------------------|-------|--------|------------------------|-----------------------------------------------|-----------------------------------|
| GET    | /usuario          | SÍ    | admin  | Obtener Todos los Usuarios | parámetros de consulta                        | [{usuario}]                       |
| GET    | /usuario/perfil   | SÍ    | user   | Obtener Perfil Propio  |                                               | {usuario}                         |
| GET    | /usuario/:userId  | SÍ    | user   | Obtener un Usuario     |                                               | {usuario}                         |
| POST   | /usuario          | SÍ    | admin  | Crear un Usuario       | userName, email, contraseña, país, fechaNacimiento, teléfono | {usuario}                 |
| PUT    | /usuario/perfil   | SÍ    | user   | Actualizar Perfil Propio | userName, email, contraseña, país, fechaNacimiento, teléfono | {mensaje: 'Perfil actualizado'}  |
| PUT    | /usuario/contraseña | SÍ  | user   | Restablecer Contraseña | contraseñaAntigua, nuevaContraseña, repetirNuevaContraseña   | {mensaje: 'Contraseña actualizada'} |
| PUT    | /usuario/:userId  | SÍ    | admin  | Actualizar un Usuario  | userName, email, contraseña, país, fechaNacimiento, teléfono | {mensaje: 'Usuario actualizado'} |
| DELETE | /usuario/:userId  | SÍ    | admin  | Eliminar un Usuario    | userId                                        | {mensaje: 'Usuario eliminado'}    |
| DELETE | /usuario/perfil   | SÍ    | user   | Eliminar Perfil Propio |                                               | {mensaje: 'Perfil eliminado'}     |


Vinos


| METHOD | ENDPOINT        | TOKEN | ROLE   | DESCRIPTION               | POST PARAMS                        | RETURNS                       |
|--------|-----------------|-------|--------|---------------------------|------------------------------------|-------------------------------|
| GET    | /vinos          | SÍ  | Todos  | Lista todos los vinos     |                                    | [{vino}]                      |
| GET    | /vinos/:id      | SÍ    | Todos  | Obtiene detalles de un vino|                                   | {vino}                        |
| POST   | /vinos          | SÍ    | Admin  | Añade un nuevo vino       | nombre, año, tipo, descripción, precio, stock | {message: 'Vino añadido'} |
| PUT    | /vinos/:id      | SÍ  | Admin  | Actualiza un vino         | nombre, año, tipo, descripción, precio, stock | {message: 'Vino actualizado'}|
| DELETE | /vinos/:id      | SÍ   | Admin  | Elimina un vino           |                                    | {message: 'Vino eliminado'}   |


Reservas


| METHOD | ENDPOINT           | TOKEN | ROLE   | DESCRIPTION                | POST PARAMS                | RETURNS                         |
|--------|--------------------|-------|--------|----------------------------|----------------------------|---------------------------------|
| GET    | /reservas          | SÍ    | Admin  | Lista todas las reservas   |                            | [{reserva}]                     |
| POST   | /reservas          | SÍ    | Usuario| Permite hacer una reserva  | fechaHora, numeroPersonas  | {reserva}                       |
| GET    | /reservas/:id      | SÍ   | Usuario| Obtiene detalles reserva   |                            | {reserva}                       |
| PUT    | /reservas/:id      | SÍ   | Usuario| Actualiza una reserva      | fechaHora, numeroPersonas  | {message: 'Reserva actualizada'}|
| DELETE | /reservas/:id      | SÍ   | Usuario| Cancela una reserva        |                            | {message: 'Reserva cancelada'}  |



Pedidos

| METHOD | ENDPOINT        | TOKEN | ROLE   | DESCRIPTION                      | POST PARAMS                | RETURNS                         |
|--------|-----------------|-------|--------|----------------------------------|----------------------------|---------------------------------|
| POST   | /pedidos        | SÍ   | Usuario| Crea nuevo pedido desde carrito  |                            | {pedido}                        |
| GET    | /pedidos/:id    | SÍ   | Usuario| Muestra detalles de un pedido    |                            | {pedido}                        |
| PUT    | /pedidos/:id    | SÍ   | Admin  | Actualiza el estado de un pedido | estadoPedido              | {message: 'Pedido actualizado'} |
| DELETE | /pedidos/:id    | SÍ  | Admin  | Cancela un pedido                |                            | {message: 'Pedido cancelado'}   |


Comentarios y Calificaciones


| METHOD | ENDPOINT                       | TOKEN | ROLE   | DESCRIPTION                      | POST PARAMS                 | RETURNS                            |
|--------|--------------------------------|-------|--------|----------------------------------|-----------------------------|------------------------------------|
| POST   | /vinos/:id_vino/comentarios    | SÍ    | Usuario| Permite comentar sobre un vino   | textoComentario             | {comentario}                        |
| GET    | /vinos/:id_vino/comentarios    | SÍ   | Todos  | Lista comentarios de un vino     |                             | [{comentario}]                      |
| POST   | /vinos/:id_vino/calificaciones | SÍ   | Usuario| Permite calificar un vino        | puntuacion                  | {calificacion}                      |
| GET    | /vinos/:id_vino/calificaciones |SÍ   | Todos  | Muestra calificaciones de un vino|                             | [{calificacion}]                    |
