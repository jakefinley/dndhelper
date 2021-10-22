<template>
  <div class="charCard" @dragover.prevent @drop.prevent>
    <div class="canvas" @drop="dragFile" :style="{'padding': border}">
      <div class="container">
        <panZoom @init="onInit">
          <div class="image">
            <img alt="background" :src="image" :style="{'transform': transform}" />
          </div>
        </panZoom>
        <Overlay v-if="image" />
      </div>

      <div class="prompt" v-if="!image">
        <p>Drag an image here or select a file.</p>
        <input type="file" @change="onFileChange" />
      </div>
    </div>

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

  data() {
    return {
      image: null,
      padding: 10,
      rotation: 0,
    };
  },

  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.image = URL.createObjectURL(file);
    },

    dragFile(e) {
      this.image = URL.createObjectURL(e.dataTransfer.files[0]);
    },

    save() {
      html2canvas(this.$el.querySelector(".canvas")).then(function(canvas) {
        document.body.appendChild(canvas);
      });
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
    }

    .prompt {
      position: absolute;
      top: 50%;
      left: 10px;
      right: 10px;
      text-align: center;
      transform: translateY(-50%);
    }
  }
</style>