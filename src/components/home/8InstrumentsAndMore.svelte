<script>
  import Image from "../Image.svelte";
</script>

<style>
  @media (min-width: 768px) {
    .col-2 {
      column-count: 2;
    }
  }
</style>

<section class="md:relative md:mb-x6">
  <div
    class=" px-x1p5 pt-x3 md:p-x1p5 bg-gradient text-white md:mx-x1p5
    md:relative md:z-10 h-auto">
    <h3
      class="text-x6 md:text-x1p5 mb-x1 leading-tight md:mb-x0p5 font-medium
      block whitespace-normal">
      Für Instrumente, Equipment und Zubehör
    </h3>

    <p class="col-2 text-x2 mb-x3 md:text-x0p5 md:mb-x1 block">
      Nahezu alle Arten von Musikinstrumenten und Equipment und das jeweilige
      Zubehör sind versicherbar. Als Versicherungssumme kann je Instrument
      wahlweise der Neu- oder Zeitwert festgelegt werden. Auch beim Zubehör
      (Koffer, Bogen, Mundstück usw.) macht SINFONIMA nicht halt. Es kann
      genauso umfassend versichert werden, wie die Instrumente selbst. Bei I’M
      SOUND sind beispielsweise auch Laptops, Tablets und Fotoapparate bestens
      „aufgehoben“.
    </p>
    <div class="flex -mx-x1p5 md:mx-0 block image md:-mb-x6 md:relative md:z-0">
      <Image src="mixer" class="z-10 " />
    </div>
  </div>
</section>
