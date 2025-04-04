<script>  
  import Navbar from "./lib/components/Navbar.svelte";
  import Modal from "./lib/components/Modal.svelte";
  import Movies from "./lib/components/Movies.svelte";
  import movies_data_component from "./lib/movies.js";
  import Event from "./lib/components/Event.svelte";
  import SearchBar from "./lib/components/SearchBar.svelte";

  let movies_data = [...movies_data_component];
  let data_temp = [...movies_data_component];

  let isModal = false;
  let selectedMovie = 0;
  let alertText = "";
  let isEvent = true;

  const handleLike = (id) => {
    movies_data.map(movie => {
      if(movie.id === id){
        movie.likeCount += 1;
      };
    });

    data_temp = movies_data.filter(movie => {
      return data_temp.includes(movie);
    });

  };

  const closeModal = () => {
    isModal = false;
  }

  const handleMovieNumber = (i) => {
    selectedMovie = i;
  }
</script>

<main>
  <Navbar />

  {#if isEvent}
    <Event bind:isEvent/>
  {/if}

  <SearchBar {movies_data} bind:data_temp bind:alertText />

  <div class="container">
    <button on:click={() => {
      data_temp = [...movies_data];
      alertText = "";
    }}>
      View All
    </button>
  </div>  

  <Movies {data_temp} bind:isModal {handleMovieNumber} {handleLike}/>

  {#if isModal}
    <Modal {movies_data} 
      {selectedMovie} 
      {closeModal}
    />
  {/if}
</main>

<style>
  .container {
    text-align: center;
  }
</style>