<script>
    import { fly, fade } from "svelte/transition";
    export let isEvent;
</script>

<main>
  <div 
      class='event show' 
      in:fly={{y: -400, duration: 1000}}
      out:fade>
      <p>Event</p>
      <button on:click={()=>(isEvent=false)}>X</button>
  </div>
</main>

<style>
    .event {
      width: 100%;
      background: #666;
      padding: 5px 1em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      text-align: center;
      margin-bottom: 1em;
  
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      transition: all 0.4s;
    }

    .show {
      opacity: 1;
      max-height: 100px;
    }
  
    .event button {
      padding: 2px;
    }
  
  </style>