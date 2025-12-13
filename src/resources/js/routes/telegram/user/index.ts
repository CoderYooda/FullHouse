import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\TelegramController::auth
* @see app/Http/Controllers/Api/TelegramController.php:21
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
* @see app/Http/Controllers/Api/TelegramController.php:21
* @route '/api/telegram/user/auth'
*/
auth.url = (options?: RouteQueryOptions) => {
    return auth.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\TelegramController::auth
* @see app/Http/Controllers/Api/TelegramController.php:21
* @route '/api/telegram/user/auth'
*/
auth.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: auth.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\TelegramController::auth
* @see app/Http/Controllers/Api/TelegramController.php:21
* @route '/api/telegram/user/auth'
*/
const authForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: auth.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\TelegramController::auth
* @see app/Http/Controllers/Api/TelegramController.php:21
* @route '/api/telegram/user/auth'
*/
authForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: auth.url(options),
    method: 'post',
})

auth.form = authForm

const user = {
    auth: Object.assign(auth, auth),
}

export default user