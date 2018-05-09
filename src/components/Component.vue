<template>
  <div>
    <input v-model="temp" placeholder="input something!"/>
    <button @click="handleClick(temp)">Emit change</button>
  </div>
</template>


<script lang="ts">
import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
@Component
export default class MyComponent extends Vue {
  @Prop({ default: 'lgybetter' }) value: string
  temp: string = ''
  @Emit('input')
  emitInput (val: string) {
    this.temp = val
  }
  handleClick () {
    this.emitInput('linguangyu')
  }
  mounted () {
    this.temp = this.value
  }
  @Watch('value')
  handleNameChange (val: string, oldVal: string) {
    this.temp = val
  }
}
</script>
