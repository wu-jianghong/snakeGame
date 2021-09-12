<template>
    <div class="main">
        <div class="map">
            <div class="snake" ref="snakeRefence">
                <div></div>
            </div>
            <div class="foot" ref="footRefence">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div class="score-panel">
            <div>SCORE:<span ref="scoreRefence">1</span></div>
            <div>LEVEL:<span ref="levelRefence">1</span></div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {onMounted, ref} from 'vue'
    import GameCtrol from './GameCtrol'

    /** 食物的ele */
    const footRefence = ref<HTMLElement>()
    /** 积分 */
    const scoreRefence = ref<HTMLElement>()
    const levelRefence = ref<HTMLElement>()
    const snakeRefence = ref<HTMLElement>()
    onMounted(() => {
        new GameCtrol({
            footEl:footRefence.value!,
            scoreEl:scoreRefence.value!,
            levelEl:levelRefence.value!,
            snakeEl: snakeRefence.value!

        })
    })
</script>

<style lang="less">
@bg-color:#b7d4a8;
.main {
    width: 360px;
    height: 420px;
    background-color: @bg-color;
    border: 10px solid #000;
    border-radius: 8px;
    margin:auto;
    .map {
        width: 304px;
        height: 304px;
        border: 2px solid #000;
        margin: 20px auto;
        position: relative;
        .foot {
            width: 10px;
            height: 10px;
            display: flex;
            flex-wrap: wrap;
            position: absolute;
            top: 200px;
            left: 100px;
            border: 1px solid @bg-color;
            &>span {
                display: inline-block;
                width: 4px;
                height: 4px;
                background-color: #000;
                border: 1px solid @bg-color;
            }
        }
        .snake {
            &>div {
                width: 10px;
                height: 10px;
                background-color: #000;
                border: 1px solid @bg-color;
                position: absolute;
            }
        }
    }
    .score-panel {
        display: flex;
        margin: auto;
        width: 304px;
        justify-content: space-between;
    }

}
</style>

