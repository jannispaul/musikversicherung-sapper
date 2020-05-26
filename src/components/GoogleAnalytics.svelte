<script>
  import { stores } from "@sapper/app";
  const { page } = stores();
  $: {
    if (typeof gtag !== "undefined") {
      gtag("config", "UA-99324592-3", {
        page_path: $page.path
      });
    }
  }
</script>
