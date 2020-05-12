<script>
  export let files;

  function remove(file) {
    // Change "files" to all files that are not the file to be deleted
    // files = files.filter(file => file !== file);
    console.log(file);
    // files = files.filter(file => file !== file);
    // files = <file></file>s.splice(file, 0);
    files = files.filter(item => item !== file);
  }

  $: {
    console.log(files);
  }
  const changed = event => {
    console.log("changed", event);
    files = Object.values(event.target.files);
  };
</script>

<style>
  .inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  .inputfile + label {
    font-size: 1.25em;
    font-weight: 700;
    color: white;
    background-color: black;
    display: inline-block;
    cursor: pointer; /* "hand" cursor */
  }

  .inputfile:focus + label,
  .inputfile + label:hover {
    background-color: red;
    outline: 1px dotted #000;
    outline: -webkit-focus-ring-color auto 5px;
  }
</style>

<label for="file">
  <slot />
  <input
    type="file"
    multiple
    accept="image/*"
    bind:files
    on:change={changed}
    name="file"
    id="file"
    class="inputfile" />
  <div class="area" />
</label>

{#if files && files}
  {#each files as file, index}
    <div
      class="cols-2 bg-primary-light flex justify-between mb-x0p25 items-center
      h-x1p5">
      <span class="m-x0p5">{file.name}</span>
      <button
        on:click|preventDefault={() => remove(file)}
        class="bg-primary-light h-x1p5 w-x1p5 flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="h-x1 w-x1">
          <path d="M0 0h18v18H0zm0 0h18v18H0z" fill="none" />
          <path
            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47
            4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
        </svg>
      </button>
    </div>
  {/each}
{/if}
