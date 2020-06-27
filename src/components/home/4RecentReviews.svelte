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
    /* .image-guitar {
      grid-column: 5/10;
      grid-row: 8/12;
    } */
    .image {
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
      rel="prefetch"
      href="/reviews"
      class="text-x2 md:text-x0p5 underline mb-x3 md:mb-x1"
      title="Reviews aufrufen">
      Alle Bewertungen ansehen
    </a>
  </div>
  <div class="shape hidden md:block" />
  <div class="z-20 image relative hidden md:inline-block">
    <Image
      sizes="(min-width: 769px) 37vw, 10vw"
      srcset={`/images/violins_kzmb3h/violins_kzmb3h_c_scale,w_200.jpg 200w, /images/violins_kzmb3h/violins_kzmb3h_c_scale,w_429.jpg 429w, /images/violins_kzmb3h/violins_kzmb3h_c_scale,w_609.jpg 609w, /images/violins_kzmb3h/violins_kzmb3h_c_scale,w_761.jpg 761w, /images/violins_kzmb3h/violins_kzmb3h_c_scale,w_895.jpg 895w, /images/violins_kzmb3h/violins_kzmb3h_c_scale,w_1017.jpg 1017w, /images/violins_kzmb3h/violins_kzmb3h_c_scale,w_1142.jpg 1142w, /images/violins_kzmb3h/violins_kzmb3h_c_scale,w_1253.jpg 1253w, /images/violins_kzmb3h/violins_kzmb3h_c_scale,w_1263.jpg 1263w`}
      src="/images/violins_kzmb3h/violins_kzmb3h_c_scale,w_1263.jpg"
      alt="Violinen-Sektion eines Orchesters" />
  </div>
</section>
