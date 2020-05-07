<script>
  import Toggle from "./Toggle.svelte";

  export let instrument;
  export let index;
</script>

<style>
  .toggle > label {
    min-height: fit-content;
    padding: 1vw 1.5vw;
    margin-bottom: 2vw;
    margin-right: -0.4vw;
    @apply border-primary;
  }
  @media (min-width: 768px) {
    .toggle > label {
      padding: 0 1vw;
      height: 4.1vw;
      display: flex;
      align-items: center;
      margin-right: -0.2vw;
    }
  }
</style>

<div
  class="single-instrument flex flex-wrap md:flex-no-wrap items-end mb-x1p5
  md:mb-x0p5">
  <label
    class="flex md:flex-grow flex-col items-start flex-none md:flex-auto w-full
    md:w-1/2 md:mr-x0p5">
    Position {index + 1}
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
    Wert
    <input name="value" bind:value={instrument.value} />
  </label>
  <div class="toggle flex order-2 md:order-2">
    <label class:active={instrument.valueType === 'Neuwert'} class="flex-1">
      <input
        type="radio"
        name={'valueType' + index}
        bind:group={instrument.valueType}
        value="Neuwert" />
      <span>Neuwert</span>
    </label>
    <!-- <label for="Zeitwert"> -->
    <label class:active={instrument.valueType === 'Zeitwert'} class="flex-1">
      <input
        type="radio"
        name={'valueType' + index}
        bind:group={instrument.valueType}
        value="Zeitwert" />
      Zeitwert
    </label>
  </div>

</div>
