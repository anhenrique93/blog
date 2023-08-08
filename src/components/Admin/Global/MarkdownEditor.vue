<template>
  <div>
    <MdEditor v-show="togle === 'pt'" language="en-US" theme="dark" v-model="ptPreview" />
    <MdEditor v-show="togle === 'en'" language="en-US" theme="dark" v-model="enPreview" />
  </div>
</template>

<script>
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

export default {
  props: ['togle', 'ptTextToUpdate', 'enTextToUpdate'],
  name: 'MarkdownEditor',
  components: {
    MdEditor
  },
  data() {
    return {
      ptPreview: '',
      enPreview: ''
    }
  },
  watch: {
    ptPreview: function (text) {
      this.$emit('send-text', text)
    },
    enPreview: function (text) {
      this.$emit('send-text', text)
    },
    ptTextToUpdate: function (text) {
      this.ptPreview = text
    },
    enTextToUpdate: function (text) {
      this.enPreview = text
    }
  }
}
</script>
