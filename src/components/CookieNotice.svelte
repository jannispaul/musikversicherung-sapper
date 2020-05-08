<script>
  let cookiesAccepted = false;

  // When in client browser, run getCookie to look for "cookiesAccepted"
  if (process.browser === true) {
    function checkCookie() {
      const name = "cookiesAccepted";
      cookiesAccepted = getCookie(name);
    }
    checkCookie();
  }

  // Initializing function to set a cookie
  function setCookie(name, value, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  // Initializing function to get a cookie
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  // On click, set cookiesAccepted to true and run setCookie
  function acceptCookies() {
    cookiesAccepted = true;
    const cookieName = "cookiesAccepted";
    const cookieValue = true;
    const daysValid = 365;
    setCookie(cookieName, cookieValue, daysValid);
  }
</script>

{#if cookiesAccepted == false}
  <div
    class="w-full bg-primary-light p-x1p5 md:p-x0p5 md:flex fixed bottom-0 z-10
    text-x2 md:text-x1 lg:text-x0p5">
    <p class="md:mr-x1 mb-x1 md:mb-0">
      Cookies helfen uns bei der Bereitstellung unserer Inhalte und Dienste.
      Durch die weitere Nutzung der Webseite stimmst Du der Verwendung von
      Cookies und Google Analytics zu.
      <a href="/datenschutz" class="underline">Mehr erfahren</a>
    </p>
    <button
      on:click={acceptCookies}
      class="w-full md:w-auto bg-primary px-x0p25 py-x0p5 md:p-x0p25 text-light">
      Verstanden!
    </button>
  </div>
{/if}
