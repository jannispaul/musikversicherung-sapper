<script>
  export let review;
  import StarRatingSimple from "./StarRatingSimple.svelte";

  let style = {
    styleStarWidth: 10,
    styleEmptyStarColor: "#000",
    styleFullStarColor: "#F8C439"
  };
</script>

<div
  itemprop="review"
  itemscope
  itemtype="https://schema.org/Review"
  class=" text-x2 md:text-x0p5 md:flex-half">
  <div
    itemprop="itemReviewed"
    itemscope
    itemtype="https://schema.org/Service"
    class="w-full bg-transparent pt-x0p5 md:pt-0 mb-x0p5 md:mb-x0p25">
    <span itemprop="name" class="hidden">
      SINFONIMA/I'M SOUND Instrumentenversicherung
    </span>
  </div>
  <div class="flex items-center mb-x0p25 md:mb-0 md:text-x0p25">
    <div itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
      <span itemprop="ratingValue" class="hidden">{review.rating}</span>
      <span itemprop="bestRating" class="hidden">5</span>
      <StarRatingSimple rating={review.rating} />
    </div>
    <div class="flex opacity-75">
      &nbsp;von&nbsp;
      <div itemprop="author" itemscope itemtype="https://schema.org/Person">
        <p itemprop="name">{review.name}</p>
      </div>
      &nbsp;am&nbsp;
      <p itemprop="datePublished" content={review.microDataDate}>
        {review.date}
      </p>
    </div>
  </div>
  <p itemprop="reviewBody" class="">
    {@html review.review}
  </p>

</div>
