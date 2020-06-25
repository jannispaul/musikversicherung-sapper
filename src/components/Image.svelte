<script>
  export let src = "";
  export let srcset = "";
  export let alt = "";
  export let sizes = "";

  // Create .webp file paths from .jpg, so only jpg paths need to be passed in
  let srcsetWebp = srcset.replace(/\.[j][p][g]/g, ".webp");
</script>

<style>
  picture {
    width: 100%;
    min-width: 100%;
  }
  picture img {
    width: 100%;
    min-width: 100%;
    transition: filter 0.4s;
  }
</style>

<picture>
  <source {sizes} srcset={srcsetWebp} type="image/webp" />
  <source {sizes} {srcset} type="image/jpeg" />
  <img {sizes} {src} {alt} loading="lazy" />
</picture>
