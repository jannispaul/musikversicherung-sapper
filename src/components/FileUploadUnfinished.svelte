<script>
  let count = 0;

  // let name = "world";

  let drop_zone;
  // let objects = [{ el: null, id: 1 }, { el: null, id: 2 }, { el: null, id: 3 }];

  let dropped = [];
  let status = "";

  let dropped_in = "";
  let activeEvent = "";
  let originalX = "";
  let originalY = "";

  function handleDragEnter(e) {
    status = "You are dragging over the " + e.target.getAttribute("id");
  }

  function handleDragLeave(e) {
    status = "You left the " + e.target.getAttribute("id");
  }

  function handleDragDrop(e) {
    e.preventDefault();
    var element_id = e.dataTransfer.getData("text");
    dropped = dropped.concat(element_id);
    dropped_in = true;
    status = "You droped " + element_id + " into drop zone";
  }

  function handleDragStart(e) {
    status = "Dragging the element " + e.target.getAttribute("id");
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("text", e.target.getAttribute("id"));
  }

  function handleDragEnd(e) {
    if (dropped_in == false) {
      status = "You let the " + e.target.getAttribute("id") + " go.";
    }
    dropped_in = false;
  }

  function handleTouchStart(e) {
    status = "Touch start with element " + e.target.getAttribute("id");
    originalX = e.target.offsetLeft - 10 + "px";
    originalY = e.target.offsetTop - 10 + "px";
    activeEvent = "start";
  }

  function handleTouchMove(e) {
    let touchLocation = e.targetTouches[0];
    let pageX = Math.floor(touchLocation.pageX - 50) + "px";
    let pageY = Math.floor(touchLocation.pageY - 50) + "px";
    status = "Touch x " + pageX + " Touch y " + pageY;
    e.target.style.position = "absolute";
    e.target.style.left = pageX;
    e.target.style.top = pageY;
    activeEvent = "move";
  }

  function handleTouchEnd(e) {
    e.preventDefault();
    if (activeEvent === "move") {
      let pageX = parseInt(e.target.style.left) - 50;
      let pageY = parseInt(e.target.style.top) - 50;

      if (
        detectTouchEnd(
          drop_zone.offsetLeft,
          drop_zone.offsetTop,
          pageX,
          pageY,
          drop_zone.offsetWidth,
          drop_zone.offsetHeight
        )
      ) {
        dropped = dropped.concat(e.target.id);
        e.target.style.position = "initial";
        dropped_in = true;
        status =
          "You dropped " + e.target.getAttribute("id") + " into drop zone";
      } else {
        e.target.style.left = originalX;
        e.target.style.top = originalY;
        status = "You let the " + e.target.getAttribute("id") + " go.";
      }
    }
  }

  function detectTouchEnd(x1, y1, x2, y2, w, h) {
    //Very simple detection here
    if (x2 - x1 > w) return false;
    if (y2 - y1 > h) return false;
    return true;
  }
</script>

<style>
  .box__uploading,
  .box__success,
  .box__error {
    display: none;
  }
  .box.has-advanced-upload {
    background-color: white;
    outline: 2px dashed black;
    outline-offset: -10px;
  }
  .box.has-advanced-upload .box__dragndrop {
    display: inline;
  }
  .box.is-dragover {
    background-color: grey;
  }
  .box {
  }
</style>

<!-- <script>
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
</script><style>
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
</style><label for="file">
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
{/if} -->
<div class="">
  <label>
    <slot />
  </label>
  <h2 id="app_status">Drag status: {status}</h2>
  <div
    class="box bg-white border border-primary h-x4 flex justify-center
    items-center"
    on:dragenter={handleDragEnter}
    on:dragleave={handleDragLeave}
    on:drop={handleDragDrop}
    bind:this={drop_zone}
    id="drop_zone"
    ondragover="return false">
    <input
      class="box__file hidden"
      type="file"
      name="files[]"
      id="file"
      data-multiple-caption="{count} files selected"
      multiple />
    <label for="file" class="flex justify-center flex-col">
      <p class="cursor-pointer primary-button inline-block text-center">
        Datei auswählen
      </p>
      <p class="box__dragndrop text-center">oder per Drag and Drop</p>
    </label>
    <!-- <button class="box__button primary-button" type="submit">Upload</button> -->
  </div>
  <!-- <div class="box__uploading">Uploading&hellip;</div>
  <div class="box__success">Done!</div>
  <div class="box__error">
    Error!
    <span />
    .
  </div> -->

</div>
