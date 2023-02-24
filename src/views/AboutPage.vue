<template>
    <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <h3>이곳은 About Page.</h3>
        <p>COUNT:{{ cnt }}, ONE:{{ data1 }}, TWO:{{ data2 }}, THREE:{{ data3 }}</p>
        <button v-on:click="dataupdate()">click</button>
    </div>
</template>
<script>

export default {
    name: 'AboutPage',
    components: {
    },
    props: {
        msg: String
    },
    data() {
        return {
            data1: 0,
            data2: 0,
            data3: 0,
            cnt: 1,
            stateId: 0,
            isModalAct: false,
            menu: ['HOME', 'ABOUT', 'PRODUCTS', 'ETC'],
            products: [
                { id: '0', title: 'Sample Product1', price: 10000, img: 'https://dummyimage.com/200/F6A9A9/464660' },
                { id: '1', title: 'Sample Product2', price: 50000, img: 'https://dummyimage.com/200/FFBF86/464660' },
                { id: '2', title: 'Sample Product3', price: 30000, img: 'https://dummyimage.com/200/FFF47D/464660' },
                { id: '3', title: 'Sample Product5', price: 70000, img: 'https://dummyimage.com/200/C2F784/464660' },
            ]
        }
    },
    computed: {
        titleComputed() {
            console.log('I change when this.property changes.')
            return this.property
        }
    },
    beforeCreate() {
        console.log('AboutPage beforeCreate:', this.cnt, this.data1, this.data2, this.data3);
    },
    created() {
        console.log('AboutPage created:', this.cnt, this.data1, this.data2, this.data3);
    },
    beforeMount() {
        console.log('AboutPage beforeMount:', this.cnt, this.data1, this.data2, this.data3);
    },
    mounted() {
        console.log('AboutPage mounted:', this.cnt, this.data1, this.data2, this.data3);
    },
    beforeUpdate() {
        console.log('AboutPage beforeUpdate:', this.cnt, this.data1, this.data2, this.data3);
    },
    updated() {
        console.log('AboutPage updated:', this.cnt, this.data1, this.data2, this.data3);
    },
    beforeDestroy() {
        console.log('AboutPage beforeDestroy:', this.cnt, this.data1, this.data2, this.data3);
    },
    destroyed() {
        console.log('AboutPage destroyed:', this.cnt, this.data1, this.data2, this.data3);
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
    }
};
</script>