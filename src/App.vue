<template>
  <div>
    <h1>{{title}}</h1>
    <h2>{{subTitle}}</h2>
    <button @click="handleClick">Change Title</button>
    <p>Author: {{author}}</p>
    <input v-model="title" placeholder="input something!"/>
    <MyComponent v-model="id"></MyComponent>
    <p>{{id}}</p>
    <button @click="handleIdChange">Change ID</button>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import MyComponent from './Component.vue'

@Component({
  components: {
    MyComponent
  }
})
export default class App extends Vue {
  // props
  @Prop({ default: 'lgybetter' }) author?: string
  // computed
  get subTitle (): string {
    return this.title + 'So nice!'
  }
  // methods
  handleClick () {
    this.title = 'Try it!'
  }
  handleIdChange () {
    this.id = 'betterlin@tencent'
  }
  // data
  id: string = 'betterlin';
  title = 'Hello Vue with TypeScript!'
  components =  {
    'MyComponent': MyComponent
  }
  // watch
  @Watch('title', { immediate: false, deep: false })
  handleTitleChange (val: string, oldVal: string) {
    console.log(val, oldVal);
  }
  created () {
    console.log('created!')
  }
  mounted () {
    console.log('mounted!')
  }
}
</script>
