<script>
  export let files;

  function remove(file) {
    files.splice(files.indexOf(file));
    files = [...files];
  }
</script>

<input type="file" bind:files multiple />

{#if files && files}
  <p>
    {#each files as file}
      <div class="cols-2 bg-primary-light flex justify-between mb-x0p25">
        <span class="m-x0p5">{file.name}</span>
        <button
          on:click={() => remove(file)}
          class="block hover:bg-light p-x0p5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-x0p5 w-x0p5 ">
            <!-- <path d="M0 0h18v18H0zm0 0h18v18H0z" fill="none" /> -->
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47
              4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
          </svg>
        </button>
      </div>
    {/each}
  </p>
{/if}
