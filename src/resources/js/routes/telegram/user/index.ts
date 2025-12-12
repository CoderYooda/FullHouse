import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\TelegramController::auth
* @see app/Http/Controllers/Api/TelegramController.php:18
* @route '/api/telegram/user/auth'
*/
export const auth = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: auth.url(options),
    method: 'post',
})

auth.definition = {
    methods: ["post"],
    url: '/api/telegram/user/auth',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\TelegramController::auth
* @see app/Http/Controllers/Api/TelegramController.php:18
* @route '/api/telegram/user/auth'
*/
auth.url = (options?: RouteQueryOptions) => {
    return auth.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\TelegramController::auth
* @see app/Http/Controllers/Api/TelegramController.php:18
* @route '/api/telegram/user/auth'
*/
auth.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: auth.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\TelegramController::auth
* @see app/Http/Controllers/Api/TelegramController.php:18
* @route '/api/telegram/user/auth'
*/
const authForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: auth.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\TelegramController::auth
* @see app/Http/Controllers/Api/TelegramController.php:18
* @route '/api/telegram/user/auth'
*/
authForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: auth.url(options),
    method: 'post',
})

auth.form = authForm

/**
* @see \App\Http\Controllers\TelegramController::login
* @see app/Http/Controllers/TelegramController.php:22
* @route '/auth/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/auth/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TelegramController::login
* @see app/Http/Controllers/TelegramController.php:22
* @route '/auth/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TelegramController::login
* @see app/Http/Controllers/TelegramController.php:22
* @route '/auth/login'
*/
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TelegramController::login
* @see app/Http/Controllers/TelegramController.php:22
* @route '/auth/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TelegramController::login
* @see app/Http/Controllers/TelegramController.php:22
* @route '/auth/login'
*/
loginForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

login.form = loginForm

const user = {
    auth: Object.assign(auth, auth),
    login: Object.assign(login, login),
}

export default user