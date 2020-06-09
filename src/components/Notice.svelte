<script>
  let showNotice = false;

  // When in client browser, run getCookie to look for "showNotice"
  if (process.browser === true) {
    function checkCookie() {
      const name = "showNotice";
      let localCookie = getCookie(name);
      localCookie ? (showNotice = localCookie) : (showNotice = true);
      // cookiesAccepted = getCookie(name);
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
  function hideNotice() {
    showNotice = false;
    const cookieName = "showNotice";
    const cookieValue = false;
    const daysValid = 5;
    setCookie(cookieName, cookieValue, daysValid);
  }
</script>

<style>
  .icon {
    /* content: ""; */
    cursor: pointer;
  }
  .icon:before,
  .icon:after {
    background-color: #6b46c1;
    top: 45%;
    position: absolute;
    width: 100%;
    height: 2px;
    content: "";
    display: inline-block;
  }
  .icon:before {
    transform: rotate(-45deg);
  }
  .icon:after {
    transform: rotate(45deg);
  }
</style>

{#if showNotice == true}
  <div
    class="hidden md:relative md:flex items-center justify-center w-full
    bg-primary-light p-x1p5 md:px-x1p5 md:py-x0p25 md:flex z-10 text-x2
    md:text-x0p5 lg:text-x0p25">
    <p class="text-center block text-primary">
      Unser Geschenk für Dich bis 30. Juni: 10 % Sonderrabatt!
    </p>
    <div
      on:click={hideNotice}
      class="icon absolute right-0 mr-x1p5 ml-x0p5 w-x0p5 h-x0p5" />
  </div>
{/if}
