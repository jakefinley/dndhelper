<template>
  <form class="controls">
    <div class="col">
      <section class="meta">
        <header>
          Character Info
        </header>
        <main>
          <label>
            <span>Character Name:</span>
            <input type="text" v-model="name" @input="updateChar">
          </label>
          <label>
            <span>Pronouns:</span>
            <input type="text" v-model="pronouns" @input="updateChar">
          </label>
          <label>
            <span>Race:</span>
            <input type="text" v-model="race" @input="updateChar">
          </label>
          <label>
            <span>Class(es):</span>
            <input type="text" v-model="charClass" @input="updateChar">
          </label>
        </main>
      </section>

      <section class="atts">
        <header>
          Misc Attributes
        </header>
        <main>
          <label>
            <span>Health (HP):</span>
            <input type="number" v-model="hp" @input="updateChar">
          </label>
          <label>
            <span>Armor Class (AC):</span>
            <input type="number" v-model="ac" @input="updateChar">
          </label>
          <label>
            <span>Spell Save DC:</span>
            <input type="number" v-model="dc" @input="updateChar">
          </label>
          <label>
            <span>Passive Perception (PP):</span>
            <input type="number" v-model="pp" @input="updateChar">
          </label>
        </main>
      </section>

      <section class="stats">
        <header>
          Stats
        </header>
        <main>
          <label>
            <span>Strength (STR):</span>
            <input type="number" v-model="str" @input="updateChar">
          </label>
          <label>
            <span>Dexterity (DEX):</span>
            <input type="number" v-model="dex" @input="updateChar">
          </label>
          <label>
            <span>Constitution (CON):</span>
            <input type="number" v-model="con" @input="updateChar">
          </label>
          <label>
            <span>Intelligence (INT):</span>
            <input type="number" v-model="int" @input="updateChar">
          </label>
          <label>
            <span>Wisdom (WIS):</span>
            <input type="number" v-model="wis" @input="updateChar">
          </label>
          <label>
            <span>Charisma (CHA):</span>
            <input type="number" v-model="cha" @input="updateChar">
          </label>
        </main>

      </section>

      <section class="saves">
        <header>Saves</header>
        <main>
          <label>
            <span>STR Save:</span>
            <input type="number" v-model="strSave" @input="updateChar">
          </label>
          <label>
            <span>DEX Save:</span>
            <input type="number" v-model="dexSave" @input="updateChar">
          </label>
          <label>
            <span>CON Save:</span>
            <input type="number" v-model="conSave" @input="updateChar">
          </label>
          <label>
            <span>INT Save:</span>
            <input type="number" v-model="intSave" @input="updateChar">
          </label>
          <label>
            <span>WIS Save:</span>
            <input type="number" v-model="wisSave" @input="updateChar">
          </label>
          <label>
            <span>CHA Save:</span>
            <input type="number" v-model="chaSave" @input="updateChar">
          </label>
        </main>

      </section>
    </div>
    <div class="col">
      <section class="card">
        <header>
          Card Design
        </header>
        <main>
          <label>
            <span>Theme:</span>
            <input type="text" v-model="theme" @input="updateCard">
          </label>
          <label>
            <span>Image Rotation:</span>
            <input type="number" v-model="rotation" @input="updateCard">
          </label>
          <label>
            <span>Text Color:</span>
            <chrome-picker v-model="textColor" @input="updateCard" />
          </label>
          <label>
            <span>Border Color:</span>
            <chrome-picker v-model="borderColor" @input="updateCard" />
          </label>
          <label>
            <span>Overlay Color:</span>
            <chrome-picker v-model="overlayColor" @input="updateCard" />
          </label>
          <label>
            <span>Background Color (behind image):</span>
            <chrome-picker v-model="backgroundColor" @input="updateCard" />
          </label>
        </main>
      </section>
    </div>
  </form>
</template>

<script>
import chrome from 'vue-color/src/components/Chrome';

export default {
  name: "CharControls",

  components: {
    'chrome-picker': chrome
  },

  data() {
    return {
      name: null,
      pronouns: null,
      race: null,
      charClass: null,
      hp: null,
      ac: null,
      dc: null,
      pp: null,
      str: null,
      dex: null,
      con: null,
      int: null,
      wis: null,
      cha: null,
      strSave: null,
      dexSave: null,
      conSave: null,
      intSave: null,
      wisSave: null,
      chaSave: null,
      theme: null,
      textColor: '#000000',
      borderColor: '#000000',
      overlayColor: '#000000',
      backgroundColor: '#000000',
      rotation: null,
    }
  },

  mounted() {
    this.name = this.$store.state.character.name;
    this.pronouns = this.$store.state.character.pronouns;
    this.race = this.$store.state.character.race;
    this.charClass = this.$store.state.character.class;
    this.hp = this.$store.state.character.hp;
    this.ac = this.$store.state.character.ac;
    this.dc = this.$store.state.character.dc;
    this.pp = this.$store.state.character.pp;
    this.str = this.$store.state.character.stats.str;
    this.dex = this.$store.state.character.stats.dex;
    this.con = this.$store.state.character.stats.con;
    this.int = this.$store.state.character.stats.int;
    this.wis = this.$store.state.character.stats.wis;
    this.cha = this.$store.state.character.stats.cha;
    this.strSave = this.$store.state.character.saves.str;
    this.dexSave = this.$store.state.character.saves.dex;
    this.conSave = this.$store.state.character.saves.con;
    this.intSave = this.$store.state.character.saves.int;
    this.wisSave = this.$store.state.character.saves.wis;
    this.chaSave = this.$store.state.character.saves.cha;
    this.theme = this.$store.state.card.theme;
    this.textColor = this.$store.state.card.textColor;
    this.borderColor = this.$store.state.card.borderColor;
    this.overlayColor = this.$store.state.card.overlayColor;
    this.backgroundColor = this.$store.state.card.backgroundColor;
    this.rotation = this.$store.state.card.rotation;
  },

  methods: {
    updateChar() {

      this.$store.dispatch("character/set", {
        name: this.name,
        pronouns: this.pronouns,
        race: this.race,
        class: this.charClass,
        hp: this.hp,
        ac: this.ac,
        dc: this.dc,
        pp: this.pp,

        stats: {
          str: this.str,
          dex: this.dex,
          con: this.con,
          int: this.int,
          wis: this.wis,
          cha: this.cha,
        },

        saves: {
          str: this.strSave,
          dex: this.dexSave,
          con: this.conSave,
          int: this.intSave,
          wis: this.wisSave,
          cha: this.chaSave,
        },
      });
    },

    updateCard() {
      this.$store.dispatch("card/setText", this.textColor);
      this.$store.dispatch("card/setBorder", this.borderColor);
      this.$store.dispatch("card/setOverlay", this.overlayColor);
      this.$store.dispatch("card/setBackground", this.backgroundColor);
      this.$store.dispatch("card/setRotation", this.rotation);
    }
  }
}
</script>

<style scoped lang="scss">
  .controls {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 0;
  }

  section {
    margin-bottom: 1em;
    border: 1px solid #000;
    background: #eaeaea;
    color: #000;
    border-radius: 5px;
    position: relative;

    header {
      text-align: center;
      font-weight: bold;
      text-transform: uppercase;
      background: #000;
      color: #FFF;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border: 1px solid #000;
    }

    main {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr;
      grid-column-gap: 10px;
      grid-row-gap: 10px;
      padding: 20px;
    }
  }

  label {
    text-align: left;
    width: 100%;
    font-size: 75%;

    span {
      display: block;
    }
  }

  input {
    width: 100%;
  }
</style>