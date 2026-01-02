<template>
    <div class="tables_container">
        <div class="lobby_table" @click="selectTable(table.uuid)" v-for="table in tables">
            <div>{{table.id}}</div>
            <div>{{table.name}}</div>
        </div>
    </div>
</template>

<script>
import Dictionary from "../../Dictionary";

export default {
    data: function () {
        return {
            tables: [],
        }
    },
    methods: {
        selectTable(uuid){
            this.$router.push({name:'play', params: { uuid }})
        },
        async requestTableList() {
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: Dictionary.GET_LOBBY_TABLES_URL,
                    data: null
                });

                this.tables = data.tables

                return true;
            } catch (error) {
                // alert(error)

                return false;
            }
        },
    },
    computed:{

    },
    mounted() {
        this.requestTableList().then((data) => {
            console.log(data)
        })
    },
}
</script>

<style>
.tables_container{
    padding: 0 10px 10px;
}
.lobby_table{
    cursor: pointer;
    border-radius: 6px;
    width: 100%;
    background: #0D2439;
    margin-top: 10px;
}
</style>