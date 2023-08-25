<template>
    <div class="login">
        <div class="content">
            <div class="xbox">
                <div class="title_Wrapper"></div>
                <div class="login_choice">
                    <!-- 可以优化 -->
                    <router-link to="/login/phone" class="phone_lo" active-class="active active_phone">手机号码登录</router-link>
                    <router-link to="/login/email" class="email_lo" active-class="active active_email">邮箱登录</router-link>
                </div>
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.content {
    display: flex;
    box-sizing: border-box;
    min-height: 100vh;
    justify-content: center;
    align-items: center;

    .xbox {
        width: 520px;
        height: 686px;

        .title_Wrapper {
            height: 80px;
            margin-top: 60px;
        }

        .login_choice {
            display: flex;
            justify-content: flex-start;
            position: relative;
            height: 41px;
            

            .phone_lo,
            .email_lo {
                margin-right: 46px;
                font-size: 24px;
                cursor: pointer;
                font-weight: 500;
                color: #8b949d;
            }

            .active {
                color: #3370ff;
                font-weight: 600;
            }

            .active_phone::after {
                content: "";
                display: block;
                height: 2px;
                width: 144px;
                position: absolute;
                bottom: -2px;
                background-color: #3370ff;
            }

            .active_email::after {
                content: "";
                display: block;
                height: 2px;
                width: 96px;
                position: absolute;
                bottom: -2px;
                background-color: #3370ff;
            }

            .phone_lo:hover,
            .email_lo:hover {
                color: #3370ff;
            }
        }
    }


}
</style>