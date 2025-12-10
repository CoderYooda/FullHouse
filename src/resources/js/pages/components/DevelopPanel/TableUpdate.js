export default {
    table_update_1() {
        return {
            "type": "TableUpdate",
            "table_data": {
                "table_hand": {
                    "cards": [
                        {
                            "suit": 1,
                            "value": 8
                        },
                        {
                            "suit": 8,
                            "value": 10
                        },
                        {
                            "suit": 8,
                            "value": 11
                        },
                        {
                            "suit": 32,
                            "value": 8
                        },
                        {
                            "suit": 32,
                            "value": 2
                        }
                    ]
                },
                "step": "river",
                "table_bank": {
                    "table_stakes": [
                        {
                            "amount": 200,
                            "uuid": "0246084b-84a8-44d4-a914-960cbb9d8f05"
                        }
                    ]
                }
            }
        }
    },
    table_update_2() {
        return {
            "type": "TableUpdate",
            "table_data": {
                "table_hand": {
                    "cards": [
                        {
                            "suit": 1,
                            "value": 8
                        },
                        {
                            "suit": 8,
                            "value": 10
                        },
                        {
                            "suit": 8,
                            "value": 11
                        },
                    ]
                },
                "step": "river",
                "table_bank": {
                    "table_stakes": [
                        {
                            "amount": 200,
                            "uuid": "0246084b-84a8-44d4-a914-960cbb9d8f05"
                        }
                    ]
                }
            }
        }
    },
    table_update_3() {
        return {
            "type": "TableUpdate",
            "table_data": {
                "table_hand": {
                    "cards": [
                    ]
                },
                "step": "river",
                "table_bank": {
                    "table_stakes": [
                        {
                            "amount": 200,
                            "uuid": "0246084b-84a8-44d4-a914-960cbb9d8f05"
                        }
                    ]
                }
            }
        }
    }
}