<script>
  export let segment;
  let expanded = false;
  import { stores } from "@sapper/app";
  const { page } = stores();
  // $: console.log($page);

  let scrollY;
  $: navScrollThreshold = scrollY < 500 && $page.path === "/";
  // $: console.log(navScrollThreshold);
</script>

<style>
  .mobile-icon {
    position: relative;
    cursor: pointer;
  }

  .mobile-icon:after,
  .mobile-icon:before,
  .middle-line {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.5vw;
    background-color: #6b46c1;
    transition: all 0.4s;
    transform-origin: center;
  }

  .mobile-icon:before,
  .middle-line {
    top: 0;
  }

  .mobile-icon:after,
  .middle-line {
    bottom: 0;
  }

  .middle-line {
    margin: auto;
  }

  .mobile-icon:hover:before,
  .mobile-icon:hover:after,
  .mobile-icon.active:before,
  .mobile-icon.active:after,
  .mobile-icon.active .middle-line {
    width: 100%;
  }

  .mobile-icon.active:before,
  .mobile-icon.active:after {
    top: 50%;
    transform: rotate(-45deg);
  }

  .mobile-icon.active .middle-line {
    transform: rotate(45deg);
  }

  .skip-to-main:focus,
  .skip-to-main:active {
    color: #fff;
    background-color: #000;
    top: auto;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: max-content;
    height: auto;
    overflow: auto;
    margin-top: 10px;
    padding: 5px 15px;
    border: 4px solid yellow;
    text-align: center;
    z-index: 999;
  }
  /* .negative a {
    color: #fff;
    border: none;
  }
  .negative nav {
    background: rgba(0, 0, 0, 0.4);
    transition: all 200ms ease;
    backdrop-filter: blur(5px);
  }
  .negative .mobile-icon:after,
  .negative .mobile-icon:before,
  .negative .middle-line {
    background-color: white;
  }
  .negative .mobile-menu {
    background: transparent;
  } */
  header,
  nav {
    transition: all 400ms ease;
  }
</style>

<svelte:window bind:scrollY />
<header
  class="w-full z-50 top-0 sticky {navScrollThreshold ? 'negative' : ''}
  ">
  <a
    href="#main"
    class="skip-to-main absolute z-0 w-1 h-1 overflow-hidden text-x2 md:text-x1"
    title="Navigation überspringen">
    Navigation überspringen
  </a>
  <nav
    class="flex items-center justify-between flex-wrap bg-light py-x1 md:py-0
    px-x1p5">
    <div class="relative flex justify-between flex-wrap w-full">
      <div
        class="flex justify-between flex-wrap w-full items-center flex-shrink-0
        text-white mr-6">
        <a
          rel="prefetch"
          class:active={segment === 'index'}
          href="."
          title="Startseite aufrufen"
          class="text-x2 text-primary md:text-x0p75 lg:text-x0p25 mt-1 ">
          <strong>
            Musikversicherung
            <span class="opacity-75 -ml-1">.com</span>
          </strong>
        </a>
        <div
          on:click={expanded === false ? () => (expanded = true) : () => (expanded = false)}
          class="mobile-icon md:hidden w-x1p5 h-x1 {expanded ? ' active' : ''}
          ">
          <div class="middle-line" />
        </div>
        <div
          class="mobile-menu relative md:relative bg-light md:bg-transparent
          top-0 w-screen block px-x1p5 pb-x2 mt-x3 -mx-x1p5 md:mt-0 md:py-x0p5
          md:mb-0 md:flex md:items-center md:w-auto {expanded === false ? 'hidden' : ''}">
          <div class="text-x3 md:text-x0p75 lg:text-x0p25 md:flex-grow">
            <a
              rel="prefetch"
              class:active={segment === 'faq'}
              href="faq"
              title="FAQs aufrufen"
              class="block mt-4 md:inline-block md:mt-0 text-primary
              hover:text-primary mr-x0p5 hover:underline">
              FAQ
            </a>
            <a
              rel="prefetch"
              class:active={segment === 'schaden-melden'}
              href="/schaden-melden"
              title="Schaden melden"
              class="block mt-4 md:inline-block md:mt-0 text-primary
              hover:underline mr-x0p5 ">
              Schaden melden
            </a>
            <a
              rel="prefetch"
              aria-current={segment === 'kontakt' ? 'seite' : undefined}
              class:underline={segment === 'kontakt'}
              href="kontakt"
              title="Kontakt"
              class="block mt-4 md:inline-block md:mt-0 text-primary
              hover:underline mr-x0p5">
              Kontakt
            </a>
            <a
              rel="prefetch"
              href="anfrage"
              title="Angebot anfragen"
              class="block mt-4 md:inline-block md:mt-0 text-primary
              hover:underline">
              Jetzt anfragen
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>
