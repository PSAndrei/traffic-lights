<template>
    <div class="light-container">
        <div class="light-container__item light-container__red_unactive"></div>
        <div class="light-container__item light-container__yellow_unactive"></div>
        <div class="light-container__item light-container__green_active"></div>
    </div>
</template>
<script>
import './style.scss'

export default {
    name: 'Green',
    props: ['from'],
    mounted(){
        setTimeout(()=>{
            this.$emit('change', {
                to: 'Yellow',
                from: 'Green'
            })
        }, 15000)
    }
}
</script>
