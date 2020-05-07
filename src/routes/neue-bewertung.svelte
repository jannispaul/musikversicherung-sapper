<script>
  let rating = 5;
  import Layout from "./_layouts/layout.svelte";
</script>

<style>
  label:focus {
    outline: 0;
  }
  .stars label:hover {
    cursor: pointer;
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
  :global(.primary-button) {
    margin-top: 3vw;
    background: rgba(107, 70, 193, 0.15);
    padding: 1.5vw;
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

    :global(textarea) {
      padding: 0.75vw;
      border: 0.2vw solid #6b46c1;
    }
    :global(.primary-button) {
      padding: 0;
      background: none;
      margin-top: 0;
    }
  }
</style>

<Layout>
  <div class="text-x2 md:text-x1 lg:text-x0p5 px-x1p5 md:grid grid-cols-2">
    <h1 class="text-x4 md:text-x2 text-primary mb-x2 md:mb-x0p5 md:mt-x2">
      Ich freue mich über Deine Bewertung!
    </h1>
    <form
      class="flex flex-col md:p-x1"
      method="POST"
      action="https://mystaticman.herokuapp.com/v3/entry/github/jannispaul/musikversicherung/master/src/reviews">
      <input
        type="hidden"
        name="options[redirect]"
        value="https://musikversicherung.com/bewertung-erfolgreich" />
      <fieldset class="stars mb-x1">
        <label
          for="customer-rating[star-1]"
          class="inline-block float-left"
          tabindex="0"
          aria-label="1 Stern">
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 48 48"
            style="vertical-align: middle;"
            fill="#6B46C1">
            <path
              d="M24 36.5681L10.3662 44.831L13.9812 29.338L2 18.9061L17.8028
              17.5634L24 3L30.1972 17.5634L46 18.9061L34.0188 29.338L37.6338
              44.831L24 36.5681Z" />
          </svg>
          <input
            type="radio"
            name="fields[rating]"
            id="customer-rating[star-1]"
            bind:group={rating}
            value={1}
            class="hidden" />
        </label>
        <label
          for="customer-rating[star-2]"
          class="float-left"
          tabindex="0"
          aria-label="2 Sterne">
          <div>
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 48 48"
              style="vertical-align: middle;"
              fill={rating >= 2 ? '#6B46C1' : 'gray'}>
              <path
                d="M24 36.5681L10.3662 44.831L13.9812 29.338L2 18.9061L17.8028
                17.5634L24 3L30.1972 17.5634L46 18.9061L34.0188 29.338L37.6338
                44.831L24 36.5681Z" />
            </svg>
          </div>

          <input
            type="radio"
            name="fields[rating]"
            id="customer-rating[star-2]"
            bind:group={rating}
            value={2}
            class="hidden" />
        </label>

        <label
          for="customer-rating[star-3]"
          class="float-left"
          tabindex="0"
          aria-label="3 Sterne">
          <div>
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 48 48"
              style="vertical-align: middle;"
              fill={rating >= 3 ? '#6B46C1' : 'gray'}>
              <path
                d="M24 36.5681L10.3662 44.831L13.9812 29.338L2 18.9061L17.8028
                17.5634L24 3L30.1972 17.5634L46 18.9061L34.0188 29.338L37.6338
                44.831L24 36.5681Z" />
            </svg>
          </div>
          <input
            type="radio"
            name="fields[rating]"
            id="customer-rating[star-3]"
            bind:group={rating}
            value={3}
            class="hidden" />
        </label>

        <label
          for="customer-rating[star-4]"
          class="float-left"
          tabindex="0"
          aria-label="4 Sterne">
          <div>
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 48 48"
              style="vertical-align: middle;"
              fill={rating >= 4 ? '#6B46C1' : 'gray'}>

              <path
                d="M24 36.5681L10.3662 44.831L13.9812 29.338L2 18.9061L17.8028
                17.5634L24 3L30.1972 17.5634L46 18.9061L34.0188 29.338L37.6338
                44.831L24 36.5681Z" />
            </svg>
          </div>
          <input
            type="radio"
            name="fields[rating]"
            id="customer-rating[star-4]"
            bind:group={rating}
            value={4}
            class="hidden" />
        </label>
        <label
          for="customer-rating[star-5]"
          class="float-left"
          tabindex="0"
          aria-label="5 Sterne">
          <div>
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 48 48"
              style="vertical-align: middle;"
              fill={rating >= 5 ? '#6B46C1' : 'gray'}>

              <path
                d="M24 36.5681L10.3662 44.831L13.9812 29.338L2 18.9061L17.8028
                17.5634L24 3L30.1972 17.5634L46 18.9061L34.0188 29.338L37.6338
                44.831L24 36.5681Z" />
            </svg>
          </div>
          <input
            type="radio"
            name="fields[rating]"
            id="customer-rating[star-5]"
            checked=""
            bind:group={rating}
            value={5}
            class="hidden" />
        </label>
      </fieldset>

      <label class="inline-flex flex-col mb-x0p5">
        <span>Name</span>
        <input
          type="text"
          id="form[name]"
          name="fields[name]"
          required
          class="" />
      </label>

      <label class="inline-flex flex-col mb-x0p5 md:mb-x1">
        <span>Deine Rezension</span>
        <textarea name="fields[review]" rows="4" required class="" />
      </label>

      <button class="primary-button md:text-left " type="submit" name="action">
        Absenden
      </button>

    </form>

  </div>

</Layout>
