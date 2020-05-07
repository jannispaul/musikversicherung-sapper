<script>
  import { onMount } from "svelte";
  export let rating = 0;
  export let style = {
    styleStarWidth: 20,
    styleEmptyStarColor: "#D0D0D0",
    styleFullStarColor: "#ffd219"
  };
  let totalStars = 5;
</script>

<style>
  .star-rating {
    display: flex;
    align-items: center;
  }
  .star-container {
    display: flex;
  }
  svg.full {
    fill: #ffd219;
    /* {style.styleFullStarColor} */
  }
  svg.empty {
    fill: #d0d0d0;
    /* {style.styleEmptyStarColor} */
  }
  svg {
    width: calc(100vw * 1 / 27);
  }
  @media (min-width: 768px) {
    svg {
      width: calc(100vw * 0.4 / 27);
    }
  }
</style>

<div class="star-container">
  <div class="star-rating">
    <!-- Set stars according to rating -->
    {#each Array(rating) as star}
      <svg
        viewBox="0 0 {style.styleStarWidth}
        {style.styleStarWidth}"
        xmlns="http://www.w3.org/2000/svg"
        class="full">
        <path
          d="M.476 6.952l7.159-.178L9.955 0l2.382 6.754 7.16.114-5.687 4.351
          2.104 6.845L10.018 14l-5.86 4.116 2.043-6.863z" />
      </svg>
    {/each}
    <!-- Set gray stars to get 5 stars in total -->
    {#each Array(totalStars - rating) as star}
      <svg
        viewBox="0 0 {style.styleStarWidth}
        {style.styleStarWidth}"
        xmlns="http://www.w3.org/2000/svg"
        class="empty ">
        <path
          d="M.476 6.952l7.159-.178L9.955 0l2.382 6.754 7.16.114-5.687 4.351
          2.104 6.845L10.018 14l-5.86 4.116 2.043-6.863z" />
      </svg>
    {/each}
  </div>
</div>
