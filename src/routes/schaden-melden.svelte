<script>
  import Layout from "../routes/_layouts/layout.svelte";
  import FileUpload from "../components/FileUpload.svelte";
  import { writable } from "svelte/store";
  import { onMount } from "svelte";

  // Setup variables for multi step form
  let currentTab = 0;
  let termsAccepted = false;
  let files = [];
  $: {
    // console.log(files);
    console.log($schadenFormData.file);
  }

  // Setup functions to navigate between tabs
  let nextTab = () => currentTab++;
  let prevTab = () => currentTab--;

  // Create store
  let schadenFormData = writable({});
  // $: {
  //   console.log($schadenFormData);
  // }
  // Setup error handling
  $: errors = {
    tab1:
      !$schadenFormData.vorname ||
      !$schadenFormData.nachname ||
      !$schadenFormData.strasse ||
      !$schadenFormData.plz ||
      !$schadenFormData.wohnort ||
      !$schadenFormData.email ||
      !$schadenFormData.telefon ||
      !$schadenFormData.scheinnr ||
      !$schadenFormData.datum ||
      !$schadenFormData.schadenort ||
      // !$schadenFormData.schadenhoehe ||
      !$schadenFormData.verursacher ||
      !$schadenFormData.gegenstand ||
      !$schadenFormData.schilderung ||
      !$schadenFormData.vorsteuerabzug
        ? true
        : false,
    tab2:
      !$schadenFormData.kontoInhaber ||
      !$schadenFormData.iban ||
      !$schadenFormData.bank ||
      !termsAccepted
        ? true
        : false
  };

  // Is wrapped in onMount to execute on client side not during SSR
  onMount(() => {
    // Set store to saved schadenFormData in localStorage or else to defined object
    function initiateFormData() {
      schadenFormData.set(
        JSON.parse(localStorage.getItem("schadenFormData")) || {
          anrede: "Frau",
          vorname: undefined,
          nachname: undefined,
          strasse: undefined,
          plz: undefined,
          wohnort: undefined,
          email: undefined,
          telefon: undefined,
          scheinnr: undefined,
          datum: undefined,
          schadenort: undefined,
          schadenhoehe: undefined,
          verursacher: undefined,
          gegenstand: undefined,
          schilderung: undefined,
          vorsteuerabzug: undefined,
          nachricht: undefined,
          kontoInhaber: undefined,
          iban: undefined,
          bank: undefined
        }
      );
    }

    initiateFormData();

    // Subscribe to store to update object saved in localStorage
    schadenFormData.subscribe(schadenFormData =>
      localStorage.setItem("schadenFormData", JSON.stringify(schadenFormData))
    );
  });

  // Send data to integromat webhook, clear schadenFormData from localstorage, and redirect on submit
  async function handleSubmit(event) {
    // Create ne FormData
    const formData = new FormData();

    // Append schadenFormData to FormData
    for (let key in $schadenFormData) {
      formData.append(key, $schadenFormData[key]);
    }

    // Append files to FormData
    files.forEach((file, index) => formData.append("file" + index, file));

    // Confige fetch request options
    var requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow"
    };

    // Post to integromat
    const response = await fetch(
      "https://www.formbackend.com/f/706ac99a74b44def",
      requestOptions
    )
      .then(response => response.text())
      .catch(error => console.log("error", error));

    // Remove schadenFormData from localstorage so form is empty
    localStorage.removeItem("schadenFormData");

    // Redirect to danke page
    window.location.href = "/schaden-gemeldet/";
  }
</script>

<svelte:head>
  <title>Anfrage</title>
</svelte:head>
<Layout>
  <!-- {#if process.browser} -->
  <form id="form" method="post" class="text-x2 md:text-x1 lg:text-x0p5 px-x1p5">
    <div>
      <!-- One "tab" for each step in the form: -->
      {#if currentTab == 0}
        <div class="tab flex flex-col lg:w-4/6 m-auto">
          <p class="text-x1p5 md:text-x0p25">Schritt 1 von 2</p>
          <h2 class="text-x3 md:text-x2 text-primary mb-x1">Schaden melden</h2>
          <div class="grid md:grid-cols-2 gap-x0p5">
            <label class="inline-flex flex-col ">
              Anrede *
              <select bind:value={$schadenFormData.anrede} autofocus>
                <option value="Frau">Frau</option>
                <option value="Herr">Herr</option>
              </select>
            </label>
            <label class="inline-flex flex-col ">
              Vorname *
              <input name="vorname" bind:value={$schadenFormData.vorname} />
            </label>
            <label class="inline-flex flex-col ">
              Nachname *
              <input name="nachname" bind:value={$schadenFormData.nachname} />
            </label>
            <label class="inline-flex flex-col ">
              Straße *
              <input name="strasse" bind:value={$schadenFormData.strasse} />
            </label>
            <label class="inline-flex flex-col ">
              Postleitzahl *
              <input name="plz" bind:value={$schadenFormData.plz} />
            </label>
            <label class="inline-flex flex-col ">
              Ort *
              <input name="wohnort" bind:value={$schadenFormData.wohnort} />
            </label>
            <label class="inline-flex flex-col ">
              E-Mail *
              <input name="email" bind:value={$schadenFormData.email} />
            </label>
            <label class="inline-flex flex-col ">
              Telefonnummer *
              <input name="telefon" bind:value={$schadenFormData.telefon} />
            </label>
            <label class="inline-flex flex-col ">
              Versicherungsscheinnummer *
              <input name="scheinnr" bind:value={$schadenFormData.scheinnr} />
            </label>
            <label class="inline-flex flex-col ">
              Schadendatum *
              <input name="datum" bind:value={$schadenFormData.datum} />
            </label>
            <label class="inline-flex flex-col ">
              Schadenort *
              <input
                name="schadenort"
                bind:value={$schadenFormData.schadenort} />
            </label>
            <label class="inline-flex flex-col ">
              Schadenhöhe (soweit schon bekannt)
              <input
                name="schadenhoehe"
                bind:value={$schadenFormData.schadenhoehe} />
            </label>
            <label class="inline-flex flex-col ">
              Wer hat den Schaden verursacht? *
              <input
                name="verursacher"
                bind:value={$schadenFormData.verursacher} />
            </label>
            <label class="inline-flex flex-col ">
              Betroffener Gegenstand? *
              <input
                name="gegenstand"
                bind:value={$schadenFormData.gegenstand} />
            </label>
            <label for="" class=" block col-span-2">
              Kurze Schadenschilderung *
              <textarea
                name="schilderung"
                bind:value={$schadenFormData.schilderung}
                rows="4"
                class="w-full border-primary" />
            </label>
            <div
              class="inline flex flex-wrap md:items-stretch toggle col-span-2 ">
              <span class="w-full flex-0">
                Sind Sie zum Vorsteuerabzug berechtigt? *
              </span>
              <label
                class="block p-x1 md:p-x0p5 flex-1 flex mr-x0p5 mb-x1
                items-center"
                class:active={$schadenFormData.vorsteuerabzug === 'ja'}>
                <input
                  type="radio"
                  bind:group={$schadenFormData.vorsteuerabzug}
                  value="ja"
                  name="vorsteuerabzug" />
                <div class="flex items-center">
                  <div class="indicator relative inline mr-x1" />
                </div>
                <span>Ja</span>
              </label>
              <label
                class="block p-x1 md:p-x0p5 flex-1 flex mb-x1 items-center"
                class:active={$schadenFormData.vorsteuerabzug === 'nein'}>
                <input
                  type="radio"
                  bind:group={$schadenFormData.vorsteuerabzug}
                  value="nein"
                  name="vorsteuerabzug" />
                <div class="flex">
                  <div class="indicator relative inline mr-x1" />
                </div>
                <span>Nein</span>
              </label>
            </div>
            {#if errors.tab1}
              <div class="text-warning col-span-2 text-center">
                Bitte fülle alle mit * markierten Felder aus.
              </div>
            {/if}
          </div>
          <div
            class="grid gap-x0p5 grid-cols-2 md:flex md:justify-center md:w-2/3
            md:m-auto">
            <button
              type="button"
              id="nextBtn"
              on:click={nextTab}
              class="primary-button order-2 w-1/2"
              disabled={errors.tab1}>
              Weiter
            </button>
          </div>
        </div>
      {/if}
      {#if currentTab == 1}
        <div class="tab flex flex-col lg:w-4/6 m-auto">
          <p class="text-x1p5 md:text-x0p25">Schritt 2 von 2</p>
          <h2 class="text-x3 md:text-x2 text-primary mb-x1">
            An wen soll die Entschädigung gezahlt werden?
          </h2>
          <div class="grid md:grid-cols-2 gap-x0p5">
            <label class="inline-flex flex-col ">
              Name *
              <input
                name="konto-name"
                bind:value={$schadenFormData.kontoInhaber} />
            </label>
            <label class="inline-flex flex-col ">
              IBAN *
              <input name="iban" bind:value={$schadenFormData.iban} />
            </label>
            <label class="inline-flex flex-col ">
              Geldinstitut *
              <input name="bank" bind:value={$schadenFormData.bank} />
            </label>
          </div>

          <FileUpload bind:files>
            Wenn schon eine Rechnung vorliegt, können Sie diese hier hochladen.
            Wenn Sie noch weitere Unterlagen (Fotos, Kostenvoranschlag oder
            ähnliches) beifügen wollen, können Sie das hier tun:
          </FileUpload>

          <label class="flex items-center my-x0p5 cursor-pointer">
            <input
              type="checkbox"
              name="terms"
              bind:checked={termsAccepted}
              class="mr-x1 md:mr-x0p5 " />
            <span>
              Ich akzeptiere die Übertragung und Speicherung meiner Daten zum
              Zwecke des angebotenen Services.
              <a href="/datenschutz" class="underline">Mehr erfahren</a>
            </span>
          </label>
          {#if errors.tab2}
            <div class="text-warning mb-x1">
              Bitte fülle alle mit * markierten Felder aus und akzeptiere die
              Bedingungen.
            </div>
          {/if}
          <div class="grid gap-x0p5 grid-cols-2 md:flex md:justify-center ">
            <button
              type="submit"
              class="primary-button order-2 w-1/2"
              disabled={!termsAccepted}
              on:click|preventDefault={handleSubmit}>
              Absenden
            </button>
            <button
              type="button"
              id="prevBtn"
              on:click={prevTab}
              class="primary-button order-1 mr-x0p5 w-1/2">
              Zurück
            </button>
          </div>
        </div>
      {/if}
    </div>
  </form>
</Layout>
