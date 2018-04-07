<style scoped>
    .layout-con{
        height: 100%;
        width: 100%;
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
    #logo {
    overflow: hidden;
}
</style>
<template>
    <div class="layout">
        <Layout :style="{minHeight: '100vh'}">
            <Sider>
                <div id="logo" style="width: auto; height: 64px;">
                    <img src="../assets/logo.jpg" alt="logo">
                </div>
                <Menu active-name="1-1" theme="dark" width="auto" :open-names="['1']">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                                Navigation One
                        </template>
                    <MenuGroup title="Item 1">
                        <router-link to="/home/content1">
                        <MenuItem name="1-1">Option 1</MenuItem>
                        </router-link>
                        <router-link to="/home/content2">
                        <MenuItem name="1-2">Option 2</MenuItem>
                        </router-link>
                    </MenuGroup>
                    <MenuGroup title="Item 2">
                        <MenuItem name="1-3">Option 3</MenuItem>
                        <MenuItem name="1-4">Option 4</MenuItem>
                    </MenuGroup>
                     </Submenu>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
                <router-view></router-view>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {

    }
</script>
