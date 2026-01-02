export default {
    update_1() {
        return {
            "type": "PlayersUpdate",
            "seats": [
                {
                    "seat": 0,
                    "status": "free",
                    "reserved_time": 0,
                    "self": false,
                    "player": null
                },
                {
                    "seat": 1,
                    "status": "free",
                    "reserved_time": 0,
                    "self": false,
                    "player": null
                },
                {
                    "seat": 2,
                    "status": "free",
                    "reserved_time": 0,
                    "self": false,
                    "player": null
                },
                {
                    "seat": 3,
                    "status": "active",
                    "reserved_time": 0,
                    "self": false,
                    "player": {
                        "status": {
                            "type": "active",
                            "data": {
                                "seconds": 0
                            }
                        },
                        "hand": {
                            "cards": [
                                {
                                    "suit": 1,
                                    "value": 8
                                },
                                {
                                    "suit": 8,
                                    "value": 10
                                },
                            ]
                        },
                        "roles": [
                            "bb"
                        ],
                        "name": "dddd",
                        "bet": 0,
                        "credits": 250,
                        "pic": "/public/img/noava.png",
                        "id": 48
                    }
                },
                {
                    "seat": 4,
                    "status": "free",
                    "reserved_time": 0,
                    "self": false,
                    "player": null
                }
            ]
        }
    },
}