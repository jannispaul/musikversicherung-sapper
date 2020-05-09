<script>
  import Layout from "../routes/_layouts/layout.svelte";

  import { writable } from "svelte/store";
  import { onMount } from "svelte";

  // Setup variables for multi step form
  let currentTab = 0;
  let termsAccepted = false;

  // Setup functions to navigate between tabs
  let nextTab = () => currentTab++;
  let prevTab = () => currentTab--;

  // Create store
  let formData = writable({});

  // Set focus on Sinfonima when tabbing through the page
  const onFocus = () => ($formData.versicherungsTyp = "SINFONIMA");

  $: errors = {
    tab1:
      !$formData.vorname || !$formData.nachname || !$formData.email
        ? true
        : false,
    tab2:
      !$formData.proberaum ||
      !$formData.anhaenger ||
      !$formData.verdientGeld ||
      !$formData.musikerhaftpflicht ||
      !termsAccepted
        ? true
        : false
  };

  // Is wrapped in onMount to execute on client side not during SSR
  onMount(() => {
    // Set store to saved formData in localStorage or else to defined object
    function initiateFormData() {
      formData.set(
        JSON.parse(localStorage.getItem("formData")) || {
          versicherungsTyp: undefined,
          anrede: "Frau",
          gesamtWert: undefined,
          vorname: undefined,
          nachname: undefined,
          email: undefined,
          telefon: undefined,
          status: undefined,
          organisation: "Kein Mitglied",
          organisationSonstige: undefined,
          wohnsitz: "Deutschland",
          andererwohnsitz: undefined,
          nachricht: undefined,
          proberaum: undefined,
          bewohnt: undefined,
          beschreibung: undefined,
          anhanger: undefined,
          verdientGeld: undefined,
          musikerhaftpflicht: undefined,
          instruments: [{ name: "", valueType: "Neuwert", value: "" }]
        }
      );
    }

    initiateFormData();

    // Subscribe to store to update object saved in localStorage
    formData.subscribe(formData =>
      localStorage.setItem("formData", JSON.stringify(formData))
    );
  });

  // Setup function to add an Instrument
  function addInstrument() {
    const instrument = {
      name: "",
      valueType: "Neuwert",
      value: ""
    };
    $formData.instruments = [...$formData.instruments, instrument];
  }

  // Send data to integromat webhook, clear formdata from localstorage, and redirect on submit
  async function handleSubmit() {
    // Confige fetch request options
    var requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify($formData),
      redirect: "follow"
    };

    // Post to integromat
    const response = await fetch(
      "https://hook.integromat.com/rv3r5iqg3ivce8h16ld3b3v5h3vs9121",
      requestOptions
    )
      .then(response => response.text())
      .catch(error => console.log("error", error));

    // Remove formData from localstorage so form is empty
    localStorage.removeItem("formData");

    // Redirect to danke page
    window.location.href = "/danke/";
  }
</script>

<style>
  #form:focus {
    outline: 0;
  }
  :global(.primary-button),
  .add-instrument {
    margin-top: 3vw;
    background: rgba(107, 70, 193, 0.15);
    padding: 1.5vw;
  }

  :global(.primary-button:hover:not(:disabled)),
  :global(.add-instrument:hover:not(:disabled)) {
    background: rgba(107, 70, 193, 0.3);
  }
  :global(button:not(:disabled)) {
    cursor: pointer;
  }
  :global(button:disabled) {
    cursor: not-allowed;
  }

  :disabled {
    opacity: 0.5;
  }

  /* Input style */
  :global(input[type="radio"]) {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
  }

  :global(input) {
    height: 5vw;
    min-height: fit-content;
    padding: 1.5vw;
    margin-bottom: 2vw;
    background: white;
    border: 0.2vw solid #6b46c1;
  }
  :global(textarea) {
    padding: 1.5vw;
    border: 0.2vw solid #6b46c1;
  }
  :global(select) {
    -webkit-appearance: none;
    -moz-appearance: none;
    background-position: right 1vw top 50%;
    background-repeat: no-repeat;
    background-size: 2vw;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDZMNS42NTcuMzQzIDExLjMxNCA2SDB6bTAgMmw1LjY1NyA1LjY1N0wxMS4zMTQgOEgweiIgZmlsbD0iIzMzMyIvPjwvc3ZnPg==);
    background-color: white;
    height: 5vw;
    min-height: fit-content;
    padding: 1vw 1.5vw;
    margin-bottom: 2vw;
    border: 0.2vw solid #6b46c1;
    border-radius: 0;
  }

  :global(.toggle > label) {
    border: 0.5vw solid #6b46c1;
    opacity: 0.5;
    cursor: pointer;
    position: relative;
  }
  /* .toggle > input:focus ~ label { */
  /* outline: -webkit-focus-ring-color auto 5px;
    outline-color: -webkit-focus-ring-color;
    outline-style: auto;
    outline-width: 5px; */
  /* } */
  :global(label.active) {
    opacity: 1;
  }
  /* Create a custom radio button */
  .indicator {
    position: relative;
    height: 3vw;
    width: 3vw;
    border-radius: 100%;
    border: 0.2vw solid #6b46c1;
    border-radius: 100%;
    background: white;
  }
  label.active .indicator {
    border: 1vw solid #6b46c1;
  }
  @media (min-width: 768px) {
    /* Input styles */
    :global(input) {
      height: 2vw;
      min-height: fit-content;
      padding: 0.75vw;
      margin-bottom: 2vw;
      background: white;
      border: 0.2vw solid #6b46c1;
    }

    :global(select) {
      height: 2vw;
      min-height: fit-content;
      padding: 0.75vw;
      margin-bottom: 2vw;
      border: 0.2vw solid #6b46c1;
    }

    :global(textarea) {
      padding: 0.75vw;
      border: 0.2vw solid #6b46c1;
    }
    /* TOggle indicator styles  */
    .indicator {
      height: 1.5vw;
      width: 1.5vw;
    }
    label.active .indicator {
      border: 0.5vw solid #6b46c1;
    }

    :global(.toggle > label) {
      border: 0.2vw solid #6b46c1;
    }

    :global(.primary-button) {
      margin-top: 3vw;
      /* background: none; */
      padding: 1.5vw;
    }
    .primary-button:hover:not(:disabled) {
      /* background: rgba(107, 70, 193, 0.3); */
      /* background: none; */
    }
    :global(select) {
      background-size: 1vw;
    }
  }
</style>

<svelte:head>
  <title>Anfrage</title>
</svelte:head>
<Layout>
  <!-- {#if process.browser} -->
  <form id="form" method="post" class="text-x2 md:text-x1 lg:text-x0p5 px-x1p5">
    <div class=" ">
      <!-- One "tab" for each step in the form: -->
      <!-- {#if currentTab == 0}
        <div class="tab lg:w-4/6 lg:mx-auto">
          <p class="text-x1p5 md:text-x0p25">Schritt 1 von 3</p>
          <h2 class="text-x3 md:text-x2 text-primary mb-x1 leading-tighter">
            Schaden melden
          </h2>
          <div
            class="relative toggle inline md:flex md:items-stretch
            overflow-hidden">
            <input
              type="radio"
              bind:group={$formData.versicherungsTyp}
              value="SINFONIMA"
              id="SINFONIMA"
              on:focus={onFocus} />
            <label
              for="SINFONIMA"
              class="block p-x1 md:py-x0p25 md:px-x0p5 flex-1 flex md:mr-x0p5
              mb-x1 items-center"
              class:active={$formData.versicherungsTyp === 'SINFONIMA'}>
              <div class="flex items-center">
                <div class="indicator relative inline mr-x1 md:mr-x0p5" />
              </div>
              <span>Akustische Instrumente</span>
            </label>

            <input
              type="radio"
              bind:group={$formData.versicherungsTyp}
              value="IAMSOUND"
              id="IAMSOUND" />
            <label
              class="block p-x1 md:py-x0p25 md:px-x0p5 flex-1 flex mb-x1
              items-center"
              class:active={$formData.versicherungsTyp === 'IAMSOUND'}
              for="IAMSOUND">

              <div class="flex">
                <div class="indicator relative inline mr-x1 md:mr-x0p5" />
              </div>
              <span>Elektronische Instrumente & Equipment</span>

            </label>

          </div>
          {#if $formData.versicherungsTyp == 'IAMSOUND'}
            <label class="flex flex-col">
              Gesamtwert der Instrumente in € *
              <input
                name="gesamtWert"
                bind:value={$formData.gesamtWert}
                autofocus />
            </label>
          {/if}
        </div>

        <div class="md:w-2/3 md:m-auto">
          <button
            type="button"
            id="nextBtn"
            on:click={nextTab}
            class="primary-button w-full"
            disabled={$formData.versicherungsTyp != 'SINFONIMA' && !$formData.gesamtWert}>
            Weiter
          </button>
        </div>
      {/if} -->
      {#if currentTab == 0}
        <div class="tab flex flex-col lg:w-4/6 m-auto">
          <p class="text-x1p5 md:text-x0p25">Schritt 1 von 3</p>
          <h2 class="text-x3 md:text-x2 text-primary mb-x1">Schaden melden</h2>
          <div class="grid md:grid-cols-2 gap-x0p5">
            <label class="inline-flex flex-col ">
              Anrede *
              <select bind:value={$formData.anrede} autofocus>
                <option value="Frau">Frau</option>
                <option value="Herr">Herr</option>
              </select>
            </label>
            <label class="inline-flex flex-col ">
              Vorname *
              <input name="vorname" bind:value={$formData.vorname} required />
            </label>
            <label class="inline-flex flex-col ">
              Nachname *
              <input name="nachname" bind:value={$formData.nachname} required />
            </label>
            <label class="inline-flex flex-col ">
              Straße *
              <input name="telefon" bind:value={$formData.strasse} required />
            </label>
            <label class="inline-flex flex-col ">
              Postleitzahl *
              <input name="telefon" bind:value={$formData.plz} required />
            </label>
            <label class="inline-flex flex-col ">
              Ort *
              <input name="telefon" bind:value={$formData.ort} required />
            </label>
            <label class="inline-flex flex-col ">
              E-Mail *
              <input name="email" bind:value={$formData.email} required />
            </label>
            <label class="inline-flex flex-col ">
              Telefonnummer *
              <input name="telefon" bind:value={$formData.telefon} required />
            </label>
            <label class="inline-flex flex-col ">
              Versicherungsscheinnummer *
              <input name="telefon" bind:value={$formData.scheinnr} required />
            </label>
            <label class="inline-flex flex-col ">
              Schadendatum *
              <input name="telefon" bind:value={$formData.datum} required />
            </label>
            <label class="inline-flex flex-col ">
              Schadenort *
              <input name="telefon" bind:value={$formData.ort} required />
            </label>
            <label class="inline-flex flex-col ">
              Schadenhöhe *
              <input
                name="telefon"
                bind:value={$formData.schadenhoehe}
                required />
              <span>Soweit schon bekannt</span>
            </label>
            <label class="inline-flex flex-col ">
              Wer hat den Schaden verursacht? *
              <input
                name="telefon"
                bind:value={$formData.verursacher}
                required />
            </label>
            <label class="inline-flex flex-col ">
              Betroffener Gegenstand? *
              <input
                name="telefon"
                bind:value={$formData.gegenstand}
                required />
            </label>
            <label for="" class="mt-x2 block col-span-2">
              Kurze Schadenschilderung *
              <textarea
                bind:value={$formData.schilderung}
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
                class:active={$formData.vorsteuerabzug === 'ja'}>
                <input
                  type="radio"
                  bind:group={$formData.vorsteuerabzug}
                  value="ja" />
                <div class="flex items-center">
                  <div class="indicator relative inline mr-x1" />
                </div>
                <span>Ja</span>
              </label>
              <label
                class="block p-x1 md:p-x0p5 flex-1 flex mb-x1 items-center"
                class:active={$formData.vorsteuerabzug === 'nein'}>
                <input
                  type="radio"
                  bind:group={$formData.vorsteuerabzug}
                  value="nein" />
                <div class="flex">
                  <div class="indicator relative inline mr-x1" />
                </div>
                <span>Nein</span>
              </label>
            </div>
            {#if errors.tab1}
              <div class="text-warning col-span-2">
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
              disabled={!$formData.vorname || !$formData.nachname || !$formData.email}>
              Weiter
            </button>
            <button
              type="button"
              id="prevBtn"
              on:click={prevTab}
              class="primary-button order-1 mr-x0p5 w-1/2">
              Zurück
            </button>
          </div>
          {#if currentTab == 2}
            <div class="tab lg:w-4/6 lg:mx-auto">
              <p class="text-x1p5 md:text-x0p25">Schritt 3 von 3</p>
              <h2 class="text-x3 md:text-x2 text-primary mb-x1">
                An wen soll die Entschädigung gezahlt werden?
              </h2>
              <label class="inline-flex flex-col ">
                Name *
                <input
                  name="konto-name"
                  bind:value={$formData.kontoName}
                  required />
              </label>
              <label class="inline-flex flex-col ">
                IBAN *
                <input name="iban" bind:value={$formData.iban} required />
              </label>
              <label class="inline-flex flex-col ">
                Geldinstitut *
                <input name="bank" bind:value={$formData.bank} required />
              </label>

              <h2 class="text-x3 md:text-x2 text-primary mb-x1">
                Deine Instrumente
              </h2>
              <div class="instrument-list">
                {#each $formData.instruments as instrument, index}
                  <SingleInstrument bind:instrument {index} />
                {/each}
              </div>
              <button
                type="button"
                class="t-x1 p-x1 w-full -mt-x2 add-instrument"
                on:click={addInstrument}>
                Weiteres Instrument / Zubehör hinzufügen
              </button>
              <label for="" class="mt-x2 block">
                Anmerkungen & Fragen
                <textarea
                  bind:value={$formData.nachricht}
                  rows="4"
                  class="w-full border-primary" />
              </label>
              <label class="flex items-center my-x0p5 cursor-pointer">
                <input
                  type="checkbox"
                  name="terms"
                  bind:checked={termsAccepted}
                  class="mr-x1 md:mr-x0p5 " />
                <span>
                  Ich akzeptiere die Übertragung und Speicherung meiner Daten
                  zum Zwecke des angebotenen Services.
                  <a href="/datenschutz" class="underline">Mehr erfahren</a>
                </span>
              </label>
              <div class="grid gap-x0p5 grid-cols-2 md:flex md:justify-center">
                <button
                  class="primary-button order-2 w-1/2"
                  disabled={!termsAccepted}
                  on:click|preventDefault={handleSubmit}>
                  Absenden
                </button>
                <button
                  type="primary-button"
                  id="prevBtn"
                  on:click={prevTab}
                  class="primary-button order-1 mr-x0p5 w-1/2">
                  Zurück
                </button>
              </div>

              {#if errors.tab2}
                <div class="text-warning">
                  Bitte fülle alle mit * markierten Felder aus und akzeptiere
                  die Bedingungen.
                </div>
              {/if}
              <div class="grid gap-x0p5 grid-cols-2 md:flex md:justify-center ">
                <button
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
      {/if}
    </div>
  </form>

  <!-- {/if} -->
</Layout>
