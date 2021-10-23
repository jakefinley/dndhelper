<template>
  <div class="charCard" @dragover.prevent @drop.prevent>
    <div class="canvas" @drop="dragFile" :style="{'padding': border}">
      <div class="container">
        <panZoom @init="onInit" v-if="image">
          <div class="image">
            <img alt="background" :src="image" :style="{'transform': transform}" />
          </div>
        </panZoom>
        <Overlay v-if="image" :theme="overlayTheme" />
      </div>

      <div class="prompt" v-if="!image">
        <p>Drag an image here or select a file.</p>
        <input type="file" @change="onFileChange" />
      </div>
    </div>

    <button @click="clear">Clear Image</button>
    <button @click="save">Save</button>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
import Overlay from "@/components/Overlay";

export default {
  name: "CharCard",

  components: {
    Overlay
  },

  props: {
    overlayTheme: {
      default: "default",
      type: String
    }
  },

  data() {
    return {
      image: null,
      padding: 10,
      rotation: 0,
    };
  },

  methods: {
    validateImage(file) {
      let type = file.type;
      return type === "image/png" || type === "image/jpg" || type === "image/jpeg" || type === "image/webp" || type === "image/gif" || type === "image/bmp"
    },

    onFileChange(e) {
      const file = e.target.files[0];
      if(this.validateImage(file)) {
        this.image = URL.createObjectURL(file);
      }
    },

    dragFile(e) {
      let file = e.dataTransfer.files[0];
      if(this.validateImage(file)) {
        this.image = URL.createObjectURL(file);
      }
    },

    save() {
      html2canvas(this.$el.querySelector(".canvas")).then(function(canvas) {
        document.body.appendChild(canvas);
      });
    },

    clear() {
      this.image = null;
    },

    onInit(panzoomInstance) {
      panzoomInstance.setTransformOrigin(null);
    }
  },

  computed: {
    border() {
      return `${this.padding}px`;
    },

    transform() {
      return `rotate(${this.rotation}deg)`;
    }
  }
}
</script>

<style scoped lang="scss">
  .charCard {

    .canvas {
      width: 400px;
      height: 730px;
      background: #eaeaea;
      position: relative;
    }

    .container {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .image {
      display: table-cell;
      cursor: move;
    }

    .prompt {
      position: absolute;
      top: 50%;
      left: 10px;
      right: 10px;
      text-align: center;
      transform: translateY(-50%);
      color: #000;
    }
  }
</style>