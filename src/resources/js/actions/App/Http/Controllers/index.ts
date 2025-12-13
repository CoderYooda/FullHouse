import Auth from './Auth'
import Api from './Api'
import HomeController from './HomeController'
import TelegramController from './TelegramController'
import AdminController from './AdminController'

const Controllers = {
    Auth: Object.assign(Auth, Auth),
    Api: Object.assign(Api, Api),
    HomeController: Object.assign(HomeController, HomeController),
    TelegramController: Object.assign(TelegramController, TelegramController),
    AdminController: Object.assign(AdminController, AdminController),
}

export default Controllers