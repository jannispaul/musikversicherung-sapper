<script>
  export let videoId;
  export let title;
  // let player;
  // import { createEventDispatcher, onMount } from "svelte";
  // const dispatch = createEventDispatcher();
  // let divId = "player_" + parseInt(Math.random() * 100000).toString();
  // export let height = "100%";
  // export let width = "100%";
  // onMount(() => {
  //   let ytTagUrl = "https://www.youtube.com/iframe_api";
  //   if (!isMyScriptLoaded(ytTagUrl)) {
  //     // 2. This code loads the IFrame Player API code asynchronously.
  //     var tag = document.createElement("script");
  //     tag.src = ytTagUrl;
  //     var firstScriptTag = document.getElementsByTagName("script")[0];
  //     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  //   }
  //   window.onYouTubeIframeAPIReady = function() {
  //     window.dispatchEvent(new Event("YouTubeIframeAPIReady"));
  //   };
  //   window.addEventListener("YouTubeIframeAPIReady", function() {
  //     if (YouTubeIframeAPIReady == false) {
  //       // first load of an YT Video on this project
  //       YouTubeIframeAPIReady = true; // now the Player can be created
  //       createPlayer();
  //     }
  //   });
  //   function createPlayer() {
  //     player = new YT.Player(divId, {
  //       height,
  //       width,
  //       videoId: videoId,
  //       playerVars: {
  //         origin: "https://musikversicherung.com",
  //         modestbranding: "1"
  //       },
  //       events: {
  //         //'onReady': onPlayerReady,
  //         onStateChange: onPlayerStateChange
  //       }
  //     });
  //   }
  //   if (YouTubeIframeAPIReady) {
  //     createPlayer(); // if the YT Script is ready, we can create our player
  //   }
  // });
  // function isMyScriptLoaded(url = "") {
  //   var scripts = document.getElementsByTagName("script");
  //   for (var i = scripts.length; i--; ) {
  //     if (scripts[i].src == url) return true;
  //   }
  //   return false;
  // }
  // function onPlayerStateChange({ data }) {
  //   dispatch("StateChange", data);
  // }
  // export function playVideo() {
  //   player.playVideo();
  // }
</script>

<style>
  .iframe-container {
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;
    width: 100%;
  }

  .iframe-container iframe {
    position: absolute;
    border: 0;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }
</style>

<!-- <script context="module">
  let YouTubeIframeAPIReady = false;
</script> -->
<!-- <div class="yt-component">
  <div id={divId} />
</div> -->
<div class="iframe-container mb-x1">
  <iframe
    {title}
    src="https://www.youtube-nocookie.com/embed/{videoId}?rel=0"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope;
    picture-in-picture"
    allowfullscreen />
</div>
