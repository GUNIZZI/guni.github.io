<template>
    <div class="page-pf">
        <!-- <span class="bg_img"><img src="@/assets/img/bg_img.jpg" alt="백그라운드 이미지" /></span> -->
        <!-- <span class="txt_1">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </span> -->

        <ul>
            <li>
                <input id="sort_01" type="radio" name="sort" /><label for="sort_01">All</label>
                <input id="sort_02" type="radio" name="sort" /><label for="sort_02">F.E</label>
                <input id="sort_03" type="radio" name="sort" /><label for="sort_03">Publish</label>
                <input id="sort_04" type="radio" name="sort" /><label for="sort_04">UI</label>
            </li>
        </ul>
        <div class="list">
            <ul>
                <template v-for="($item, $idx) in getList" v-bind:key="'key_' + $idx">
                    <li>
                        <div
                            class="item"
                            :class="{ 'is-active': selIdx == $idx }"
                            @click="selIdx = $idx"
                        >
                            <span class="img"></span>
                            <span class="title">
                                <span class="dt">{{ $item.dt }}</span>
                                <span class="at">{{ $item.at }}</span>
                            </span>
                        </div>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script>
import API_pfList from "@/api/pf.js";

export default {
    name: "HelloWorld",
    data() {
        return {
            state: false,
            selIdx: null,
        };
    },
    props: {
        msg: String,
    },
    computed: {
        getList() {
            return API_pfList || [];
        },
    },
    mounted() {
        console.log(API_pfList);
    },
    watch: {
        selIdx($val) {},
    },
    methods: {
        evt_click() {
            this.$refs.ls.classList.add("is-move");
            this.$refs.ls.classList.add("is-move");
        },
    },
};
</script>

<style scoped lang="scss">
.page-pf {
    width: 100%;
    min-height: 100vh;

    .bg_img {
        position: absolute;
        bottom: 0;
        right: 10%;
        height: 90%;

        img {
            height: 100%;
        }
    }

    .txt_1 {
        display: flex;
        align-items: flex-end;
        width: 50%;
        height: 100vh;
        padding: 0 2rem 5rem;
        box-sizing: border-box;
        color: #ffffff;
        font-size: 1rem;
        font-weight: 100;
        @include opacity(0.8);
    }

    .sort {
        display: flex;
    }

    .list {
        > ul {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            margin-left: auto;

            > li {
                flex: 0 0 300px;
                height: 30vh;

                .item {
                    display: flex;
                    top: 0vh;
                    left: 0vw;
                    width: 300px;
                    align-self: center;
                    height: 100%;
                    padding: 0.5em;
                    border-radius: 10px;
                    background: rgba(255, 255, 255, 0.6);
                    box-sizing: border-box;
                    @include transition(0.24);

                    &.is-active {
                        position: fixed;
                        top: 5vh;
                        left: 5vw;
                        width: 90vw;
                        height: 90vh;
                        background: black;
                        z-index: 3;
                    }
                }
            }
        }
    }
}
</style>
