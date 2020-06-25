<script context="module">
  export async function preload({ params, query }) {
    return this.fetch(`reviews.json`)
      .then(r => r.json())
      .then(reviewData => {
        return { reviewData };
      });
    return this.fetch("sitemap.xml");
  }

  // export function preload({ params, query }) {
  //   return this.fetch("sitemap.xml");
  // }
</script>

<script>
  export let reviewData;
  import Layout from "../routes/_layouts/layout.svelte";
  import Hero from "../components/home/1Hero.svelte";
  import Types from "../components/home/2Types.svelte";
  import AsItShouldBe from "../components/home/3AsItShouldBe.svelte";
  import RecentReviews from "../components/home/4RecentReviews.svelte";
  import HeadlineAndText from "../components/home/5HeadlineAndText.svelte";
  import NoDeductible from "../components/home/6NoDeductible.svelte";
  import InstrumentsAndMore from "../components/home/8InstrumentsAndMore.svelte";
  import Various from "../components/home/10Various.svelte";
  import Video from "../components/home/11Video.svelte";

  let content1 = {
    headline: "Weit mehr als nur eine Hausratdeckung",
    paragraph: `Die SINFONIMA-Instrumentenversicherung und der I’M-SOUND-Equipmentschutz gehen weit über die Leistungen einer Hausratversicherung hinaus. Diese deckt in der Regel nur Schäden durch Feuer, Leitungswasser, Sturm/Hagel und Einbruchdiebstahl. Die Spezialversicherungen der Mannheimer Versicherung hingegen bieten Schutz bei fast allen Schäden, die durch äußere Einwirkungen entstehen. Das kann zum Beispiel ein Sturz, Umfallen, ein Transportschaden oder ein Verlust durch Diebstahl sein. In der Equipmentversicherung sind darüber hinaus auch Risiken gedeckt, die bei elektronischen Instrumenten und Geräten von Bedeutung sind – zum Beispiel Überspannungsschäden.`
  };
  let content2 = {
    headline: "Für Hobby- & Berufsmusiker",
    paragraph:
      "Es macht keinen Unterschied, ob Du Hobby- oder Berufsmusiker bist oder Deine Kinder die Instrumente nutzen. SINFONIMA und I’M SOUND schützen unabhängig davon immer gleich gut. Du kannst privat und beruflich genutzte Musikinstrumente versichern. Sammlungen sind ebenso versicherbar wie Instrumente von Schulklassen, Musikschulen, Orchestern, Kapellen, Vereinen und natürlich auch Bands. Auch geliehene Instrumente sind kein Problem."
  };
  let content3 = {
    headline: "Egal, wer den Schaden verursacht hat",
    paragraph:
      "Versicherungsschutz besteht sowohl dann, wenn der Schaden selbst verursacht, als auch, wenn er von Dritten verschuldet wird. Selbst grob fahrlässig herbeigeführte Schäden bis zu einer Höhe von 2.500 Euro fallen unter den Versicherungsschutz dieser Instrumentenversicherung. Das ist nicht selbstverständlich. Andere Anbieter kürzen bei der Regulierung oder leisten gar nicht. Oft gibt es bei Mitbewerbern keine Leistung, wenn ein Schaden von Familienangehörigen verursacht wird. Für SINFONIMA und I’M SOUND ist das alles kein Problem."
  };
</script>

<svelte:head>
  <title>Instrumentenversicherung SINFONIMA & I'M SOUND</title>
  <meta
    name="description"
    content="SINFONIMA-Instrumentenversicherung & I'M
    SOUND-Equipmentversicherung - bester Allgefahrenschutz für klassische
    Instrumente und elektronisches Equipment" />
</svelte:head>
<Layout>
  <Hero {reviewData} />

  <Types />
  <AsItShouldBe />
  <RecentReviews {reviewData} />
  <HeadlineAndText {...content1} headlineColor="text-secondary" />
  <NoDeductible />
  <HeadlineAndText {...content2} />
  <InstrumentsAndMore />
  <HeadlineAndText {...content3} headlineColor="text-secondary" />
  <Various />
  <Video />
</Layout>
