<template>
    <div class="header">
        <div class="left">
            <RouterLink to="/">
                <img src="https://lib.tsinghua.edu.cn/images/logo1.png" alt="logo.png">
            </RouterLink>
            <div class="date-num">
                <a class="date" href="#" title="开馆时间">
                    <span>8:00 ~ 22:00</span>
                </a>
                <a href="#" class="people_num">
                    <div class="people_num_box">
                        <img src="https://lib.tsinghua.edu.cn/images/chair.png" alt="chair.png">
                        <div class="num">
                            <i title="已使用座位量"><span>691</span></i>
                            /
                            <span title="座位总量">1616</span>
                        </div>
                    </div>
                    <div class="peoplebox">
                        <img src="https://lib.tsinghua.edu.cn/images/people.png" alt="people.png">
                        <div class="people" title="馆内人数">
                            <span> 1553 </span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div class="right">
            <ul class="right-ul">
                <li>
                    <a href="#">
                        <img src="https://lib.tsinghua.edu.cn/images/icons05.png" alt="首页.png">
                        <span>首页</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="https://lib.tsinghua.edu.cn/images/icons06.png" alt="咨询.png">
                        <span>咨询</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="https://lib.tsinghua.edu.cn/images/icons07.png" alt="服务办理.png">
                        <span>服务办理</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="https://lib.tsinghua.edu.cn/images/icons08.png" alt="我的图书馆.png">
                        <span>我的图书馆</span>
                    </a>
                </li>
            </ul>
            <div class="btn">
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.header {
    height: 84px;
    // background-color: #82318e;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 45px 0 0 45px;
    background-image: linear-gradient(to right,#82318e 60%,#b80207);
    .left {
        display: flex;
        align-items: center;

        .date-num {
            display: flex;
            height: 34px;
            margin-left: 25px;
            align-items: center;
            background-color: rgba(255, 255, 255, .16);
            border-radius: 20px;

            .date {
                display: inline-block;
                vertical-align: top;
                font-size: 16px;
                color: #fff;
                padding: 0 14px 0 42px;
                height: 100%;
                background: url(https://lib.tsinghua.edu.cn/fwbl/images/icons051.png) left center no-repeat;
                text-align: center;

                span {
                    display: inline-block;
                    line-height: 34px;
                    font-size: 14px;
                }
            }

            .people_num {
                display: flex;
                align-items: center;
                background-color: rgba(130, 49, 142, .3);
                height: 100%;
                padding-left: 10px;

                .people_num_box {
                    display: flex;
                    align-items: center;

                }
            }

            a {
                text-decoration: none;
                transition: all .3s ease 0s;

                .num,
                .people {
                    display: inline-block;
                    height: 100%;
                    padding: 0 18px 0 14px;
                    font-size: 20px;
                    color: #fff;
                    text-align: center;
                    // background-color: rgba(130, 49, 142, .3);

                    i {
                        font-style: normal;
                    }
                }
            }

            .peoplebox {
                .people {
                    font-size: 22px;
                }
            }
        }
    }

    .left:first-child {
        margin-left: 20px;
    }

    .right {
        display: flex;
        .right-ul {
            display: flex;
            align-items: center;

            li a{
                display: flex;
                align-items: center;
                text-decoration: none;
                margin-right: 30px;
            }

            span {
                display: inline-block;
                margin-left: 10px;
                color: #fff;
            }
        }
        .btn {
            width: 84px;
            cursor: pointer;
            background: url(https://lib.tsinghua.edu.cn/images/icons09.png) center center no-repeat;
        }
    }
}
</style>