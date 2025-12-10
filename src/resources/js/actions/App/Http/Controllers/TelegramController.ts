import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\TelegramController::index
* @see app/Http/Controllers/TelegramController.php:11
* @route '/tg'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/tg',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TelegramController::index
* @see app/Http/Controllers/TelegramController.php:11
* @route '/tg'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TelegramController::index
* @see app/Http/Controllers/TelegramController.php:11
* @route '/tg'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TelegramController::index
* @see app/Http/Controllers/TelegramController.php:11
* @route '/tg'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TelegramController::index
* @see app/Http/Controllers/TelegramController.php:11
* @route '/tg'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TelegramController::index
* @see app/Http/Controllers/TelegramController.php:11
* @route '/tg'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TelegramController::index
* @see app/Http/Controllers/TelegramController.php:11
* @route '/tg'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

const TelegramController = { index }

export default TelegramController