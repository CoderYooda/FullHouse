import HomeController from './HomeController'
import TelegramController from './TelegramController'

const Controllers = {
    HomeController: Object.assign(HomeController, HomeController),
    TelegramController: Object.assign(TelegramController, TelegramController),
}

export default Controllers