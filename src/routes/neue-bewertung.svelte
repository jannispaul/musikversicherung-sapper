<script>
  let rating = 5;
  import Layout from "./_layouts/layout.svelte";
</script>

<Layout>
  <div
    class="text-x2 md:text-x1 lg:text-x0p5 px-x1p5 md:grid grid-cols-2 md:-mt-x1">
    <h1
      class="text-x4 md:text-x2 text-primary mb-x1 font-medium md:h-100
      md:text-light md:flex md:items-center md:text-center md:bg-primary">
      Ich freue mich über Deine Bewertung!
    </h1>
    <form
      class="flex flex-col md:p-x1"
      method="POST"
      action="https://mystaticman.herokuapp.com/v3/entry/github/jannispaul/musikversicherung/master/reviews">
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
            viewBox="0 0 20 20"
            style="vertical-align: middle;"
            fill="#6B46C1">
            <path
              d="M.476 6.952l7.159-.178L9.955 0l2.382 6.754 7.16.114-5.687 4.351
              2.104 6.845L10.018 14l-5.86 4.116 2.043-6.863z" />
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
              viewBox="0 0 20 20"
              style="vertical-align: middle;"
              fill={rating >= 2 ? '#6B46C1' : 'gray'}>
              <path
                d="M.476 6.952l7.159-.178L9.955 0l2.382 6.754 7.16.114-5.687
                4.351 2.104 6.845L10.018 14l-5.86 4.116 2.043-6.863z" />
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
              viewBox="0 0 20 20"
              style="vertical-align: middle;"
              fill={rating >= 3 ? '#6B46C1' : 'gray'}>
              <path
                d="M.476 6.952l7.159-.178L9.955 0l2.382 6.754 7.16.114-5.687
                4.351 2.104 6.845L10.018 14l-5.86 4.116 2.043-6.863z" />
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
              viewBox="0 0 20 20"
              style="vertical-align: middle;"
              fill={rating >= 4 ? '#6B46C1' : 'gray'}>

              <path
                d="M.476 6.952l7.159-.178L9.955 0l2.382 6.754 7.16.114-5.687
                4.351 2.104 6.845L10.018 14l-5.86 4.116 2.043-6.863z" />
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
              viewBox="0 0 20 20"
              style="vertical-align: middle;"
              fill={rating >= 5 ? '#6B46C1' : 'gray'}>

              <path
                d="M.476 6.952l7.159-.178L9.955 0l2.382 6.754 7.16.114-5.687
                4.351 2.104 6.845L10.018 14l-5.86 4.116 2.043-6.863z" />
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

      <label class="inline-flex flex-col mb-x0p5 md:mb-x0p25">
        <span>Deine Rezension</span>
        <textarea name="fields[review]" rows="4" required class="" />
      </label>

      <button class="primary-button md:text-left " type="submit" name="action">
        Absenden
      </button>

    </form>

  </div>

</Layout>
