<script>
  export let reviewData; // Data passed from index.svelte
  import { fade } from "svelte/transition";
  import StarRating from "../StarRating.svelte";

  let heroImages = [
    {
      src: "/images/piano_y1wv8n/piano_y1wv8n_c_scale,w_2160.jpg",
      sizes: "(max-width: 768px) 100vw, 75vw",
      srcset:
        "/images/piano_y1wv8n/piano_y1wv8n_c_scale,w_200.jpg 200w, /images/piano_y1wv8n/piano_y1wv8n_c_scale,w_745.jpg 745w, /images/piano_y1wv8n/piano_y1wv8n_c_scale,w_1136.jpg 1136w, /images/piano_y1wv8n/piano_y1wv8n_c_scale,w_1381.jpg 1381w, /images/piano_y1wv8n/piano_y1wv8n_c_scale,w_1590.jpg 1590w, /images/piano_y1wv8n/piano_y1wv8n_c_scale,w_1779.jpg 1779w, /images/piano_y1wv8n/piano_y1wv8n_c_scale,w_1933.jpg 1933w, /images/piano_y1wv8n/piano_y1wv8n_c_scale,w_2084.jpg 2084w, /images/piano_y1wv8n/piano_y1wv8n_c_scale,w_2128.jpg 2128w, /images/piano_y1wv8n/piano_y1wv8n_c_scale,w_2160.jpg 2160w",
      srcsetWebp:
        "/images/piano_y1wv8n/piano_y1wv8n_c_scale,w_200.webp 200w, /images/piano_y1wv8n/piano_y1wv8n_c_scale,w_745.webp 745w, /images/piano_y1wv8n/piano_y1wv8n_c_scale,w_1136.webp 1136w, /images/piano_y1wv8n/piano_y1wv8n_c_scale,w_1381.webp 1381w, /images/piano_y1wv8n/piano_y1wv8n_c_scale,w_1590.webp 1590w, /images/piano_y1wv8n/piano_y1wv8n_c_scale,w_1779.webp 1779w, /images/piano_y1wv8n/piano_y1wv8n_c_scale,w_1933.webp 1933w, /images/piano_y1wv8n/piano_y1wv8n_c_scale,w_2084.webp 2084w, /images/piano_y1wv8n/piano_y1wv8n_c_scale,w_2128.webp 2128w, /images/piano_y1wv8n/piano_y1wv8n_c_scale,w_2160.webp 2160w",
      alt: "Stagepiano mit Schlagzeug im Hintergrund"
    },
    {
      src: "/images/violins_kzmb3h/violins_kzmb3h_c_scale,w_1263.jpg",
      sizes: "(min-width: 769px) 75vw, 75vw",
      srcset:
        "/images/violins_kzmb3h/violins_kzmb3h_c_scale,w_200.jpg 200w, /images/violins_kzmb3h/violins_kzmb3h_c_scale,w_429.jpg 429w, /images/violins_kzmb3h/violins_kzmb3h_c_scale,w_609.jpg 609w, /images/violins_kzmb3h/violins_kzmb3h_c_scale,w_761.jpg 761w, /images/violins_kzmb3h/violins_kzmb3h_c_scale,w_895.jpg 895w, /images/violins_kzmb3h/violins_kzmb3h_c_scale,w_1017.jpg 1017w, /images/violins_kzmb3h/violins_kzmb3h_c_scale,w_1142.jpg 1142w, /images/violins_kzmb3h/violins_kzmb3h_c_scale,w_1253.jpg 1253w, /images/violins_kzmb3h/violins_kzmb3h_c_scale,w_1263.jpg 1263w",
      srcsetWebp:
        "/images/violins_kzmb3h/violins_kzmb3h_c_scale,w_200.webp 200w, /images/violins_kzmb3h/violins_kzmb3h_c_scale,w_429.webp 429w, /images/violins_kzmb3h/violins_kzmb3h_c_scale,w_609.webp 609w, /images/violins_kzmb3h/violins_kzmb3h_c_scale,w_761.webp 761w, /images/violins_kzmb3h/violins_kzmb3h_c_scale,w_895.webp 895w, /images/violins_kzmb3h/violins_kzmb3h_c_scale,w_1017.webp 1017w, /images/violins_kzmb3h/violins_kzmb3h_c_scale,w_1142.webp 1142w, /images/violins_kzmb3h/violins_kzmb3h_c_scale,w_1253.webp 1253w, /images/violins_kzmb3h/violins_kzmb3h_c_scale,w_1263.webp 1263w",
      alt: "Violinen-Sektion eines Orchesters"
    },
    {
      src: "/images/mixer_a6lonu/mixer_a6lonu_c_scale,w_2160.jpg",
      sizes: "(min-width: 769px) 75vw, 75vw",
      srcset: `/images/mixer_a6lonu/mixer_a6lonu_c_scale,w_200.jpg 200w, /images/mixer_a6lonu/mixer_a6lonu_c_scale,w_601.jpg 601w, /images/mixer_a6lonu/mixer_a6lonu_c_scale,w_879.jpg 879w, /images/mixer_a6lonu/mixer_a6lonu_c_scale,w_1117.jpg 1117w, /images/mixer_a6lonu/mixer_a6lonu_c_scale,w_1330.jpg 1330w, /images/mixer_a6lonu/mixer_a6lonu_c_scale,w_1520.jpg 1520w, /images/mixer_a6lonu/mixer_a6lonu_c_scale,w_1694.jpg 1694w, /images/mixer_a6lonu/mixer_a6lonu_c_scale,w_1875.jpg 1875w, /images/mixer_a6lonu/mixer_a6lonu_c_scale,w_2057.jpg 2057w, /images/mixer_a6lonu/mixer_a6lonu_c_scale,w_2160.jpg 2160w`,
      srcsetWebp: `/images/mixer_a6lonu/mixer_a6lonu_c_scale,w_200.webp 200w, /images/mixer_a6lonu/mixer_a6lonu_c_scale,w_601.webp 601w, /images/mixer_a6lonu/mixer_a6lonu_c_scale,w_879.webp 879w, /images/mixer_a6lonu/mixer_a6lonu_c_scale,w_1117.webp 1117w, /images/mixer_a6lonu/mixer_a6lonu_c_scale,w_1330.webp 1330w, /images/mixer_a6lonu/mixer_a6lonu_c_scale,w_1520.webp 1520w, /images/mixer_a6lonu/mixer_a6lonu_c_scale,w_1694.webp 1694w, /images/mixer_a6lonu/mixer_a6lonu_c_scale,w_1875.webp 1875w, /images/mixer_a6lonu/mixer_a6lonu_c_scale,w_2057.webp 2057w, /images/mixer_a6lonu/mixer_a6lonu_c_scale,w_2160.webp 2160w`,
      alt: "Live-Mischpult mit Menschenmenge im Hintergrund"
    },
    {
      src: "/images/sax_lcabmf/sax_lcabmf_c_scale,w_2160.jpg",
      sizes: "(min-width: 769px) 75vw",
      srcset: `/images/sax_lcabmf/sax_lcabmf_c_scale,w_200.jpg 200w, /images/sax_lcabmf/sax_lcabmf_c_scale,w_636.jpg 636w, /images/sax_lcabmf/sax_lcabmf_c_scale,w_923.jpg 923w, /images/sax_lcabmf/sax_lcabmf_c_scale,w_1160.jpg 1160w, /images/sax_lcabmf/sax_lcabmf_c_scale,w_1374.jpg 1374w, /images/sax_lcabmf/sax_lcabmf_c_scale,w_1567.jpg 1567w, /images/sax_lcabmf/sax_lcabmf_c_scale,w_1746.jpg 1746w, /images/sax_lcabmf/sax_lcabmf_c_scale,w_1921.jpg 1921w, /images/sax_lcabmf/sax_lcabmf_c_scale,w_2092.jpg 2092w, /images/sax_lcabmf/sax_lcabmf_c_scale,w_2160.jpg 2160w`,
      srcsetWebp: `/images/sax_lcabmf/sax_lcabmf_c_scale,w_200.webp 200w, /images/sax_lcabmf/sax_lcabmf_c_scale,w_636.webp 636w, /images/sax_lcabmf/sax_lcabmf_c_scale,w_923.webp 923w, /images/sax_lcabmf/sax_lcabmf_c_scale,w_1160.webp 1160w, /images/sax_lcabmf/sax_lcabmf_c_scale,w_1374.webp 1374w, /images/sax_lcabmf/sax_lcabmf_c_scale,w_1567.webp 1567w, /images/sax_lcabmf/sax_lcabmf_c_scale,w_1746.webp 1746w, /images/sax_lcabmf/sax_lcabmf_c_scale,w_1921.webp 1921w, /images/sax_lcabmf/sax_lcabmf_c_scale,w_2092.webp 2092w, /images/sax_lcabmf/sax_lcabmf_c_scale,w_2160.webp 2160w`,
      alt: "Saxophon mit anderen Musikern im Hintergrund"
    }
  ];
  // Image index
  let index = 0;

  function nextPicture() {
    index = (index + 1) % heroImages.length;
  }
  function imageTimer() {
    setTimeout(function() {
      nextPicture();
      // create a recursive loop.
      imageTimer();
    }, 5000);
  }
  imageTimer();

  let style = {
    styleStarWidth: 20,
    // styleEmptyStarColor: "#EE97CC"
    styleFullStarColor: "#fff"
  };
</script>

<style>
  :global(.images img) {
    height: 100%;
    min-width: 100%;
    width: auto;
    object-fit: cover;
  }
  .content {
    background: linear-gradient(0deg, black, transparent);
  }
  .content h1 {
    text-shadow: 1px 1px 1px #000;
  }
  .content a {
    width: fit-content;
  }
  @media (min-width: 768px) {
    .content {
      background: linear-gradient(90deg, black, transparent);
    }
  }
</style>

<section
  class="relative flex items-end md:items-center mb-x2 h-95vh -mt-x6 md:-mt-x3
  bg-black">
  <div
    class="w-full md:h-full px-x1p5 z-10 relative content md:w-7/12 md:flex
    md:flex-col md:justify-center ">
    <div class="reviews">
      <a
        href="#reviews"
        class="w-auto inline-flex text-white my-x1 md:my-x0p25 md:order-1
        bg-black-x0p2 hover:bg-black-x0p3 p-x0p5 md:py-x0p25 md:items-center">
        <StarRating
          rating={reviewData.averageRating}
          styleStarWidth="50"
          {style} />
        <!-- <p class="text-x2 md:text-x0p5 transition duration-500 ease-in-out "> -->
        <p class="text-x2 md:text-x0p5">
          &nbsp; von {reviewData.count} Bewertungen
        </p>
      </a>
    </div>
    <!-- <div class="content z-20 md:flex md:flex-wrap md:items-start "> -->
    <h1
      class="text-white text-x7 md:text-x5 mb-x1 leading-tight font-medium block
      md:mb-x0p5">
      Deine Versicherung für
      <span class="text-white">Instrumente</span>
      <br />
      und
      <span class="text-white">Equipment</span>
    </h1>

    <a
      href="/anfrage"
      class="inline-block text-white hover:underline text-x2 md:text-x0p5
      bg-secondary p-x1 md:py-x0p25 md:px-x0p5 mb-x2 md:mb-0 md:inline-flex
      hover:bg-secondary-dark">
      Jetzt anfragen
    </a>

  </div>
  <!-- </div> -->
  <div class="absolute images top-0 z-0 h-95vh w-full overflow-hidden">
    {#each [heroImages[index]] as image (index)}
      <picture>
        <source
          sizes={image.sizes}
          srcset={image.srcsetWebp}
          alt={image.alt}
          type="image/webp" />
        <source sizes={image.sizes} srcset={image.scrset} alt={image.alt} />
        <img
          sizes={image.sizes}
          src={image.src}
          alt={image.alt}
          loading="eager"
          class="absolute"
          transition:fade />
      </picture>
    {/each}
  </div>
</section>
