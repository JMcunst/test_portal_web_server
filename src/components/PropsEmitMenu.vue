
<template>
    <nav>
        <ul class="menu">
            <li class="menu-item" v-for="item, i in menu" :key="i">
                <a :href="item[1]">{{ item[0] }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'PropsEmitMenu',
    props: {
        menu: Array
    }
}
</script>

<style>
.menu {
    display: flex;
    justify-content: center;
    padding: 10px;
    border-radius: 5px;
    background: steelblue;
    list-style: none;
}

.menu-item {
    padding: 10px;
}

.menu-item a {
    color: white;
    text-decoration: none;
}
</style>