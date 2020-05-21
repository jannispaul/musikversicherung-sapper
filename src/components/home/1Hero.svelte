<script>
  export let reviewData; // Data passed from index.svelte
  import Image from "../Image.svelte";
  import StarRating from "../StarRating.svelte";

  let style = {
    styleStarWidth: 20,
    // styleEmptyStarColor: "#EE97CC"
    styleFullStarColor: "#DB0086"
  };
</script>

<style>
  .shape {
    height: 60vw;
    background: linear-gradient(248.64deg, #412b75 4.06%, #6b46c1 94.06%);
  }
  @media (min-width: 768px) {
    section {
      display: grid;
      grid-template-columns: calc(100vw * 1.5 / 27) repeat(24, 1fr) calc(
          100vw * 1.5 / 27
        );
      grid-template-rows: repeat(12, 3.5vw);
    }
    .content {
      grid-column: 2/15;
      grid-row: 3/7;
    }
    .reviews {
      grid-column: 2/12;
      grid-row: 2/3;
      overflow: visible;
    }
    .cta {
      grid-column: 2/8;
      grid-row: 9/9;
    }
    .image-piano {
      grid-column: 16/23;
      grid-row: 2/7;
    }
    .image-mixer {
      grid-column: 17/26;
      grid-row: 5/12;
    }
    .image-sax {
      grid-column: 14/19;
      grid-row: 6/10;
    }

    .shape {
      grid-column: 20/27;
      grid-row: 1/13;
      height: 100%;
      width: 100%;
    }
  }
</style>

<section class="px-x1p5 md:px-0 relative">
  <div class="reviews">
    <a
      href="#reviews"
      class="w-auto inline-flex text-secondary bg-secondary-light py-x0p5 px-x1
      mt-x1 md:mt-0 md:py-x0p25 md:px-x0p5 md:order-1 md:items-center
      md:hover:bg-secondary-light-hover">
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
    class="content text-primary text-x7 md:text-x5 leading-none mt-x2 mb-x3
    md:mb-x0p5 md:mt-x0p5 md:order-0 font-medium">
    Deine Versicherung für
    <span class="text-secondary">Instrumente</span>
    <br />
    und
    <span class="text-secondary">Equipment</span>
  </h1>
  <div class="cta">
    <a
      href="/anfrage"
      class=" text-white underline text-x2 bg-secondary absolute left-0 p-x1
      z-30 bottom-0 md:relative md:text-secondary md:bg-secondary-light
      md:inline-flex md:mt-0 md:py-x0p25 md:px-x0p5 md:text-x0p5 md:order-2
      md:items-center md:hover:bg-secondary-light-hover ">
      Jetzt anfragen
    </a>
  </div>
  <!-- </div> -->
  <div class="z-20 image-piano relative">
    <Image
      sizes="(max-width: 2160px) 100vw, 2160px"
      srcset={`/images/piano_y1wv8n/piano_y1wv8n_c_scale,w_200.jpg 200w,/images/piano_y1wv8n/piano_y1wv8n_c_scale,w_745.jpg 745w,/images/piano_y1wv8n/piano_y1wv8n_c_scale,w_1136.jpg 1136w,/images/piano_y1wv8n/piano_y1wv8n_c_scale,w_1381.jpg 1381w,/images/piano_y1wv8n/piano_y1wv8n_c_scale,w_1590.jpg 1590w,/images/piano_y1wv8n/piano_y1wv8n_c_scale,w_1779.jpg 1779w,/images/piano_y1wv8n/piano_y1wv8n_c_scale,w_1933.jpg 1933w,/images/piano_y1wv8n/piano_y1wv8n_c_scale,w_2084.jpg 2084w,/images/piano_y1wv8n/piano_y1wv8n_c_scale,w_2128.jpg 2128w,/images/piano_y1wv8n/piano_y1wv8n_c_scale,w_2160.jpg 2160w`}
      src="/images/piano_y1wv8n/piano_y1wv8n_c_scale,w_2160.jpg"
      alt="pianoplayer" />
  </div>
  <div class="z-10 image-mixer hidden md:inline">
    <Image
      srcset={`/images/mixer_a6lonu/mixer_a6lonu_c_scale,w_200.jpg 200w, /images/mixer_a6lonu/mixer_a6lonu_c_scale,w_601.jpg 601w, /images/mixer_a6lonu/mixer_a6lonu_c_scale,w_879.jpg 879w, /images/mixer_a6lonu/mixer_a6lonu_c_scale,w_1117.jpg 1117w, /images/mixer_a6lonu/mixer_a6lonu_c_scale,w_1330.jpg 1330w, /images/mixer_a6lonu/mixer_a6lonu_c_scale,w_1520.jpg 1520w, /images/mixer_a6lonu/mixer_a6lonu_c_scale,w_1694.jpg 1694w, /images/mixer_a6lonu/mixer_a6lonu_c_scale,w_1875.jpg 1875w, /images/mixer_a6lonu/mixer_a6lonu_c_scale,w_2057.jpg 2057w, /images/mixer_a6lonu/mixer_a6lonu_c_scale,w_2160.jpg 2160w`}
      src="/images/mixer_a6lonu/mixer_a6lonu_c_scale,w_2160.jpg"
      alt="mixer" />
  </div>
  <div class="z-30 image-sax hidden md:inline">
    <Image
      srcset={`/images/sax_lcabmf/sax_lcabmf_c_scale,w_200.jpg 200w, /images/sax_lcabmf/sax_lcabmf_c_scale,w_636.jpg 636w, /images/sax_lcabmf/sax_lcabmf_c_scale,w_923.jpg 923w, /images/sax_lcabmf/sax_lcabmf_c_scale,w_1160.jpg 1160w, /images/sax_lcabmf/sax_lcabmf_c_scale,w_1374.jpg 1374w, /images/sax_lcabmf/sax_lcabmf_c_scale,w_1567.jpg 1567w, /images/sax_lcabmf/sax_lcabmf_c_scale,w_1746.jpg 1746w, /images/sax_lcabmf/sax_lcabmf_c_scale,w_1921.jpg 1921w, /images/sax_lcabmf/sax_lcabmf_c_scale,w_2092.jpg 2092w, /images/sax_lcabmf/sax_lcabmf_c_scale,w_2160.jpg 2160w`}
      src="/images/sax_lcabmf/sax_lcabmf_c_scale,w_2160.jpg"
      alt="Saxophon" />
  </div>

  <div
    class="shape bg-primary absolute w-8/12 right-0 bottom-0 mb-x2 z-0
    md:relative md:mb-0" />

</section>
