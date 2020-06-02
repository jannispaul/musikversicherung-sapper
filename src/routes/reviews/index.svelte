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

  // Generate JSON LD
  // Individual reviews
  let reviewsJSON = reviewData.allReviews.map(review => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.name
    },
    datePublished: review.microDataDate,
    reviewBody: review.review,
    reviewRating: {
      "@type": "Rating",
      bestRating: "5",
      ratingValue: review.rating,
      worstRating: "1"
    }
  }));

  // Aggregated Rating
  let jsonLD = {
    "@context": "http://schema.org",
    "@type": "Product",
    image: "https://musikversicherung.com/social-image.jpg",
    name: "SINFONIMA / I'M SOUND Instrumentenversicherung",
    brand: {
      "@type": "Brand",
      name: "Mannheimer Versicherung AG"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewData.averageRating,
      reviewCount: reviewData.count
    },
    review: reviewsJSON,
    description: "Deine Versicherung für Instrumente und Equipment."
  };
  // JSON LD in script tag
  let scriptTag = `<script type="application/ld+json">${JSON.stringify(
    jsonLD
  )}<\/script>`;
</script>

<svelte:head>
  {@html scriptTag}
</svelte:head>
<Layout>
  <section class="px-x1p5 -mb-x3 md:-mb-x2">
    <h1 class="text-primary text-x6 leading-tight mb-x1 border-solid">
      Kundenmeinungen
    </h1>
    <StarRating rating={reviewData.averageRating} />
    <div class="text-x2 md:text-x0p5 mb-x1">
      {reviewData.averageRating} Sterne von {reviewData.count} Berwertungen
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 col-gap-x1 row-gap-x0p5">
      {#each reviewData.allReviews as review}
        <ReviewItem {review} />
      {/each}
    </div>

  </section>
</Layout>
