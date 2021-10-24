<template>
  <div class="overlay" :class="`theme--${theme}`" :style="{'color': textColor}">
    <header v-if="charName || charClass">
      <div class="character-meta" :style="{borderColor: borderColor, backgroundColor: overlayColor}">
        <div class="row">
          <div class="gender" v-if="charPronouns">
            <label class="name">Pronouns</label>
            <span class="val">{{charPronouns}}</span>
          </div>
          <span class="character">{{charName}}</span>
          <div class="race" v-if="charRace">
            <label class="name">Race</label>
            <span class="val">{{charRace}}</span>
          </div>
        </div>
        <span class="class" v-if="charClass">{{charClass}}</span>
      </div>
    </header>
    <main>
      <div class="vitals">
        <div class="row">
          <div class="stat hp" :style="{borderColor: borderColor, backgroundColor: overlayColor}">
            <label class="name">HP</label>
            <span class="val">{{charHP || 0}}</span>
          </div>
          <div class="stat dc" :style="{borderColor: borderColor, backgroundColor: overlayColor}">
            <label class="name">DC</label>
            <span class="val">{{charDC || 0}}</span>
          </div>
        </div>
        <div class="row">
          <div class="stat ac" :style="{borderColor: borderColor, backgroundColor: overlayColor}">
            <label class="name">AC</label>
            <span class="val">{{charAC || 0}}</span>
          </div>
          <div class="stat pp" :style="{borderColor: borderColor, backgroundColor: overlayColor}">
            <label class="name">PP</label>
            <span class="val">{{charPP || 0}}</span>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="stats">
        <div class="ability" :style="{borderColor: borderColor, backgroundColor: overlayColor}">
          <label class="name">STR</label>
          <span class="mod">{{toMod(charSTR || 0)}}</span>
          <span class="score" :style="{borderColor: borderColor, backgroundColor: overlayColor}">{{charSTR || 0}}</span>
        </div>
        <div class="ability" :style="{borderColor: borderColor, backgroundColor: overlayColor}">
          <label class="name">DEX</label>
          <span class="mod">{{toMod(charDEX || 0)}}</span>
          <span class="score" :style="{borderColor: borderColor, backgroundColor: overlayColor}">{{charDEX || 0}}</span>
        </div>
        <div class="ability" :style="{borderColor: borderColor, backgroundColor: overlayColor}">
          <label class="name">CON</label>
          <span class="mod">{{toMod(charCON || 0)}}</span>
          <span class="score" :style="{borderColor: borderColor, backgroundColor: overlayColor}">{{charCON || 0}}</span>
        </div>
        <div class="ability" :style="{borderColor: borderColor, backgroundColor: overlayColor}">
          <label class="name">INT</label>
          <span class="mod">{{toMod(charINT || 0)}}</span>
          <span class="score" :style="{borderColor: borderColor, backgroundColor: overlayColor}">{{charINT || 0}}</span>
        </div>
        <div class="ability" :style="{borderColor: borderColor, backgroundColor: overlayColor}">
          <label class="name">WIS</label>
          <span class="mod">{{toMod(charWIS || 0)}}</span>
          <span class="score" :style="{borderColor: borderColor, backgroundColor: overlayColor}">{{charWIS || 0}}</span>
        </div>
        <div class="ability" :style="{borderColor: borderColor, backgroundColor: overlayColor}">
          <label class="name">CHA</label>
          <span class="mod">{{toMod(charCHA || 0)}}</span>
          <span class="score" :style="{borderColor: borderColor, backgroundColor: overlayColor}">{{charCHA || 0}}</span>
        </div>
      </div>

      <div class="saves">
        <div class="save" :style="{borderColor: borderColor, backgroundColor: overlayColor}">
          <label class="name">STR</label>
          <div class="mod">{{formatMod(charSTRsave || 0)}}</div>
        </div>
        <div class="save" :style="{borderColor: borderColor, backgroundColor: overlayColor}">
          <label class="name">DEX</label>
          <div class="mod">{{formatMod(charDEXsave || 0)}}</div>
        </div>
        <div class="save" :style="{borderColor: borderColor, backgroundColor: overlayColor}">
          <label class="name">CON</label>
          <div class="mod">{{formatMod(charCONsave || 0)}}</div>
        </div>
        <div class="save" :style="{borderColor: borderColor, backgroundColor: overlayColor}">
          <label class="name">INT</label>
          <div class="mod">{{formatMod(charINTsave || 0)}}</div>
        </div>
        <div class="save" :style="{borderColor: borderColor, backgroundColor: overlayColor}">
          <label class="name">WIS</label>
          <div class="mod">{{formatMod(charWISsave || 0)}}</div>
        </div>
        <div class="save" :style="{borderColor: borderColor, backgroundColor: overlayColor}">
          <label class="name">CHA</label>
          <div class="mod">{{formatMod(charCHAsave || 0)}}</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "Overlay",

  props: {
    theme: {
      type: String,
      default: "default"
    },
  },

  data() {
    return {

    }
  },

  methods: {
    toMod(attr) {
      return this.formatMod(Math.floor((attr - 10) / 2));
    },

    formatMod(mod) {
      if(mod >= 0) {
        return `+${mod}`;
      } else {
        return mod;
      }
    },
    
    rgbaToCSS(color) {
      return `rgba(${color.rgba.r}, ${color.rgba.g}, ${color.rgba.b}, ${color.rgba.a})`;
    }
  },

  computed: {
    ...mapState({
      charName: state => state.character.name,

      charPronouns: state => state.character.pronouns,

      charRace: state => state.character.race,

      charClass: state => state.character.class,

      charHP: state => state.character.hp,

      charAC: state => state.character.ac,

      charDC: state => state.character.dc,

      charPP: state => state.character.pp,

      charSTR: state => state.character.stats.str,

      charDEX: state => state.character.stats.dex,

      charCON: state => state.character.stats.con,

      charINT: state => state.character.stats.int,

      charWIS: state => state.character.stats.wis,

      charCHA: state => state.character.stats.cha,

      charSTRsave: state => state.character.saves.str,

      charDEXsave: state => state.character.saves.dex,

      charCONsave: state => state.character.saves.con,

      charINTsave: state => state.character.saves.int,

      charWISsave: state => state.character.saves.wis,

      charCHAsave: state => state.character.saves.cha,
    }),
    
    textColor() {
      return this.rgbaToCSS(this.$store.state.card.textColor);
    },

    borderColor() {
      return this.rgbaToCSS(this.$store.state.card.borderColor);
    },

    overlayColor() {
      return this.rgbaToCSS(this.$store.state.card.overlayColor);
    },
  }
}
</script>

<style scoped lang="scss">
.overlay {
  pointer-events: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: stretch;

  &.theme {
    &--default {

      header {
        flex: 1 0 auto;
      }

      main {
        flex: 1 1 auto;
      }

      footer {
        flex: 0 1 auto;
      }

      .character-meta {
        text-align: center;
        position: relative;
        display: block;
        justify-content: space-between;
        align-items: flex-start;
        flex-flow: row wrap;
        padding: 5px;
        border-bottom-right-radius: 50px;
        border-bottom-left-radius: 50px;
        border: 1px solid;
        border-top: none;

        .row {
          display: grid;
          grid-template-columns: 1fr 5fr 1fr;
          grid-template-rows: 1fr;
          grid-column-gap: 0;
          grid-row-gap: 0;
        }

        .character {
          font-weight: 600;
          font-size: 200%;
          padding: 5px;
          //text-shadow: 0 0 10px rgba(255, 255, 255, .5);
          display: block;
          text-align: center;
          grid-column: 2;
        }

        .title {
          text-decoration: underline;
          display: block;
        }

        .val {
          display: block;
        }

        .gender {
          padding: 5px;
          font-size: 80%;
          line-height: 1.2;
        }

        .race {
          padding: 5px;
          font-size: 80%;
          line-height: 1.2;
        }

        .class {
          flex: 1 1 auto;
          padding: 5px;
          font-size: 90%;
          display: block;
        }
      }

      .stats {
        padding: 20px;
        display: grid;
        grid-template-columns: [col1] 1fr [col2] 1fr [col3] 1fr [end];
        column-gap: 30px;
        row-gap: 30px;
        text-align: center;
        margin-bottom: 1em;
        align-self: flex-end;

        .ability {
          border-radius: 10px;
          display: inline-block;
          width: 60px;
          height: 60px;
          position: relative;
          margin: auto;
          border: 1px solid;

          .name {
            position: absolute;
            top: 0;
            left: 50%;
            text-align: center;
            text-transform: uppercase;
            transform: translate(-50%, 0%);
            font-size: 65%;
            padding: 2px 5px;
            border-radius: 5px;
          }

          .mod {
            font-size: 200%;
            font-weight: 600;
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            text-align: center;
            margin: auto;
            transform: translateY(-50%);
            padding-bottom: 2px;
          }

          .score {
            font-size: 90%;
            position: absolute;
            bottom: 0;
            left: 50%;
            box-shadow: 5px 5px 5px rgba(0,0,0,.5);
            padding: 5px;
            border-radius: 50px;
            transform: translate(-50%, 50%);
            margin: auto;
            border: 1px solid;
          }
        }
      }

      .saves {
        margin: 20px;
        display: grid;
        grid-template-columns: [start] 1fr 1fr 1fr 1fr 1fr 1fr [end];
        column-gap: 15px;

        .save {
          padding: 5px;
          border: 1px solid;
          border-radius: 10px;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;

          .name {
            text-align: center;
            text-transform: uppercase;
            font-size: 65%;
            margin-bottom: 5px;
          }

          .mod {
            text-align: center;
            font-size: 125%;
          }
        }
      }

      .vitals {
        .row {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: flex-start;
          padding: 10px 0;

          .stat:first-child {
            border-left: none;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }

          .stat:last-child {
            border-right: none;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
        }

        .stat {
          padding: 10px;
          border: 1px solid;
          border-radius: 10px;
          text-align: center;
          width: 70px;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;

          .name {
            font-size: 75%;
            margin-bottom: 5px;
          }

          .val {
            font-size: 200%;
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>