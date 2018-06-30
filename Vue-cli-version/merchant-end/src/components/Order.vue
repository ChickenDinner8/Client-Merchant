<template>
    <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Order</BreadcrumbItem>
        </Breadcrumb>
        <div class="main-wrapper">
                
        </div>
    </Content>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .main-wrapper {
        min-height: 500px;
        width: 100%;
        border: 1px solid #dddee1;
        border-color: #e9eaec;
        background: #fff;
        border-radius: 4px;
        font-size: 14px;
        box-sizing: border-box;
    }
</style>