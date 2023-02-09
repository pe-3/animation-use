<template>
    <div>
        <button @click="shuffle">shuffle</button>
        <transition-group name="cell" tag="div" class="container">
            <div 
                v-for="item in items" 
                :key="item.id"
                class="cell"
            >{{ item.number }}</div>
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
            items: Array.apply(null, { length: 81 }).map(function(_, index) {
                return {
                    id: index,
                    number: (index % 9) + 1
                };
            }),
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

.container {
    display: flex;
    flex-wrap: wrap;
    width: 238px;
    margin-top: 10px;
}
.cell {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 25px;
    height: 25px;
    border: 1px solid #aaa;
    margin-right: -1px;
    margin-bottom: -1px;
}
.cell:nth-child(3n) {
    margin-right: 0;
}
.cell:nth-child(27n) {
    margin-bottom: 0;
}
.cell-move {
    transition: transform 1s;
}
      
</style>