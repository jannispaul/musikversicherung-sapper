<script>
  export let files = [];
  let isDraggingOver = false;

  // Log all changes to files
  $: {
    console.log(files);
  }

  // Set isDraggingOver to true when entering the drag zone
  function handleDragEnter(e) {
    isDraggingOver = true;
  }

  // Set isDraggingOver to false when leaving the drag zone
  function handleDragLeave(e) {
    isDraggingOver = false;
  }

  //  Add files from drag and drop to files array
  const handleDragDrop = event => {
    // Spread existing items in array with new files from input into files-array
    files = [...files, ...Object.values(event.dataTransfer.files)];
    handleDragLeave();
  };

  // Add files from input button to files array
  const handleFiles = event => {
    // Spread existing items in array with new files from input into files-array
    files = [...files, ...Object.values(event.target.files)];
  };

  // Remove for upload selected file from files array
  function remove(item) {
    // Change "files" to all individual files that are not the item to be deleted
    files = files.filter(file => file !== item);
  }
</script>

<style>
  .drop-area {
    border: 2px dashed #ccc;
    width: 100%;
    margin: auto;
    padding: 20px;
  }
  .highlight {
    border-color: purple;
  }
</style>

<label>
  <slot />
</label>
<div
  class="drop-area flex flex-col justify-center items-center"
  class:highlight={isDraggingOver === true}
  on:dragenter|preventDefault={handleDragEnter}
  on:dragleave|preventDefault={handleDragLeave}
  on:drop|preventDefault={handleDragDrop}
  on:dragover|preventDefault>
  <input
    type="file"
    id="fileUpload"
    multiple
    accept="image/*"
    on:change={handleFiles}
    class="hidden" />
  <label class="primary-button cursor-pointer" for="fileUpload">
    Datei auswählen
  </label>
  <p>oder per Drag and Drop</p>
</div>
{#if files}
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
