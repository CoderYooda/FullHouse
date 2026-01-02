<template>
    <div class="content">
        <div class="boxed">
            <h2 class="page_h2">Рейтинг сезона (в разработке)</h2>
            <div>
                <div class="card" v-for="n in 31">
                    <div class="aside-container">
                        <div class="left-side">
                            <div class="card-icon chip"
                                 :class="mode(n)"
                            >{{ n }}</div>
                        </div>
                        <div class="right-side">
                            <div class="card-title rating">
                                <h3 class="head-title">
                                    Игрок # {{ n }}
                                </h3>
                                <div class="title-label">
                                    <div class="txt">{{ 1000 - n * 32 }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data: function () {
        return {
        }
    },
    methods:{
        mode(n){
            if (n > 0 && n <= 3) {
                return 'mode_1'
            }
            if (n > 3 && n <= 10) {
                return 'mode_2'
            }
            if (n > 10) {
                return 'mode_3'
            }
        }
    },
    computed:{

    },
    mounted() {

    },
}
</script>

<style>

</style>
