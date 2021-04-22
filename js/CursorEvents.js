AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" }
    },
    init: function() {
      this.handleClickEvents();
    },
    handleClickEvents: function() {
      //  Click Events
      this.el.addEventListener("click", evt => {
        this.handleViewState();
      });
    },
    handleViewState: function() {
      const el = this.el;
  
      const id = el.getAttribute("id");
  
      //Keeping all the images as id of the images with .jpg extension
      const sideViewPlacesId = ["place-1", "place-2", "place-3", "place-4"];
  
      if (sideViewPlacesId.includes(id)) {
        
        const skyEl = document.querySelector("#main-container");
        
        //Set the 360 degree image to the sky element.
        skyEl.setAttribute("material", {
          src: `./assets/${id}.png`,
          color: "#fff"
        });
       
      }
    },
    
    
  });