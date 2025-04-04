<script>
  let inputText = "";
  export let alertText = ""
  export let movies_data = [];
  export let data_temp = [];

  $: if(inputText.length > 16){
      alertText = "Input limit exceeded!!!!";
  } else{
      alertText = ""
  }
  
  const searchMovie = () => {
      data_temp = movies_data.filter(movie => 
          movie.title.toLowerCase().includes(inputText.toLowerCase())
      );
      console.log(data_temp)
      if (data_temp.length === 0) {
          alertText = "No Result!";
      } else {
          alertText = "";
      }
  };
</script>

<main>
  <div class="search-box">
  <div class="input-group">
      <input type="search" 
      bind:value={inputText}         
      on:keydown={(e) =>{
          if(e.key==="Enter"){
              searchMovie();
          }
      }}/>
      <button on:click={searchMovie}>Search</button>
  </div>
  </div>
  <p class="text-center">inputText:{inputText}</p>
  {#if alertText}
  <p class="text-center alert-text">{alertText}</p>
  {/if}
</main>

<style>
  .text-center {
      text-align: center;
  }

  .alert-text {
      color: red;
  }

  .search-box {
      padding: 0 20px;
      margin: 20px;
  }

  .input-group {
      width: 100%;
      border: 1px solid #ccc;
      position: relative;
      padding: 0 20px;
  }

  .search-box input {
      width: 100%;
      border: none;
      outline: none;
      padding: 10px;
  }

  .search-box button {
      position: absolute;
      right: 0;
      top: 0;
      border: none;
      outline: none;
      background: #666;
      color: #fff;
      width: 5em;
      height: 100%;
      margin: 0;
  }
</style>