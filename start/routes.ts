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
const UsersController = () => import('#controllers/users_controller')
const ImagesController = () => import('#controllers/images_controller')
const PropertiesController = () => import('#controllers/properties_controller')

router.get('health', ({ response }) => response.noContent())

router.group(() => {
    router.group(() => {
        router.post('/register', [AuthController, 'register'])
        router.post('/login', [AuthController, 'login'])
        router.post('/verify-email', [AuthController, 'verifyEmail'])
        router.post('/logout', [AuthController, 'logout']).use(middleware.auth())
    }).prefix('auth')

    router
        .resource('users', UsersController)
        .use(
            ['index', 'show', 'update', 'destroy'],
            middleware.auth()
        )

    router.group(() => {
        router.get('/properties/filter', [PropertiesController, 'filter'])
        router
            .resource('properties', PropertiesController)
            .use(
                ['store', 'update', 'destroy'],
                middleware.auth()
            )
    })

    router.group(() => {
        router.get('/:type/*', [ImagesController, 'show'])
    }).prefix('uploads')

}).prefix('api')
