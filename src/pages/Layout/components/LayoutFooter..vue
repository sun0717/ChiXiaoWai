<template>
    <div class="footer">
        <div class="w">
            <div class="ftl">
                <RouterLink to="/">
                    <img src="https://lib.tsinghua.edu.cn/images/logo1.png" alt="logo.png">
                </RouterLink>
                <p>
                    <span>中国</span>
                    <span>北京</span>
                    <span>海淀区</span>
                    <span>清华大学图书馆</span>
                    <span>100084</span>
                    <span>电话: 62782137</span>
                    <span>传真: 62781758</span>
                </p>
                <p class="contact">
                    <a href="#">联系我们</a>
                </p>
                <div class="lk">
                    <a href="#">CALIS</a>
                    <a href="#">CADAL</a>
                    <a href="#">CASHL</a>
                    <a href="#">NSTL</a>
                    <a href="#">BALIS</a>
                    <a href="#">国内外图书馆</a>
                    <a href="#">外国教材中心</a>
                    <a href="#">北京图研会</a>
                </div>
            </div>
            <div class="ftr">
                <div class="qr">
                    <div class="pic">
                        <img src="https://lib.tsinghua.edu.cn/images/tsinghualib.jpg" alt="qr.png">
                    </div>
                    <p style="color: rgb(144, 144, 144);">图书馆微信公众号</p>
                </div>
                <div class="copy">
                    <p>
                        <span>版权所有: </span>
                        <RouterLink to="/" style="padding: 0px 5px;">清华大学图书馆</RouterLink>
                        <!-- 改为单路由 -->
                        <a href="#">版权声明</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    transition: all 0.3s ease 0s;
    color: #333;
}

.w {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
}

.footer {
    // display: flex;
    width: 100%;
    // justify-content: space-between;
    background-color: #4B0C77;

    .w {
        display: flex;
        justify-content: space-between;
    }

    .ftl {
        p {
            margin-top: 5px;
            // margin-right: 2px;
            opacity: .52;
            font-size: 12px;
            color: #fff;

            span {
                margin-right: 5px;
            }

        }

        .contact {
            a {
                font-size: 12px;
                color: #fff;
                opacity: .22;
            }
            a:hover {
                color: #fff;
                opacity: 1;
            }
        }

        .lk {
            max-width: 356px;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.15);
            a {
                font-size: 12px;
                color: rgb(144, 144, 144);
                margin-right: 13px;
                margin-bottom: 5px;
            }

            a:hover {
                color: #fff;
            }
        }

    }

    .ftr {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding-bottom: 39px;

        .qr {
            font-size: 12px;
            margin-top: -35px;
            color: rgb(255, 255, 255);
            text-align: center;
            margin-bottom: 100px;
            z-index: 6;

            .pic {
                width: 150px;
                height: 150px;
                background-color: rgb(255, 255, 255);
                margin-bottom: 7px;
                padding: 10px;

                p {
                    opacity: 0.3;
                }

                img {
                    width: 100%;
                }
            }
        }

        .copy {
            font-size: 12px;
            color: #fff;

            span,
            a {
                opacity: .22;
                color: #fff;
            }

            a:hover {
                color: #fff;
                opacity: 1;
            }
        }
    }
}</style>
