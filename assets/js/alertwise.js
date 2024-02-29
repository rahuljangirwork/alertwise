class alertWise {
  constructor(message, type) {
    this.message = message;
    this.type = type;
    this.element = this.createalertwiseElement();
    this.timeLeft = 3000;
    this.progressInterval = null;
    this.hovering = false; // Track hover state
    this.initEventListeners();
  }

  initEventListeners() {
    // Pause animation when mouse enters the alertwise
    this.element.addEventListener("mouseenter", () => {
      this.hovering = true;
      clearInterval(this.progressInterval);
    });

    // Resume animation when mouse leaves the alertwise
    this.element.addEventListener("mouseleave", () => {
      this.hovering = false;
      this.startProgressInterval();
    });
  }

  createalertwiseElement() {
    const alertwise = document.createElement("div");
    alertwise.classList.add("alertwise", this.type);

    const icon = document.createElement("div");
    icon.classList.add(`${this.type}__icon`);
    icon.innerHTML = this.getIconSVG(this.type);
    alertwise.appendChild(icon);

    const title = document.createElement("div");
    title.classList.add(`${this.type}__title`);
    title.textContent = this.message;
    alertwise.appendChild(title);

    const progress = document.createElement("div");
    progress.classList.add("alertwise__progress");
    const progressBar = document.createElement("div");
    progressBar.classList.add(
      "alertwise__progress-bar",
      `${this.type}__progress-bar`
    );
    progress.appendChild(progressBar);
    alertwise.appendChild(progress);

    const closeBtn = document.createElement("div");
    closeBtn.classList.add(`${this.type}__close`);
    closeBtn.innerHTML = this.getCloseIconSVG();
    closeBtn.addEventListener("click", () => this.close());
    alertwise.appendChild(closeBtn);

    return alertwise;
  }

  getIconSVG(type) {
    switch (type) {
      case "success":
        return ' <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill-rule="evenodd" fill="#393a37" d="m12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm4.768 9.14c.0878-.1004.1546-.21726.1966-.34383.0419-.12657.0581-.26026.0477-.39319-.0105-.13293-.0475-.26242-.1087-.38085-.0613-.11844-.1456-.22342-.2481-.30879-.1024-.08536-.2209-.14938-.3484-.18828s-.2616-.0519-.3942-.03823c-.1327.01366-.2612.05372-.3782.1178-.1169.06409-.2198.15091-.3027.25537l-4.3 5.159-2.225-2.226c-.1886-.1822-.4412-.283-.7034-.2807s-.51301.1075-.69842.2929-.29058.4362-.29285.6984c-.00228.2622.09851.5148.28067.7034l3 3c.0983.0982.2159.1748.3454.2251.1295.0502.2681.0729.4069.0665.1387-.0063.2747-.0414.3991-.1032.1244-.0617.2347-.1487.3236-.2554z" clip-rule="evenodd"></path></svg>';
      case "error":
        return '<svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill="#393a37" d="m13 13h-2v-5h2zm0 4h-2v-2h2zm-12 3h22l-11-19z"></path></svg>';
      case "warning":
        return '<svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13 14h-2v-5h2zm0 4h-2v-2h2zm-12 3h22l-11-19z" fill="#393a37"></path></svg>';
      default:
        return "";
    }
  }

  getCloseIconSVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" height="20"><path fill="#393a37" d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"></path></svg>';
  }

  show() {
    const alertwiseContainer = document.getElementById("alertwise-container");
    alertwiseContainer.appendChild(this.element);
    setTimeout(() => {
      this.element.style.opacity = "1";
    }, 100);

    this.startProgressInterval();
  }

  startProgressInterval() {
    if (!this.hovering) {
      this.progressInterval = setInterval(() => {
        this.timeLeft -= 25;
        const progressBar = this.element.querySelector(
          `.${this.type}__progress-bar`
        );
        progressBar.style.width = `${100 - (this.timeLeft / 3000) * 100}%`;
        if (this.timeLeft <= 0) {
          this.close();
        }
      }, 50);
    }
  }

  close() {
    clearInterval(this.progressInterval);
    this.element.style.animation = "fadeOut .3s linear forwards";
    setTimeout(() => {
      this.element.remove();
    }, 300);
  }
}

function showalertwise(message, type) {
  const alertwise = new alertWise(message, type);
  alertwise.show();
}











