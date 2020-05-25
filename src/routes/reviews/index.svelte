<script context="module">
  export async function preload({ params, query }) {
    return this.fetch(`reviews.json`)
      .then(reviews => reviews.json())
      .then(reviewData => {
        return { reviewData };
      });
  }
</script>

<script>
  export let reviewData;
  import ReviewItem from "../../components/ReviewItem.svelte";
  import StarRating from "../../components/StarRating.svelte";
  import Layout from "../_layouts/layout.svelte";
</script>

<Layout>

  <section class="px-x1p5 -mb-x3 md:-mb-x2">
    <h1 class="text-primary text-x6 leading-tight mb-x1 border-solid">
      Kundenmeinungen
    </h1>
    <div
      class="text-x1p5 md:text-x0p5 mb-x1p5"
      itemscope
      itemtype="https://schema.org/AggregateRating">
      <div
        itemprop="itemReviewed"
        itemscope
        itemtype="https://schema.org/Service"
        class="hidden">
        <span itemprop="name">
          SINFONIMA/I'M SOUND Instrumentenversicherung
        </span>
      </div>
      <div class="hidden">
        <span itemprop="ratingValue">{reviewData.averageRating}</span>
        <span itemprop="bestRating">5</span>
      </div>
      <StarRating rating={reviewData.averageRating} />
      <div class="text-x2 md:text-x0p5 mb-x1">
        {reviewData.averageRating} Sterne von {reviewData.count} Berwertungen
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 col-gap-x1 row-gap-x0p5">
        {#each reviewData.allReviews as review}
          <ReviewItem {review} />
        {/each}
      </div>
    </div>
  </section>
</Layout>
