<template>
    <div class="page-main">
        <!-- <span class="bg_img"><img src="@/assets/img/bg_img.jpeg" alt="백그라운드 이미지" /></span> -->
        <span class="txt_1">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </span>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            state: false,
        };
    },
    props: {
        msg: String,
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
.page-main {
    width: 100%;
    min-height: 100vh;

    .bg_img {
        position: absolute;
        bottom: 15vh;
        right: 5vh;
        height: 55vh;

        &:before {
            content: "";
            position: absolute;
            top: -20%;
            right: -1rem;
            width: 60%;
            height: 130%;
            background: rgba(255, 255, 255, 0.1);
        }

        img {
            position: relative;
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
}
</style>
