<script context="module">
  export async function preload({ params, query }) {
    return this.fetch(`faq.json`)
      .then(r => r.json())
      .then(faq => {
        return { faq };
      });
  }
</script>

<script>
  import Layout from "../_layouts/layout.svelte";
  import FaqItem from "../../components/FaqItem.svelte";
  export let faq;
</script>

<Layout>
  <section class="px-x1p5" itemscope itemtype="https://schema.org/FAQPage">
    <h1 class="text-primary text-x6 leading-tight mb-x2 border-solid">
      Häufig gestellte Fragen
    </h1>
    <div class="grid md:grid-cols-2 gap-x1">
      {#each faq as faq}
        <FaqItem
          question={faq.question}
          answer={faq.answer.replace(/\n/g, '<br>')} />
      {/each}
    </div>
  </section>

</Layout>
