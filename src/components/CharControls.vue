<template>
  <form class="controls">
    <section class="meta">
      <label>
        <span>Character Name:</span>
        <input type="text" v-model="name" @input="update">
      </label>
      <label>
        <span>Pronouns:</span>
        <input type="text" v-model="pronouns" @input="update">
      </label>
      <label>
        <span>Race:</span>
        <input type="text" v-model="race" @input="update">
      </label>
      <label>
        <span>Class(es):</span>
        <input type="text" v-model="charClass" @input="update">
      </label>
    </section>

    <section class="atts">
      <label>
        <span>Health (HP):</span>
        <input type="number" v-model="hp" @input="update">
      </label>
      <label>
        <span>Armor Class (AC):</span>
        <input type="number" v-model="ac" @input="update">
      </label>
      <label>
        <span>Spell Save DC:</span>
        <input type="number" v-model="dc" @input="update">
      </label>
      <label>
        <span>Passive Perception (PP):</span>
        <input type="number" v-model="pp" @input="update">
      </label>
    </section>

    <section class="stats">
      <label>
        <span>Strength (STR):</span>
        <input type="number" v-model="str" @input="update">
      </label>
      <label>
        <span>Dexterity (DEX):</span>
        <input type="number" v-model="dex" @input="update">
      </label>
      <label>
        <span>Constitution (CON):</span>
        <input type="number" v-model="con" @input="update">
      </label>
      <label>
        <span>Intelligence (INT):</span>
        <input type="number" v-model="int" @input="update">
      </label>
      <label>
        <span>Wisdom (WIS):</span>
        <input type="number" v-model="wis" @input="update">
      </label>
      <label>
        <span>Charisma (CHA):</span>
        <input type="number" v-model="cha" @input="update">
      </label>
    </section>

    <section class="saves">
      <label>
        <span>STR Save:</span>
        <input type="number" v-model="strSave" @input="update">
      </label>
      <label>
        <span>DEX Save:</span>
        <input type="number" v-model="dexSave" @input="update">
      </label>
      <label>
        <span>CON Save:</span>
        <input type="number" v-model="conSave" @input="update">
      </label>
      <label>
        <span>INT Save:</span>
        <input type="number" v-model="intSave" @input="update">
      </label>
      <label>
        <span>WIS Save:</span>
        <input type="number" v-model="wisSave" @input="update">
      </label>
      <label>
        <span>CHA Save:</span>
        <input type="number" v-model="chaSave" @input="update">
      </label>
    </section>
  </form>
</template>

<script>
export default {
  name: "CharControls",

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
  },

  methods: {
    update(e) {
      console.log(e);

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
    }
  }
}
</script>

<style scoped lang="scss">
  section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin-bottom: 1em;
    padding: 20px;
    border: 1px solid #000;
    background: #eaeaea;
    color: #000;
    border-radius: 5px;
  }

  label {
    text-align: left;
    width: 100%;

    span {
      display: block;
    }
  }

  input {
    width: 100%;
  }
</style>