<template>
<div>
    <div class="user-box" :key="key" v-for="(i,key) in 6">
        <div>
            <div>
                <span></span>
                <p></p>
            </div>

        </div>
    </div>
</div>
    
</template>

<script>
export default {
    name:"userNewsContent",
    data(){
        return{
            list:[
                {

                }
            ]
        }
    }
}   
</script>

<style scoped>
.user-box{
    border: 1px solid gray;
    width: 90%;
    margin: 20px auto;
    height: 150px;
    background: white;
    border-radius: 10px;
}
</style>