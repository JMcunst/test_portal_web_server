<template>
    <div>
        <PropsEmitModal :profile="profiles[stateId]" :isAct="isModalAct" @closeModal="closeModalinPage" />
        <PropsEmitMenu :menu="parentMenu" />
        <nav>
            <ul>
                <PropsEmitProfile v-for="profile, i in profiles" :key="i" v-bind:profile="profile"
                    @openModal="openModalinPage($event)" />
            </ul>
        </nav>
    </div>
</template>

<script>
import PropsEmitMenu from '../components/PropsEmitMenu.vue';
import PropsEmitProfile from '../components/PropsEmitProfile.vue';
import PropsEmitModal from '../components/PropsEmitModal.vue';

export default {
    name: 'PropsEmitTest',
    data() {
        return {
            stateId: 0,
            isModalAct: false,
            parentMenu: [['Home', '/'], ['About', '/about'], ['Profile', '/propsemit']],
            profiles: [
                { id: '0', name: 'Cristina', age: 16, job: '농부' ,img: 'person_001' },
                { id: '1', name: 'David', age: 19, job: '마피아' ,img: 'person_002' },
                { id: '2', name: 'Matilda', age: 23, job: '역무원' ,img: 'person_003' },
                { id: '3', name: 'Sophia', age: 17, job: '국회의원' ,img: 'person_004' },
            ]
        }
    },
    methods: {
        openModalinPage(id) {
            console.log('Page Open');
            this.stateId = id;
            this.isModalAct = true;
        },
        closeModalinPage() {
            console.log('Page Close');
            this.stateId = 0;
            this.isModalAct = false;
        }
    },
    components: {
        PropsEmitMenu, PropsEmitProfile, PropsEmitModal
    }
}
</script>

<style>

</style>