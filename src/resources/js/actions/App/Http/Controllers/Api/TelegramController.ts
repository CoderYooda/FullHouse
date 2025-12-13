import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
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

/**
* @see \App\Http\Controllers\Api\TelegramController::updateName
* @see app/Http/Controllers/Api/TelegramController.php:58
* @route '/api/player/update_name'
*/
export const updateName = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateName.url(options),
    method: 'post',
})

updateName.definition = {
    methods: ["post"],
    url: '/api/player/update_name',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\TelegramController::updateName
* @see app/Http/Controllers/Api/TelegramController.php:58
* @route '/api/player/update_name'
*/
updateName.url = (options?: RouteQueryOptions) => {
    return updateName.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\TelegramController::updateName
* @see app/Http/Controllers/Api/TelegramController.php:58
* @route '/api/player/update_name'
*/
updateName.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateName.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\TelegramController::updateName
* @see app/Http/Controllers/Api/TelegramController.php:58
* @route '/api/player/update_name'
*/
const updateNameForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateName.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\TelegramController::updateName
* @see app/Http/Controllers/Api/TelegramController.php:58
* @route '/api/player/update_name'
*/
updateNameForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateName.url(options),
    method: 'post',
})

updateName.form = updateNameForm

const TelegramController = { auth, updateName }

export default TelegramController