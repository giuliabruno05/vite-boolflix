<script>
export default {
    name: "Film",
    props: {
        details: Object
    }
}
</script>
<template>
    <div class="film">
        <h3>{{ details.title }}</h3>
        <h4>{{ details.original_title }}</h4>
        <p>{{ details.original_language }}</p>
        <p>{{ details.vote_average }}</p>
    </div>
</template>
<style lang="scss" scoped>
@use "./../styles/partials/variables.scss" as *;
</style>