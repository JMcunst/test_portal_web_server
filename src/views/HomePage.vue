<template>
    <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/propsemit">PropsEmit</router-link>
        <h3>이곳은 Home Page.</h3>
        <p>COUNT:{{cnt}}, ONE:{{data1}}, TWO:{{data2}}, THREE:{{data3}}</p>
        <button v-on:click="dataupdate()">click</button>
        <br>
        <div>
            <button type="button" class="api-test-btn" @click="sendApiTest()">ACCESS TEST</button>
            <div class="res-msg" v-if="message">SUCCESS</div>
        </div>
        
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'HomePage',
    props: {
        msg: String
    },
    data() {
        return {
            data1: 0,
            data2: 0,
            data3: 0,
            cnt: 1,
            message: ''
        }
    },
    computed: {
        titleComputed() {
            console.log('I change when this.property changes.')
            return this.property
        }
    },
    beforeCreate() {
        console.log('HomePage beforeCreate:', this.cnt, this.data1, this.data2, this.data3);
    },
    created() {
        console.log('HomePage created:', this.cnt, this.data1, this.data2, this.data3);
    },
    beforeMount() {
        console.log('HomePage beforeMount:', this.cnt, this.data1, this.data2, this.data3);
    },
    mounted() {
        console.log('HomePage mounted:', this.cnt, this.data1, this.data2, this.data3);
    },
    beforeUpdate() {
        console.log('HomePage beforeUpdate:', this.cnt, this.data1, this.data2, this.data3);
    },
    updated() {
        console.log('HomePage updated:', this.cnt, this.data1, this.data2, this.data3);
    },
    beforeDestroy() {
        console.log('HomePage beforeDestroy:', this.cnt, this.data1, this.data2, this.data3);
    },
    destroyed() {
        console.log('HomePage destroyed:', this.cnt, this.data1, this.data2, this.data3);
    },
    methods: {
        dataupdate() {
            if (this.cnt % 3 == 1) {
                this.data1 += 1;
            } else if (this.cnt % 3 == 2) {
                this.data2 += 1;
            } else {
                this.data3 += 1;
            }
            this.cnt += 1;
        },
        sendApiTest(){
            axios.get(process.env.VUE_APP_BASE_API + 'testone/access-test/',
                {
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8-sig'
                    },
                }
            ).then(res => {
                var vm = this;

                console.log('ACCESS SUCCESS!!');
                console.log('ACCESS RESPONSE::', res, typeof (res));

                vm.message = res.data.message;
            })
                .catch(function () {
                    console.log('ACCESS FAILURE!!');
                });
        }
    }
};
</script>

<style scoped>

.api-test-btn{
    margin-top: 30px;
}
.res-msg{
    margin-top: 10px;
    width: 100%;
    height: 100px;
    color:rgb(59, 192, 66);
}
</style>