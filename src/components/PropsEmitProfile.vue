<template>
    <li class="profile">
        <img class="profile-img" :src="getImgUrl(profile.img)"/>
        <div class="profile-content">
            <h3 class="content-name">{{ profile.name }}</h3>
            <button class="content-btn" @click="openModalinHere(profile.id)">상세보기</button>
        </div>
    </li>
</template>

<script>
export default {
    name: 'PropsEmitProfile',
    props: {
        profile: Object
    },
    methods: {
        getImgUrl(pet) {
            var images = require.context('../assets/profile/', false, /\.jpg$/)
            return images('./' + pet + ".jpg")
        },
        openModalinHere(id) {
            console.log('Profile Open');
            this.$emit('openModal', id);
        }
    }
}
</script>

<style>
.profile {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    list-style: none;
    margin: 10px;
}

.profile-img {
    width: 30%;
    height: 30%;
}
.profile-content {
    margin-left: 10px;
}

.content-btn {
    margin: 10px 0 10px;
    width: 100%;
    height: 30px;
    background: rgb(39, 25, 25);
    color: rgb(255, 255, 255);
    /* font: var(--text_semi_bold1); */
    font-size: 14px;
    font-weight: 500;
    border-radius: 20px;
    transition: background .5s;
    cursor: pointer;
}
</style>