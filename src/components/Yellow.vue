<template>
    <div class="light-container">
        <div class="light-container__item light-container__red_unactive"></div>
        <div class="light-container__item light-container__yellow_active"></div>
        <div class="light-container__item light-container__green_unactive"></div>
    </div>
</template>
<script>
import './style.scss'

export default {
    name: 'Yellow',
    props: {
        from: {
            type: String,
            default: 'Red',
        }
    },
    mounted(){
        if (this.from === 'Red'){
                setTimeout(()=>{
                this.$emit('change', {
                    to: 'Green',
                    from: 'Yellow'
                })
            }, 3000)
        }
        if (this.from === 'Green'){
                setTimeout(()=>{
                this.$emit('change', {
                    to: 'Red',
                    from: 'Yellow'
                })
            }, 3000)
        }
        
    }
}
</script>
