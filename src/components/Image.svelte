<script>
  export let src = "";
  export let alt = "";
  import { onMount } from "svelte";

  onMount(() => {
    // Watch for all pictures with a "lazy" class
    let pictures = document.querySelectorAll("picture.lazy");

    // If there is no intersection observer
    if (
      !("IntersectionObserver" in window) ||
      !("IntersectionObserverEntry" in window) ||
      !("intersectionRatio" in window.IntersectionObserverEntry.prototype)
    ) {
      // run loadImage for all images and remove the lazy-initial class that blurs placeholder
      function launchFunction() {
        pictures.forEach(
          picture =>
            loadImage(picture) && picture.classList.remove("lazy-initial")
        );
      }
      launchFunction();
    }
    // Make it simple to swap parts of a URL attribute on an element
    function updateAttributeURL(element, attr, swapOut, swapIn) {
      var url = element.getAttribute(attr);
      url = url.replace(swapOut, swapIn);
      element.setAttribute(attr, url);
    }

    // Update the image source on elements in the picture element
    function loadImage(picture) {
      var sources = picture.children;
      var loadingPath = "images/tiny";
      var sizes = ["large", "medium", "small"];

      for (var s = 0; s < sources.length; s++) {
        // update the src or srcset urls
        if (sources[s].hasAttribute("srcset")) {
          updateAttributeURL(
            sources[s],
            "srcset",
            loadingPath,
            "images/" + sizes[s]
          );
        } else {
          updateAttributeURL(
            sources[s],
            "src",
            loadingPath,
            "images/" + sizes[s]
          );
        }

        // remove the lazy-initial class when the full image is loaded to unblur
        sources[s].addEventListener(
          "load",
          image => {
            image.target.closest("picture").classList.remove("lazy-initial");
          },
          false
        );
      }
    }

    // Stop observing this image and load its source
    function lazyLoad(elements) {
      elements.forEach(item => {
        if (item.intersectionRatio > 0) {
          observer.unobserve(item.target);
          loadImage(item.target);
        }
      });
    }

    // Set up the intersection observer to detect when to define
    // and load the real image source
    var options = {
      rootMargin: "700px",
      threshold: 1.0
    };
    var observer = new IntersectionObserver(lazyLoad, options);

    // Watch for all pictures with a "lazy" class
    // let pictures = document.querySelectorAll("picture.lazy");

    pictures.forEach(pic => {
      observer.observe(pic);
    });
  });
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

  .lazy-initial img {
    width: 100%;

    /* width: calc(100% + 2 * 20px);
    height: calc(100% + 40px); */
    filter: blur(20px);
    /* margin: -20px -20px -20px -20px; */
  }
</style>

<!-- <img {src} {alt} /> -->
<picture class="lazy lazy-initial">
  <source
    srcset={`https://musikversicherung.netlify.com/images/tiny/${src}`}
    media="(min-width: 1200px)" />
  <source
    srcset={`https://musikversicherung.netlify.com/images/tiny/${src}`}
    media="(min-width: 740px)" />
  <img src={`https://musikversicherung.netlify.com/images/tiny/${src}`} {alt} />
</picture>
