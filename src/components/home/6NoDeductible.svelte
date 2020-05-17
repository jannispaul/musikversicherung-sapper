<script>
  import Image from "../Image.svelte";
</script>

<style>
  :global(.bg-gradient) {
    background: linear-gradient(228.42deg, #412b75 4.06%, #6b46c1 94.06%);
  }
  :global(.bg-gradient-secondary) {
    background: linear-gradient(240.83deg, #db0086 4.06%, #960075 94.06%);
  }

  @media (min-width: 768px) {
    .content {
      background: linear-gradient(240.83deg, #db0086 4.06%, #960075 94.06%);
      min-width: 40vw;
      max-width: 45vw;
    }
    .bg-gradient-secondary {
      background: none;
    }
  }
</style>

<section
  class="bg-gradient-secondary p-x1p5 py-x3 md:py-x2 w-100 text-light md:flex
  relative items-center">
  <div class="hidden md:inline-block order-2">
    <Image src="drums" alt="" />
  </div>

  <div
    class="content md:p-x1 text-light md:relative md:z-10 md:flex flex-col mw-x5
    ">
    <h3
      class="text-x6 md:text-x1 mb-x1 leading-tight md:mb-x0p5 font-medium
      whitespace-no-wrap">
      Keine
      <br class="md:hidden" />
      Selbstbeteiligung
    </h3>
    <p class="text-x2 mb-x1 md:text-x0p5 md:mb-0">
      Mit einer Instrumentenversicherung musst Du Dir nach einer Beschädigung
      keine Sorgen um die Reparaturkosten machen. Auch die Kosten für ein
      Leihinstrument während der Reparatur übernimmt die
      Instrumentenversicherung. Nach einem Verlust, zum Beispiel durch
      Diebstahl, hilft die Auszahlung der Versicherungssumme beim Kauf eines
      Ersatzinstrumentes. Bei der SINFONIMA-Instrumentenversicherung gibt es
      keine Selbstbeteiligung. Bei der I’M SOUND-Equipmentversicherung gilt nur
      für wenige Spezialfälle ein Selbstbehalt.
    </p>
  </div>

</section>
