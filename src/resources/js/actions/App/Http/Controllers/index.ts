import Api from './Api'
import HomeController from './HomeController'
import TelegramController from './TelegramController'

const Controllers = {
    Api: Object.assign(Api, Api),
    HomeController: Object.assign(HomeController, HomeController),
    TelegramController: Object.assign(TelegramController, TelegramController),
}

export default Controllers