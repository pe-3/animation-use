<template>
    <div>
        <button @click="shuffle">shuffle</button>
        <button @click="add">add</button>
        <button @click="remove">remove</button>
        <transition-group name="list-complete" tag="ul">
            <li 
                v-for="num in items" 
                :key="num"
                class="list-complete-item"
            >{{ num }}</li>
        </transition-group>
    </div>
</template>

<script>
const _shuffle = function(items) {
    const input = [...items];
    const res = [];
    const len = input.length;
    for(let i = 0; i < len; i ++) {
        let index = Math.random() * (len - i);
        index = Math.floor(index);
        res.push(...input.splice(index, 1));
    }
    return res;
}

export default {
    name: 'animate-com',
    data() {
        return {
            items: [1,2,3,4,5,6,7,8,9],
            nextNum: 10
        }
    },
    methods: {
        shuffle: function () {
            this.items = _shuffle(this.items);
        },
        randomIndex() {
            return Math.floor(Math.random() * this.items.length);
        },
        add() {
            this.items.splice(this.randomIndex(), 0, this.nextNum ++);
        },
        remove() {
            this.items.splice(this.randomIndex(), 1);
        }
    }
}
</script>

<style lang="stylus">

.list-complete-move
    transition all 1s

.list-complete-enter 
.list-complete-leave-to
    opacity 0
    transform translateY(30px)

.list-complete-leave-active 
    position absolute

.list-complete-item
    display inline-block
    margin-right 10px
</style>