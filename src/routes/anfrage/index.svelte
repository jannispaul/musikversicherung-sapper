<script>
  import SingleInstrument from "../../components/SingleInstrument.svelte";
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
    background: rgba(107, 70, 193, 0.15);
    padding: 1.6vw 1.5vw 1.5vw 1.5vw;
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
    margin-bottom: 4vw;
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
    margin-bottom: 4vw;
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
<!-- {#if process.browser} -->
<form id="form" method="post" class="text-x2 md:text-x1 lg:text-x0p5 px-x1p5">
  <div class=" ">
    <!-- One "tab" for each step in the form: -->
    {#if currentTab == 0}
      <div class="tab lg:w-4/6 lg:mx-auto">
        <p class="text-x1p5 md:text-x0p25">Schritt 1 von 3</p>
        <h2 class="text-x3 md:text-x2 text-primary mb-x1 leading-tighter">
          Was möchtest Du versichern?
        </h2>
        <div
          class="relative toggle inline md:flex md:items-stretch overflow-hidden">
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
    {/if}
    {#if currentTab == 1}
      <div class="tab flex flex-col lg:w-4/6 m-auto">
        <p class="text-x1p5 md:text-x0p25">Schritt 2 von 3</p>
        <h2 class="text-x3 md:text-x2 text-primary mb-x1">
          Persönliche Informationen
        </h2>
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
            E-Mail *
            <input name="email" bind:value={$formData.email} required />
          </label>
          <label class="inline-flex flex-col ">
            Telefonnummer für Rückfragen
            <input name="telefon" bind:value={$formData.telefon} />
          </label>
          <label class="inline-flex flex-col ">
            Status *
            <select bind:value={$formData.status}>
              <option value="Hobbymusiker">Hobbymusiker</option>
              <option value="Eltern von Musikschüler/in">
                Eltern von Musikschüler/in
              </option>
              <option value="Musiklehrer">Musiklehrer</option>
              <option value="Musikschüler/in">Musikschüler/in</option>
              <option value="Musikstudent">Musikstudent</option>
              <option value="Berufsmusiker (selbstständig)">
                Berufsmusiker (selbstständig)
              </option>
              <option value="Berufsmusiker (angestellt)">
                Berufsmusiker (angestellt)
              </option>
              <option value="DJ">DJ</option>
              <option value="Homestudio">Homestudio</option>
              <option value="Produzent">Produzent</option>
              <option value="Sammler von Vintageinstrumenten">
                Sammler von Vintageinstrumenten
              </option>
              <option value="Musikstudent">Musikstudent</option>
            </select>
          </label>
          <label class="inline-flex flex-col ">
            Wohnsitz in *
            <select bind:value={$formData.wohnsitz}>
              <option value="Deutschland">Deutschland</option>
              <option value="Österreich">Österreich</option>
              <option value="Schweiz">Schweiz</option>
              <option value="AnderesLand">Anderes Land</option>
            </select>
          </label>
          {#if $formData.wohnsitz === 'AnderesLand'}
            <label class="inline-flex flex-col justify-end">
              <input
                name="AnderesLand"
                bind:value={$formData.andererwohnsitz}
                placeholder="Wohnsitz" />
            </label>
          {/if}
          {#if $formData.versicherungsTyp == 'SINFONIMA'}
            <label class="inline-flex flex-col ">
              Mitgliedschaft in einer Organisation
              <select bind:value={$formData.organisation}>
                <option value="Kein Mitglied">Kein Mitglied</option>
                <option value="Bund Dt. Zupfmusiker">
                  Bund Dt. Zupfmusiker
                </option>
                <option value="Student/in an deutschen Musikhochschulen">
                  Student/in an deutschen Musikhochschulen
                </option>
                <option value="Deutsche Orchestervereinigung (DOV)">
                  Deutsche Orchestervereinigung (DOV)
                </option>
                <option value="Deutscher Musikrat">Deutscher Musikrat</option>
                <option value="Deutscher Tonkünstlerverband (DTKV)">
                  Deutscher Tonkünstlerverband (DTKV)
                </option>
                <option value="Jeunesse Musicales Deutschland">
                  Jeunesse Musicales Deutschland
                </option>
                <option value="Jugend musiziert">Jugend musiziert</option>
                <option value="Musikalische Jugend Deutschlands">
                  Musikalische Jugend Deutschlands
                </option>
                <option value="Organisation: Lehrer an einer VDM-Musikschule">
                  Organisation: Lehrer an einer VDM-Musikschule
                </option>
                <option
                  value="Verband Deutscher Musikerzieher und konzertierender
                  Künstler (VDMK)"
                  class="">
                  VDMK - Verband Deutscher Musikerzieher...
                </option>
                <option value="Verband Deutscher Schulmusiker">
                  Verband Deutscher Schulmusiker
                </option>
                <option value="Verband Deutscher Tonmeister">
                  Verband Deutscher Tonmeister
                </option>
                <option value="Verdi - Fachverband Musik">
                  Verdi - Fachverband Musik
                </option>
                <option value="Viola Gesellschaft">Viola Gesellschaft</option>
                <option value="Union deutscher Jazzmusiker">
                  Union deutscher Jazzmusiker
                </option>
                <option value="Sonstige">Sonstige</option>
              </select>
            </label>
          {/if}
          {#if $formData.organisation === 'Sonstige' && $formData.versicherungsTyp == 'SINFONIMA'}
            <label class="inline-flex flex-col justify-end">
              <input
                name="AndereOrganisation"
                bind:value={$formData.organisationSonstige}
                placeholder="Organisaton" />
            </label>
          {/if}
        </div>
        {#if errors.tab1}
          <div class="text-warning">
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
    {/if}
    {#if currentTab == 2}
      <div class="tab lg:w-4/6 lg:mx-auto">
        <p class="text-x1p5 md:text-x0p25">Schritt 3 von 3</p>
        {#if $formData.versicherungsTyp == 'SINFONIMA'}
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
              Ich akzeptiere die Übertragung und Speicherung meiner Daten zum
              Zwecke des angebotenen Services.
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
        {/if}
        {#if $formData.versicherungsTyp == 'IAMSOUND'}
          <div>
            <h2 class="text-x3 md:text-x2 text-primary mb-x1">
              Weitere Details
            </h2>
            <div class="inline flex flex-wrap md:items-stretch toggle ">
              <span class="w-full flex-0">Ist ein Proberaum vorhanden? *</span>
              <label
                class="block p-x1 md:p-x0p5 flex-1 flex mr-x0p5 mb-x1
                items-center"
                class:active={$formData.proberaum === 'ja'}>
                <input
                  type="radio"
                  bind:group={$formData.proberaum}
                  value="ja" />
                <div class="flex items-center">
                  <div class="indicator relative inline mr-x1" />
                </div>
                <span>Ja</span>
              </label>
              <label
                class="block p-x1 md:p-x0p5 flex-1 flex mb-x1 items-center"
                class:active={$formData.proberaum === 'nein'}>
                <input
                  type="radio"
                  bind:group={$formData.proberaum}
                  value="nein" />
                <div class="flex">
                  <div class="indicator relative inline mr-x1" />
                </div>
                <span>Nein</span>
              </label>
            </div>
            {#if $formData.proberaum === 'ja'}
              <div class="inline flex flex-wrap md:items-stretch toggle ">
                <span class="w-full flex-0">
                  Befindet sich der Proberaum in einem auch ansonsten bewohnten
                  Gebäude? *
                </span>
                <label
                  class="block p-x1 md:p-x0p5 flex-1 flex mr-x0p5 mb-x1
                  items-center"
                  class:active={$formData.bewohnt === 'ja'}>
                  <input
                    type="radio"
                    bind:group={$formData.bewohnt}
                    value="ja" />
                  <div class="flex items-center">
                    <div class="indicator relative inline mr-x1" />
                  </div>
                  <span>Ja</span>
                </label>
                <label
                  class="block p-x1 md:p-x0p5 flex-1 flex mb-x1 items-center"
                  class:active={$formData.bewohnt === 'nein'}>
                  <input
                    type="radio"
                    bind:group={$formData.bewohnt}
                    value="nein" />
                  <div class="flex">
                    <div class="indicator relative inline mr-x1" />
                  </div>
                  <span>Nein</span>
                </label>
              </div>
            {/if}
            {#if $formData.bewohnt === 'nein'}
              <label class="inline-flex flex-col justify-end w-full mb-x1">
                Bitte beschreibe kurz die Örtlichkeit und Sicherungen des
                Proberaums *
                <textarea
                  name="Beschreibung w-full"
                  bind:value={$formData.beschreibung}
                  rows="4"
                  class="w-full border-primary" />
              </label>
            {/if}

            <div class="inline flex flex-wrap md:items-stretch toggle">
              <span class="w-full flex-0">
                Wird das Equipment in einem Anhänger transportiert / gelagert? *
              </span>
              <label
                class="block p-x1 md:p-x0p5 flex-1 flex mr-x0p5 mb-x1
                items-center"
                class:active={$formData.anhaenger === 'ja'}>
                <input
                  type="radio"
                  bind:group={$formData.anhaenger}
                  value="ja" />
                <div class="flex items-center">
                  <div class="indicator relative inline mr-x1" />
                </div>
                <span>Ja</span>
              </label>
              <label
                class="block p-x1 md:p-x0p5 flex-1 flex mb-x1 items-center"
                class:active={$formData.anhaenger === 'nein'}>
                <input
                  type="radio"
                  bind:group={$formData.anhaenger}
                  value="nein" />
                <div class="flex">
                  <div class="indicator relative inline mr-x1" />
                </div>
                <span>Nein</span>
              </label>
            </div>
            <div class="inline flex flex-wrap md:items-stretch toggle">
              <span class="w-full flex-0">
                Verdienst Du Geld mit Deiner Musik (haupt- oder nebenberuflich)?
                *
              </span>
              <label
                class="block p-x1 md:p-x0p5 flex-1 flex mr-x0p5 mb-x1
                items-center"
                class:active={$formData.verdientGeld === 'ja'}>
                <input
                  type="radio"
                  bind:group={$formData.verdientGeld}
                  value="ja" />
                <div class="flex items-center">
                  <div class="indicator relative inline mr-x1" />
                </div>
                <span>Ja</span>
              </label>
              <label
                class="block p-x1 md:p-x0p5 flex-1 flex mb-x1 items-center"
                class:active={$formData.verdientGeld === 'nein'}>
                <input
                  type="radio"
                  bind:group={$formData.verdientGeld}
                  value="nein" />
                <div class="flex">
                  <div class="indicator relative inline mr-x1" />
                </div>
                <span>Nein</span>
              </label>
            </div>
            {#if $formData.verdientGeld === 'ja'}
              <div class="inline flex flex-wrap md:items-stretch toggle">
                <span class="w-full flex-0">
                  Möchtest Du zusätzlich ein individuelles Angebot für eine
                  Musikerhaftpflichtversicherung? *
                </span>
                <label
                  class="block p-x1 md:p-x0p5 flex-1 flex mr-x0p5 mb-x1
                  items-center"
                  class:active={$formData.musikerhaftpflicht === 'ja'}>
                  <input
                    type="radio"
                    bind:group={$formData.musikerhaftpflicht}
                    value="ja" />
                  <div class="flex items-center">
                    <div class="indicator relative inline mr-x1" />
                  </div>
                  <span>Ja</span>
                </label>
                <label
                  class="block p-x1 md:p-x0p5 flex-1 flex mb-x1 items-center"
                  class:active={$formData.musikerhaftpflicht === 'nein'}>
                  <input
                    type="radio"
                    bind:group={$formData.musikerhaftpflicht}
                    value="nein" />
                  <div class="flex">
                    <div class="indicator relative inline mr-x1" />
                  </div>
                  <span>Nein</span>
                </label>
              </div>
            {/if}
          </div>
          <label class="flex items-center my-x0p5">
            <input
              type="checkbox"
              name="terms"
              bind:checked={termsAccepted}
              class="mr-x1 md:mr-x0p5" />
            <span>
              Ich akzeptiere die Übertragung und Speicherung meiner Daten zum
              Zwecke des angebotenen Services.
              <a href="/datenschutz" class="underline">Mehr erfahren</a>
            </span>
          </label>
          {#if errors.tab2}
            <div class="text-warning">
              Bitte fülle alle mit * markierten Felder aus und akzeptiere die
              Bedingungen.
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
        {/if}
      </div>
    {/if}
  </div>
</form>
<!-- {/if} -->
