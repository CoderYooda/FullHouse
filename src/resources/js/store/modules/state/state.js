import {SocketBus} from "../../../core/Modules/Socket/SocketBus";
import {Table} from "../../../pages/Service/Objects/Table";

export default ({
    socketBus:new SocketBus(this),
    _seat_modal: {
        visible: false,
        seat: null,
        min_buy: 0,
        max_buy: 0,
    },
    _change_name_modal: {
        visible: false,
    },
    _table_settings:new Table(100, 10000),

});
