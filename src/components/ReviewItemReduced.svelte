<script>
  export let review;
  import StarRatingSimple from "./StarRatingSimple.svelte";

  let style = {
    styleStarWidth: 10,
    styleEmptyStarColor: "#000",
    styleFullStarColor: "#F8C439"
  };
</script>

<div class=" text-x2 md:text-x0p5 md:flex-half">
  <div class="flex items-center mb-x0p25 md:mb-0 md:text-x0p25">
    <div>
      <span class="hidden">{review.rating}</span>
      <span class="hidden">5</span>
      <StarRatingSimple rating={review.rating} />
    </div>
    <div class="flex opacity-75">
      &nbsp;von&nbsp;
      <p>{review.name}</p>
      &nbsp;am&nbsp;
      <p>{review.date}</p>
    </div>
  </div>
  <p class="">
    {@html review.review}
  </p>

</div>
