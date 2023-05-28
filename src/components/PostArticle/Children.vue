
<template>
    <button @click="childClick">
        Children click
    </button>
</template>

<script>

export default ({
    methods: {
        childClick() {
            console.log('child click')

            this.$emit('tadaaaa', 123123123123);
        }
    }
})

</script>