<script>
  export let isModal = false;
  export let handleMovieNumber;
  export let handleLike;
  export let data_temp = [];
</script>

<main class="container">
  <h1>Movie Information</h1>
  {#each data_temp as movie, i}
    <div class="item">    
      <figure>
        <img src={movie.imgUrl} alt={movie.title}>
      </figure>
      <div class="info">
        <h3 class="bg-yellow">{movie.title}</h3>
        <h3>{movie.title}</h3>
        <p>Release Year: {movie.year}</p>
        <p>Genre: {movie.category}</p>
        <button class="btn btn-secondary" 
          on:click={() => { handleLike(movie.id) }}>
          Like {movie.likeCount}
        </button>  
        <button class="btn btn-primary"
          on:click={() => { isModal = true; handleMovieNumber(movie.id); }}>
          View Details
        </button> 
      </div>          
    </div>
  {/each}  
</main>

<style>
  .bg-yellow {
    background: gold;
    padding: 10px;
    color: #333;
  }

  .item {
    width: 100%;
    border: 1px solid #ccc;
    display: flex;
    margin-bottom: 20px;
    padding: 1rem;
  }

  .item figure {
    width: 30%;
    margin-right: 1rem;
  }

  .item img {
    width: 100%;
  }

  .item .info {
    width: 100%;
  }

  .btn {
    display: inline-block;
    padding: 0.3rem 0.3rem;
    /* font-size: 1rem; */
    /* font-weight: 500; */
    /* text-align: center; */
    /* text-decoration: none; */
    border-radius: 0.375rem;
    cursor: pointer;
    /* transition: background-color 0.2s, border-color 0.2s; */
    border: 1px solid transparent;
  }

  .btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #142436;
  }

  .btn-secondary {
    color: #000;
    background-color: #cbd0d4;
    border-color: #142436;
  }

</style>
