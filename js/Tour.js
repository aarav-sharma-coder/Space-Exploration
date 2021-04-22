AFRAME.registerComponent("tour",{
    schema:{
        zoomAspectRatio:{type:"number",default:1},
    },
    init: function(){
        this.showView();
    },
    showView: function() {
        const skyEl = document.querySelector("#main-container");
        skyEl.setAttribute("material", {
          src: `./assets/place-0.jpg`,
          color: "#fff"
        });
      },
    update: function() {
        window.addEventListener("keydown", e => {
          cameraEl = document.querySelector("#main-container")
          if (e.key === "ArrowUp") {
            if (this.data.zoomAspectRatio <= 10) {
              this.data.zoomAspectRatio += 0.002;
              cameraEl.setAttribute("zoom", this.data.zoomAspectRatio);
            }
          }
          if (e.key === "ArrowDown") {
            if (this.data.zoomAspectRatio > 1) {
              this.data.zoomAspectRatio -= 0.002;
              cameraEl.setAttribute("zoom", this.data.zoomAspectRatio);
            }
          }
        });
      }
})