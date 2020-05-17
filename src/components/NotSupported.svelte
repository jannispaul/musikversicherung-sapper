<script>
  import { onMount } from "svelte";
  let supported = true;

  onMount(() => {
    !(function() {
      "use strict";
      if (
        !(
          "function" == typeof Blob &&
          "undefined" != typeof Intl &&
          "undefined" != typeof MutationObserver &&
          "undefined" != typeof URLSearchParams &&
          "undefined" != typeof WebSocket &&
          "undefined" != typeof IntersectionObserver &&
          "entries" in FormData.prototype &&
          "append" in Element.prototype
        )
      ) {
        let supported = false;
      }
    })();
    //# sourceMappingURL=unsupported-bootstrap-cbe2b7e3.js.map
  });
</script>

<div
  id="unsupported-browser"
  class=" z-10 bg-primary w-full"
  class:hidden={supported === true}>
  Your Browser is not supported
</div>
