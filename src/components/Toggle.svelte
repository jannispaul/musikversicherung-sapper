<script>
  export let checked = false;
  export let group = "";
  export let value = void 0;

  $: type === "radio" && updateRadio(group, value);

  function updateRadio(group, value) {
    checked = group === value;
  }

  function updateGroup(checked, value) {
    const index = group.indexOf(value);
    if (checked) {
      if (index < 0) {
        group.push(value);
        group = group;
      }
    } else {
      if (index >= 0) {
        group.splice(index, 1);
        group = group;
      }
    }
  }
</script>

<label>
  <input type="radio" class="collapsed" on:click bind:group {value} />
</label>
