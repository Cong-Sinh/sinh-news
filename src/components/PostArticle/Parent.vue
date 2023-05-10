<template>
    Parents
    <Children @tadaaaa="onChildClick" />
</template>

<script>
import Children from './Children.vue';


export default (
    {
        components: {
            Children
        },
        methods: {
            onChildClick($event) {
                console.log($event, '$even from parent')
            }
        }
    }
)
</script>