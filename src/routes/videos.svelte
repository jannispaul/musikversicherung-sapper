<script>
  import Layout from "./_layouts/layout.svelte";
  // import Youtube from "../components/Youtube.svelte";
</script>

<style>
  .iframe-container {
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;
  }

  .iframe-container iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
</style>

<Layout>
  <div class="px-x1p5 mx-auto text-x2 md:text-x0p5 md:w-3/4">
    <h1
      class="text-x6 md:text-x4 text-primary leading-tighter md:text-center
      mb-x2">
      Videos zu I'M SOUND
    </h1>
    <!-- <Youtube videoId="Z6eF3d0LGos" /> -->
    <!-- <Youtube videoId="qKfRSB3JX5U" /> -->
    <!-- <Youtube videoId="EyVNrPocl44" /> -->
    <!-- <Youtube videoId="DNfMMJ7NLhw" /> -->
    <div class="iframe-container mb-x1">
      <iframe
        title="I’M SOUND: How To Tour"
        src="https://www.youtube-nocookie.com/embed/Z6eF3d0LGos?rel=0"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;
        picture-in-picture"
        allowfullscreen />
    </div>
    <div class="iframe-container mb-x1">
      <iframe
        title="I'M SOUND: How-To Tutorial - Was kostet der Spaß?"
        class="mb-x1"
        src="https://www.youtube-nocookie.com/embed/qKfRSB3JX5U?rel=0"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;
        picture-in-picture"
        allowfullscreen />
    </div>
    <!-- <div class="iframe-container mb-x1">
      <iframe
        title="Die Geldpiloten - I'M SOUND Interview mit Janina Klabes"
        class="mb-x1"
        src="https://www.youtube-nocookie.com/embed/y0IePVtzT_o?rel=0"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;
        picture-in-picture"
        allowfullscreen />
    </div> -->
    <div class="iframe-container mb-x1">
      <iframe
        title="Kurz und knapp: I'M SOUND - Versicherungsschutz für Musiker,
        Bands und DJs."
        class="mb-x1"
        src="https://www.youtube-nocookie.com/embed/EyVNrPocl44?rel=0"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;
        picture-in-picture"
        allowfullscreen />
    </div>
    <p class="mb-x1">
      Über I'M SOUND ist alles versicherbar, was den Sound auf der Bühne, im
      Proberaum oder Studio ausmacht. Aber für wen genau ist I'M SOUND das
      passende Produkt? Wer ist die Zielgruppe? Der neue Trailer gibt Dir einen
      kurzen Einblick in die Lebenswelt der Zielgruppe.
    </p>
    <div class="iframe-container mb-x1">
      <iframe
        title="I’M SOUND: Besuch bei GAGEY MROZECK"
        class="mb-x1"
        src="https://www.youtube-nocookie.com/embed/DNfMMJ7NLhw?rel=0"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;
        picture-in-picture"
        allowfullscreen />
    </div>
    <p class="mb-x1">
      Musiker über Versicherungen - I'M SOUND hat zugehört Vor dem Wohnhaus am
      Rande der Mannheimer Innenstadt stehend, deutet nichts auf das Kleinod
      hin, in dem I'M SOUND ein Interview mit Gagey Mrozeck gedreht hat.
    </p>
    <a
      href="/anfrage"
      class="text-white bg-primary py-x0p75 px-x1 w-full block text-center
      md:inline-block md:w-auto md:px-x0p25 md:py-x0p25 hover:bg-primary-dark">
      Jetzt anfragen
    </a>
  </div>
</Layout>
