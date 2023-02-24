<template>
    <div class="modal-bg" v-if="isAct">
        <div class="modal-fg">
            <h2>프로필 상세 정보</h2>
            <img class="profile-modal-img" :src="getImgUrl(profile.img)" />
            <h3>{{ profile.name }}</h3>
            <div class="content-job">직업 : {{ profile.job }}</div>
            <div>나이 : {{ profile.age }} 살</div>
            <button class="modal-fg-btn" @click="closeModalinHere">닫기</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PropsEmitModal',
    methods: {
        getImgUrl(pet) {
            var images = require.context('../assets/profile/', false, /\.jpg$/)
            return images('./' + pet + ".jpg")
        },
        closeModalinHere() {
            console.log('Modal Close');
            this.$emit('closeModal');
        }
    },
    props: {
        profile: Object,
        isAct: Boolean
    }
}
</script>

<style>
.modal-bg {
    display: flex;
    position: fixed;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100vw;
    height: 100vh;
}

.modal-fg {
    display: flex;
    position: absolute;
    border-radius: 10px;
    padding: 10px;
    top: 10%;
    flex-direction: column;
    align-items: center;
    background-color: rgb(180, 226, 174);
    width: 80%;
    max-width: 450px;
    user-select: none;
}

.modal-fg-btn {
    margin-top: 10px;
    padding: 6px 12px;
    font-size: 19px;
}

.profile-modal-img {
    width: 42%;
    height: 42%;
}
</style>