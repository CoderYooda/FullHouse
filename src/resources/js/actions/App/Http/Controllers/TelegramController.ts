import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\TelegramController::index
* @see app/Http/Controllers/TelegramController.php:11
* @route '/telegram{any}'
*/
export const index = (args: { any: string | number } | [any: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/telegram{any}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TelegramController::index
* @see app/Http/Controllers/TelegramController.php:11
* @route '/telegram{any}'
*/
index.url = (args: { any: string | number } | [any: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { any: args }
    }

    if (Array.isArray(args)) {
        args = {
            any: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        any: args.any,
    }

    return index.definition.url
            .replace('{any}', parsedArgs.any.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TelegramController::index
* @see app/Http/Controllers/TelegramController.php:11
* @route '/telegram{any}'
*/
index.get = (args: { any: string | number } | [any: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TelegramController::index
* @see app/Http/Controllers/TelegramController.php:11
* @route '/telegram{any}'
*/
index.head = (args: { any: string | number } | [any: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TelegramController::index
* @see app/Http/Controllers/TelegramController.php:11
* @route '/telegram{any}'
*/
const indexForm = (args: { any: string | number } | [any: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TelegramController::index
* @see app/Http/Controllers/TelegramController.php:11
* @route '/telegram{any}'
*/
indexForm.get = (args: { any: string | number } | [any: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TelegramController::index
* @see app/Http/Controllers/TelegramController.php:11
* @route '/telegram{any}'
*/
indexForm.head = (args: { any: string | number } | [any: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
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