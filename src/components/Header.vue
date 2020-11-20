<template>
    <div class="header">
        <mt-header>
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
    </div>
</template>
<style>
.header>.mint-header {
    align-items: center;
    background-color: #d82626;
    box-sizing: border-box;
    color: #fff;
    display: flex;
    font-size: 14px;
    height: 40px;
    line-height: 1;
    padding: 0 10px;
    position: relative;
    text-align: center;
    white-space: nowrap;
}
</style>