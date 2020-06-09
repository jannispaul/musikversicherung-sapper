<script>
  // // Make reviewData available
  // export let reviewData;
  // // Use context to pass to components
  // import { setContext } from "svelte";
  // setContext("reviewData", reviewData);

  import Notice from "../../components/Notice.svelte";
  import CookieNotice from "../../components/CookieNotice.svelte";
  import Nav from "../../components/Nav.svelte";
  import Footer from "../../components/Footer.svelte";
  import GoogleAnalytics from "../../components/GoogleAnalytics.svelte";

  export let segment;
</script>

<style>
  :global(body) {
    background: #f8f5ff;
    position: relative;
    hyphens: manual;
  }
  :global(main:focus) {
    outline: none;
  }
</style>

<!-- <svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head> -->
<Notice />
<CookieNotice />
<GoogleAnalytics />
<Nav {segment} />
<main class=" mt-x1 relative z-0" id="main">
  <slot />
</main>
<Footer />
