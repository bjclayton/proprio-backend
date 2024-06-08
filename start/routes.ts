/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
const AuthController = () => import('#controllers/auth_controller')

router.get('health', ({ response }) => response.noContent())

router.group(() => {
    router.group(() => {
        router.post('/register', [AuthController, 'register'])
        router.post('/login', [AuthController, 'login'])
        router.post('/verify-email', [AuthController, 'verifyEmail'])
        router.post('/logout', [AuthController, 'logout']).use(middleware.auth())
    }).prefix('auth')

}).prefix('api')
