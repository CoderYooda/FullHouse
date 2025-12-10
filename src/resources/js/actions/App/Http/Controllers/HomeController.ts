import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\HomeController::index
* @see app/Http/Controllers/HomeController.php:11
* @route '/'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::index
* @see app/Http/Controllers/HomeController.php:11
* @route '/'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::index
* @see app/Http/Controllers/HomeController.php:11
* @route '/'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HomeController::index
* @see app/Http/Controllers/HomeController.php:11
* @route '/'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HomeController::index
* @see app/Http/Controllers/HomeController.php:11
* @route '/'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HomeController::index
* @see app/Http/Controllers/HomeController.php:11
* @route '/'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HomeController::index
* @see app/Http/Controllers/HomeController.php:11
* @route '/'
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

/**
* @see \App\Http\Controllers\HomeController::act
* @see app/Http/Controllers/HomeController.php:16
* @route '/act'
*/
export const act = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: act.url(options),
    method: 'get',
})

act.definition = {
    methods: ["get","head"],
    url: '/act',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::act
* @see app/Http/Controllers/HomeController.php:16
* @route '/act'
*/
act.url = (options?: RouteQueryOptions) => {
    return act.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::act
* @see app/Http/Controllers/HomeController.php:16
* @route '/act'
*/
act.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: act.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HomeController::act
* @see app/Http/Controllers/HomeController.php:16
* @route '/act'
*/
act.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: act.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HomeController::act
* @see app/Http/Controllers/HomeController.php:16
* @route '/act'
*/
const actForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: act.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HomeController::act
* @see app/Http/Controllers/HomeController.php:16
* @route '/act'
*/
actForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: act.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HomeController::act
* @see app/Http/Controllers/HomeController.php:16
* @route '/act'
*/
actForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: act.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

act.form = actForm

const HomeController = { index, act }

export default HomeController