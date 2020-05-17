<script>
  export let reviewData; // Data passed from index.svelte
  import ReviewItemReduced from "../ReviewItemReduced.svelte";
  import Image from "../Image.svelte";

  let style = {
    styleStarWidth: 20,
    styleEmptyStarColor: "#000",
    styleFullStarColor: "#F8C439"
  };
</script>

<style>
  section {
    background: linear-gradient(248.64deg, #412b75 4.06%, #6b46c1 94.06%);
  }

  @media (min-width: 768px) {
    section {
      background: none;
      display: grid;
      grid-template-columns: calc(100vw * 1.5 / 27) repeat(24, 1fr) calc(
          100vw * 1.5 / 27
        );
      grid-template-rows: repeat(12, 5vw);
    }
    .content {
      grid-column: 14/25;
      grid-row: 3/13;
    }
    .shape {
      background: linear-gradient(228.42deg, #412b75 4.06%, #6b46c1 94.06%);
      grid-column: 8/27;
      grid-row: 1/13;
    }
    .image-guitar {
      grid-column: 5/10;
      grid-row: 8/12;
    }
    .image-drums {
      grid-column: 2/12;
      grid-row: 4/9;
    }
  }
</style>

<section
  class="p-x1p5 py-x3 md:p-0 w-100 md:bg-light md:grid text-light"
  id="reviews">
  <div class="content relative">
    <h2
      class="text-light font-medium text-x6 md:text-x2 flex-1 leading-tight
      md:mr-x0p5 ">
      Alle zufrieden!
    </h2>
    <div
      class="relative text-x2 md:text-x0p25 grid gap-x1 md:gap-x0p5 mb-x2
      md:mb-x1">
      <div class="opacity-75">
        {reviewData.count} Bewertungen mit {reviewData.averageRating} Sternen
      </div>
      {#each reviewData.recentReviews as review}
        <ReviewItemReduced {review} />
      {/each}
    </div>
    <a
      preload
      href="/reviews"
      class="text-x2 md:text-x0p5 underline mb-x3 md:mb-x1">
      Alle Bewertungen ansehen
    </a>
  </div>
  <div class="shape hidden md:block" />
  <div class="z-20 image-drums relative hidden md:inline-block">
    <Image
      sizes="(max-width: 2160px) 100vw, 2160px"
      srcset={`/images/drums_ulbs6v/drums_ulbs6v_c_scale,w_200.jpg 200w, /images/drums_ulbs6v/drums_ulbs6v_c_scale,w_630.jpg 630w, /images/drums_ulbs6v/drums_ulbs6v_c_scale,w_914.jpg 914w, /images/drums_ulbs6v/drums_ulbs6v_c_scale,w_1155.jpg 1155w, /images/drums_ulbs6v/drums_ulbs6v_c_scale,w_1343.jpg 1343w, /images/drums_ulbs6v/drums_ulbs6v_c_scale,w_1543.jpg 1543w, /images/drums_ulbs6v/drums_ulbs6v_c_scale,w_1721.jpg 1721w, /images/drums_ulbs6v/drums_ulbs6v_c_scale,w_1906.jpg 1906w, /images/drums_ulbs6v/drums_ulbs6v_c_scale,w_2078.jpg 2078w, /images/drums_ulbs6v/drums_ulbs6v_c_scale,w_2160.jpg 2160w`}
      src="/images/drums_ulbs6v/drums_ulbs6v_c_scale,w_2160.jpg"
      alt="drummer" />
  </div>
  <div class="z-30 image-guitar relative hidden md:inline-block">
    <Image
      srcset={`/images/guitar_k2skaw/guitar_k2skaw_c_scale,w_200.jpg 200w, /images/guitar_k2skaw/guitar_k2skaw_c_scale,w_704.jpg 704w, /images/guitar_k2skaw/guitar_k2skaw_c_scale,w_1013.jpg 1013w, /images/guitar_k2skaw/guitar_k2skaw_c_scale,w_1234.jpg 1234w, /images/guitar_k2skaw/guitar_k2skaw_c_scale,w_1425.jpg 1425w, /images/guitar_k2skaw/guitar_k2skaw_c_scale,w_1605.jpg 1605w, /images/guitar_k2skaw/guitar_k2skaw_c_scale,w_1774.jpg 1774w, /images/guitar_k2skaw/guitar_k2skaw_c_scale,w_1940.jpg 1940w, /images/guitar_k2skaw/guitar_k2skaw_c_scale,w_2100.jpg 2100w, /images/guitar_k2skaw/guitar_k2skaw_c_scale,w_2160.jpg 2160w`}
      src="/images/guitar_k2skaw/guitar_k2skaw_c_scale,w_2160.jpg"
      alt="guitar" />
  </div>

</section>
