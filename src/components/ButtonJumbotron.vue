<template>
<p>{{ button.title }}</p>
</template>

<script>
import { store } from '../store.js';

export default {
    props: {
        button: Object,
    },
    data() {
        return {
            store,
        }
    }

}
</script>


<style lang="scss" scoped>
.facebook {
    text-align: center;
    background-color: #4166b2;
    border-color: #6a8ad3;
    color: #fff;
    box-shadow: 0 3px 0 1px rgb(0 0 0 / 30%);
    display: inline-block;
}

.google {
    background-color: #4485f4;
    border-color: #6a8ad3;
    color: #fff;
    box-shadow: 0 3px 0 1px rgb(0 0 0 / 30%);
    display: inline-block;
    text-align: center;
}

.apple {
    box-shadow: 0 3px 0 1px rgb(0 0 0 / 30%);
    display: inline-block;
    text-align: center;
    background-color: #fff;
    border-color: #dfdfdf;
    color: #000;
    border-radius: 5px;
    border-style: solid;
}
</style>