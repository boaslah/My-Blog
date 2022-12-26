<template>
    <div class="footer">
        <span>Made with <span class="heart">&hearts;</span> from Gbehlay, Nimba County, Liberia</span>
    </div>
</template>
<script>

export default {
    name: "Footer"
}
</script>

<style lang="scss" scoped>

    .heart{
        color: red;
        font-size: 23px;
    }

    span{
        font-family: 'Roboto', serif;
    }

    .footer{
        border-top: solid 1px;
        padding: 3%;
        overflow: hidden;
        /* width: 100%; */
        margin: 15% -0.4% -2% -2%;
        text-align: center;
    }
    @media only screen and (max-width: 600px) {
        .footer{
            margin-top: 30%;
            padding: 7% 3% 7% 3%;
        }
    }
</style>
