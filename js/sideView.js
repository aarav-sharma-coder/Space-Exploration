AFRAME.registerComponent("place-side-view", {
    init: function() {
      this.createPlaces();
    },
    
    createPlaces: function() {
      const sideViewContainer = document.querySelector(
        "#side-view-container"
      );
  
      let prevoiusXPosition = -150;
      let prevoiusYPosition = 30;
  
      for (var i = 1; i <= 3; i++) {
        const position = {
          x: (prevoiusXPosition += 50),
          y: (prevoiusYPosition += 2),
          z: -40
        };
        const entityEl = this.createPlaceThumbNail(position, i);
        sideViewContainer.appendChild(entityEl);
      }
    },
    createPlaceThumbNail: function(position, id) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("id", `place-${id}`);
  
      entityEl.setAttribute("geometry", {
        primitive: "circle",
        radius: 5.5
      });
  
      entityEl.setAttribute("material", {
        src: "./assets/wormhole.png",
        opacity: 0.9
      });
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("cursor-listener", {});
  
      return entityEl;
    }
  });