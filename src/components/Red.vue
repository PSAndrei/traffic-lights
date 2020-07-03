<template>
    <div class="light-container">
        <div class="light-container__item light-container__red_active"></div>
        <div class="light-container__item light-container__yellow_unactive"></div>
        <div class="light-container__item light-container__green_unactive"></div>
    </div>
</template>
<script>
import './style.scss'

export default {
    name: 'Red',
    props: ['from'],
    mounted(){
        setTimeout(()=>{
            this.$emit('change', {
                to: 'Yellow',
                from: 'Red'
            })
        }, 10000)
    }
}
</script>
