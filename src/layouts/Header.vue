<template>
    <div id="nav">
        <ul>
            <li
                v-for="($item, $idx) in getAllRoutes"
                v-bind:key="$item"
                :style="'font-size:' + (3 + parseInt(Math.random() * 2)) + 'rem'"
            >
                <router-link
                    :to="$item.path"
                    v-html="replaceMbtiSpell($item.name, mbti.substr($idx, 1))"
                ></router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "HEADER",
    data() {
        return {
            mbti: "ISTJ", // 메뉴에서 강조될 MBTI 텍스트
            scrollDir: null, // 스크롤 방향 'up', 'dn', null
        };
    },
    components: {},
    computed: {
        getAllRoutes() {
            return this.$router.options.routes;
        },
        getCurRouteIdx() {
            const _this = this;
            return this.getAllRoutes.findIndex(function ($item) {
                return $item.path == _this.$route.path;
            });
        },
    },
    created() {
        window.addEventListener("wheel", this.evt_scroll);
    },
    watch: {
        scrollDir($val) {
            if (!$val) return;

            let curRouteIdx = this.getCurRouteIdx;
            if ($val == "dn") {
                curRouteIdx++;
            } else if ($val == "up") {
                curRouteIdx--;
            }
            if (curRouteIdx < 0) curRouteIdx = 0;
            if (curRouteIdx > this.getAllRoutes.length - 1)
                curRouteIdx = this.getAllRoutes.length - 1;

            this.$router.push(this.getAllRoutes[curRouteIdx].path);
        },
    },
    methods: {
        replaceMbtiSpell($val, $spell) {
            return $val.replace($spell.toUpperCase(), "<strong>" + $spell + "</strong>");
        },
        evt_scroll($e) {
            // if (!this.scrollDir) {
            //     this.scrollDir = $e.deltaY > 0 ? "dn" : "up";
            //     setTimeout(() => (this.scrollDir = null), 1500);
            // }
        },
    },
};
</script>

<style lang="scss" scope>
#nav {
    position: fixed;
    top: 2rem;
    left: 2rem;
    z-index: 2;

    ul {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: stretch;

        li {
            flex: 0 1 auto;
            position: relative;
            padding: 0 0 0 0;
            font-weight: 200;
            line-height: 1em;

            a {
                display: inline-block;
                position: relative;
                color: #e58e85;
                line-height: 0.9em;
                overflow-wrap: break-word;
                @include transition();

                > strong {
                    color: #cdd83d;
                    font-weight: 300;
                }

                &:before {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 40%;
                    width: calc(300%);
                    height: 1px;
                    background: #fa6e30;
                    @include opacity(0);
                    @include transition(0.24);
                }

                &:after {
                    content: "";
                    position: absolute;
                    bottom: -4px;
                    left: 2.5rem;
                    width: 40px;
                    height: 6px;
                    background: #fa959e;
                    @include opacity(0);
                    @include transition(0.4, 0.05);
                }

                &:hover,
                &.router-link-exact-active {
                    &:before {
                        left: 0;
                        width: calc(200%);
                        @include opacity(1);
                    }
                    &:after {
                        left: 0;
                        @include opacity(1);
                    }
                }
            }
        }
    }
    color: #fff;
}

svg {
    position: fixed;
    right: 2rem;
    bottom: 2rem;
}
</style>
