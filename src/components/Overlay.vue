<template>
  <div class="overlay" :class="`theme--${theme}`">
    <header>
      <div class="character-meta">
        <div class="row">
          <div class="gender">
            <label class="name">Pronouns</label>
            <span class="val">{{charPronouns}}</span>
          </div>
          <span class="character">{{charName}}</span>
          <div class="race">
            <label class="name">Race</label>
            <span class="val">{{charRace}}</span>
          </div>
        </div>
        <span class="class">{{charClass}}</span>
      </div>
    </header>
    <main>
      <div class="vitals">
        <div class="row">
          <div class="stat hp">
            <label class="name">HP</label>
            <span class="val">{{charHP}}</span>
          </div>
          <div class="stat dc">
            <label class="name">DC</label>
            <span class="val">{{charDC}}</span>
          </div>
        </div>
        <div class="row">
          <div class="stat ac">
            <label class="name">AC</label>
            <span class="val">{{charAC}}</span>
          </div>
          <div class="stat pp">
            <label class="name">PP</label>
            <span class="val">{{charPP}}</span>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="stats">
        <div class="ability">
          <label class="name">STR</label>
          <span class="mod">{{charSTRmod}}</span>
          <span class="score">{{charSTR}}</span>
        </div>
        <div class="ability">
          <label class="name">DEX</label>
          <span class="mod">{{charDEXmod}}</span>
          <span class="score">{{charDEX}}</span>
        </div>
        <div class="ability">
          <label class="name">CON</label>
          <span class="mod">{{charCONmod}}</span>
          <span class="score">{{charCON}}</span>
        </div>
        <div class="ability">
          <label class="name">INT</label>
          <span class="mod">{{charINTmod}}</span>
          <span class="score">{{charINT}}</span>
        </div>
        <div class="ability">
          <label class="name">WIS</label>
          <span class="mod">{{charWISmod}}</span>
          <span class="score">{{charWIS}}</span>
        </div>
        <div class="ability">
          <label class="name">CHA</label>
          <span class="mod">{{charCHAmod}}</span>
          <span class="score">{{charCHA}}</span>
        </div>
      </div>

      <div class="saves">
        <div class="save">
          <label class="name">STR</label>
          <div class="mod">+5</div>
        </div>
        <div class="save">
          <label class="name">DEX</label>
          <div class="mod">+3</div>
        </div>
        <div class="save">
          <label class="name">CON</label>
          <div class="mod">+0</div>
        </div>
        <div class="save">
          <label class="name">INT</label>
          <div class="mod">+0</div>
        </div>
        <div class="save">
          <label class="name">WIS</label>
          <div class="mod">+8</div>
        </div>
        <div class="save">
          <label class="name">CHA</label>
          <div class="mod">+6</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Overlay",

  props: {
    theme: {
      type: String,
      default: "default"
    },

    charPronouns: {
      type: String,
      default: "They/Them"
    },

    charName: {
      type: String,
      default: "Example"
    },

    charRace: {
      type: String,
      default: "Human"
    },

    charClass: {
      type: String,
      default: "Class(es) and Level(s)"
    },

    charHP: {
      type: Number,
      default: 0
    },

    charAC: {
      type: Number,
      default: 0
    },

    charDC: {
      type: Number,
      default: 0
    },

    charPP: {
      type: Number,
      default: 0
    },

    charSTR: {
      type: Number,
      default: 10
    },

    charDEX: {
      type: Number,
      default: 10
    },

    charCON: {
      type: Number,
      default: 10
    },

    charINT: {
      type: Number,
      default: 10
    },

    charWIS: {
      type: Number,
      default: 10
    },

    charCHA: {
      type: Number,
      default: 10
    },
  },

  data() {
    return {

    }
  },

  methods: {
    toMod(attr) {
      let mod = Math.floor((attr - 10) / 2);

      if(mod >= 0) {
        return `+${mod}`;
      } else {
        return `-${mod}`;
      }
    }
  },

  computed: {
    charSTRmod() {
      return this.toMod(this.charSTR);
    },

    charDEXmod() {
      return this.toMod(this.charDEX);
    },

    charCONmod() {
      return this.toMod(this.charCON);
    },

    charINTmod() {
      return this.toMod(this.charINT);
    },

    charWISmod() {
      return this.toMod(this.charWIS);
    },

    charCHAmod() {
      return this.toMod(this.charCHA);
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
        background-color: rgba(0,0,0,.75);
        position: relative;
        display: block;
        justify-content: space-between;
        align-items: flex-start;
        flex-flow: row wrap;
        padding: 5px;
        border-bottom-right-radius: 50px;
        border-bottom-left-radius: 50px;
        box-shadow: 5px 5px 5px rgba(0,0,0,.5);
        border: 1px solid #435aa4;
        border-top: none;

        .row {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: flex-start;
        }

        .character {
          font-weight: 600;
          font-size: 200%;
          padding: 5px;
          text-shadow: 0 0 10px rgba(255, 255, 255, .5);
          display: block;
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
          background-color: rgba(0,0,0,.75);
          box-shadow: 5px 5px 5px rgba(0,0,0,.5);
          border-radius: 10px;
          display: inline-block;
          width: 60px;
          height: 60px;
          position: relative;
          margin: auto;
          border: 1px solid #435aa4;

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
            background-color: rgba(0,0,0,.75);
            box-shadow: 5px 5px 5px rgba(0,0,0,.5);
            padding: 5px;
            border-radius: 50px;
            transform: translate(-50%, 50%);
            margin: auto;
            border: 1px solid #435aa4;
          }
        }
      }

      .saves {
        margin: 20px;
        display: grid;
        grid-template-columns: [start] 1fr 1fr 1fr 1fr 1fr 1fr [end];
        column-gap: 15px;

        .save {
          background-color: rgba(0,0,0,.75);
          box-shadow: 5px 5px 5px rgba(0,0,0,.5);
          padding: 5px;
          border: 1px solid #435aa4;
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
          background-color: rgba(0,0,0,.75);
          box-shadow: 5px 5px 5px rgba(0,0,0,.5);
          padding: 10px;
          border: 1px solid #435aa4;
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