<template>
  <span class="icon" :class="classMap[itemtype]"></span>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      itemtype: {
        type: Number
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  
  .icon
    display: inline-block
    vertical-align: top
    width: 12px
    height: 12px
    margin-right: 2px
    background-size: 12px 12px
    background-repeat: no-repeat
  .size1
    &.decrease
      bg-image('decrease_1')
    &.discount
      bg-image('discount_1')
    &.guarantee
      bg-image('guarantee_1')
    &.invoice
      bg-image('invoice_1')
    &.special
      bg-image('special_1')
  .size2
    &.decrease
      bg-image('decrease_2')
    &.discount
      bg-image('discount_2')
    &.guarantee
      bg-image('guarantee_2')
    &.invoice
      bg-image('invoice_2')
    &.special
      bg-image('special_2')
  .size3
    &.decrease
      bg-image('decrease_3')
    &.discount
      bg-image('discount_3')
    &.guarantee
      bg-image('guarantee_3')
    &.invoice
      bg-image('invoice_3')
    &.special
      bg-image('special_3')
  .size4
    &.decrease
      bg-image('decrease_4')
    &.discount
      bg-image('discount_4')
    &.guarantee
      bg-image('guarantee_4')
    &.invoice
      bg-image('invoice_4')
    &.special
      bg-image('special_4')
</style>