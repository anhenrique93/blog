<template>
    <div>
        <MdEditor v-show="togle === 'pt'" language="en-US" theme="dark" v-model="ptPreview" />
        <MdEditor v-show="togle === 'en'" language="en-US" theme="dark" v-model="enPreview" />
    </div>   
</template>

<script>
import { MdEditor, MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

export default {
    props: ["togle"],
    name: "MarkdownEditor",
    components: {
        MdEditor,
        MdPreview
    },
    data() {
        return {
            ptPreview: "",
            enPreview: ""
        }
    },
    watch: {
        ptPreview: function (text) {
            this.$emit('send-text', text)
        },
        enPreview: function (text) {
            this.$emit('send-text', text)
        }
    }
}
</script>