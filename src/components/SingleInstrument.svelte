<script>
  import Toggle from "./Toggle.svelte";

  export let instrument;
  export let index;
</script>

<style>
  .toggle {
    flex: 1 0 20%;
  }
  .toggle .option {
    height: 9.5vw;
    margin-bottom: 4vw;
  }

  @media (min-width: 768px) {
    .toggle > label {
      padding: 0 1vw;
      height: 4.1vw;
      display: flex;
      align-items: center;
      margin-right: -0.2vw;
    }
    .toggle .option {
      height: 4.1vw;
      margin-bottom: 2vw;
    }
  }
</style>

<div
  class="single-instrument flex flex-wrap md:flex-no-wrap items-end mb-x1p5
  md:mb-x0p5">
  <label
    class="flex md:flex-grow flex-col items-start flex-none md:flex-auto w-full
    md:w-1/2 md:mr-x0p5">
    Instrument/Equipment {index + 1}
    <input
      name="instrument"
      type="text"
      bind:value={instrument.name}
      class="w-full "
      autofocus />
  </label>
  <label
    class="flex flex-col flex-grow-0 flex-1 order-1 mr-x0p5 w-2/6 md:w-auto
    md:w-1/6">
    Wert in €
    <input
      type="number"
      name="value"
      pattern="\d*"
      bind:value={instrument.value} />
  </label>
  <div class="toggle flex order-2 md:order-2">
    <input
      type="radio"
      name={'valueType' + index}
      bind:group={instrument.valueType}
      value="Neuwert"
      id={'neuwert' + index} />
    <label
      class:active={instrument.valueType === 'Neuwert'}
      class="option flex-1"
      for={'neuwert' + index}>
      <p>Neuwert</p>
    </label>
    <!-- <label for="Zeitwert"> -->
    <input
      type="radio"
      name={'valueType' + index}
      bind:group={instrument.valueType}
      value="Zeitwert"
      id={'zeitwert' + index} />
    <label
      class:active={instrument.valueType === 'Zeitwert'}
      class="option flex-1"
      for={'zeitwert' + index}>
      <p>Zeitwert</p>
    </label>
  </div>

</div>
